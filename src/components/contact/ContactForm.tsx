import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { CircleCheckIcon, Loader2Icon, SendIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { formatINR } from "@/lib/format"
import { whatsappLink } from "@/lib/whatsapp"
import { offers } from "@/data/offers"
import { site } from "@/data/site"
import { WhatsAppIcon } from "@/components/brand/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const NOT_SURE = "not-sure"

// Roomier than shadcn's compact default: easier to tap on phones.
const fieldClass = "h-11 rounded-xl bg-white px-3.5 md:text-[15px]"

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z
    .string()
    .trim()
    .refine((v) => /^(?:\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, "")), "Enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .refine((v) => v === "" || z.email().safeParse(v).success, "Enter a valid email address"),
  business: z.string().trim(),
  plan: z.string().min(1, "Choose a plan"),
  domain: z.string().trim(),
  message: z.string().trim().max(1000, "Please keep it under 1000 characters"),
  botcheck: z.boolean(),
})

type FormValues = z.infer<typeof schema>

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

function planLabel(slug: string) {
  const o = offers.find((x) => x.slug === slug)
  if (!o) return "Not sure yet"
  return o.price === null ? o.name : `${o.name} (${formatINR(o.price)})`
}

export function ContactForm({ defaultPlan }: { defaultPlan?: string }) {
  const [submitted, setSubmitted] = useState<FormValues | null>(null)
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      business: "",
      plan: offers.some((o) => o.slug === defaultPlan) ? defaultPlan : "",
      domain: "",
      message: "",
      botcheck: false,
    },
  })

  async function onSubmit(values: FormValues) {
    if (values.botcheck) return

    if (!WEB3FORMS_KEY) {
      // No key configured (local/dev): show the success flow without sending.
      console.warn("VITE_WEB3FORMS_KEY is not set; form submission was not sent.")
      toast.info("Demo mode: add VITE_WEB3FORMS_KEY to receive form emails.")
      setSubmitted(values)
      return
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry: ${planLabel(values.plan)} from ${values.name}`,
          from_name: `${site.name} website`,
          name: values.name,
          phone: values.phone,
          email: values.email || undefined,
          business: values.business || "-",
          plan: planLabel(values.plan),
          domain: values.domain || "-",
          message: values.message || "-",
        }),
      })
      const data = (await res.json()) as { success?: boolean; message?: string }
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed")
      toast.success("Thanks! Your enquiry has been sent.")
      setSubmitted(values)
    } catch {
      toast.error("Something went wrong. Please message us on WhatsApp instead.", {
        action: { label: "WhatsApp", onClick: () => window.open(whatsappLink(), "_blank", "noopener") },
      })
    }
  }

  if (submitted) {
    const message = `Hi Innover Labs! I just sent an enquiry on your website.\nName: ${submitted.name}\nPlan: ${planLabel(submitted.plan)}${submitted.business ? `\nBusiness: ${submitted.business}` : ""}`
    return (
      <div className="flex flex-col items-center gap-5 py-10 text-center" role="status">
        <span className="grid size-16 place-items-center rounded-full bg-brand-ice text-brand-blue">
          <CircleCheckIcon className="size-8" />
        </span>
        <h3 className="text-2xl font-bold">Thanks, {submitted.name.split(" ")[0]}!</h3>
        <p className="max-w-sm text-muted-foreground">
          We've got your details and will WhatsApp you {site.responseTime}. Want to skip the wait?
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Continue on WhatsApp
            </a>
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={() => {
              reset()
              setSubmitted(null)
            }}
          >
            Send another
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Your name" required error={errors.name?.message} className="sm:col-span-1">
        {(id, describedBy) => (
          <Input id={id} className={fieldClass} autoComplete="name" placeholder="Priya Sharma" aria-describedby={describedBy} aria-invalid={!!errors.name} {...register("name")} />
        )}
      </Field>
      <Field label="Phone / WhatsApp" required error={errors.phone?.message}>
        {(id, describedBy) => (
          <Input id={id} className={fieldClass} type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" aria-describedby={describedBy} aria-invalid={!!errors.phone} {...register("phone")} />
        )}
      </Field>
      <Field label="Email" error={errors.email?.message}>
        {(id, describedBy) => (
          <Input id={id} className={fieldClass} type="email" autoComplete="email" placeholder="you@example.com" aria-describedby={describedBy} aria-invalid={!!errors.email} {...register("email")} />
        )}
      </Field>
      <Field label="Business name">
        {(id) => <Input id={id} className={fieldClass} autoComplete="organization" placeholder="Sharma Sweets" {...register("business")} />}
      </Field>
      <Field label="Plan you're interested in" required error={errors.plan?.message}>
        {(id, describedBy) => (
          <Controller
            control={control}
            name="plan"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id={id} aria-describedby={describedBy} aria-invalid={!!errors.plan} className="w-full rounded-xl bg-white px-3.5 data-[size=default]:h-11 md:text-[15px]" onBlur={field.onBlur}>
                  <SelectValue placeholder="Choose a plan" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {offers.map((o) => (
                    <SelectItem key={o.slug} value={o.slug}>
                      {planLabel(o.slug)}
                    </SelectItem>
                  ))}
                  <SelectItem value={NOT_SURE}>Not sure yet, help me choose</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        )}
      </Field>
      <Field label="Domain in mind" hint="Optional, e.g. sharmasweets.in">
        {(id, describedBy) => <Input id={id} className={fieldClass} placeholder="yourbusiness.com" aria-describedby={describedBy} {...register("domain")} />}
      </Field>
      <Field label="Tell us about your business" error={errors.message?.message} className="sm:col-span-2">
        {(id, describedBy) => (
          <Textarea
            id={id}
            rows={4}
            className="rounded-xl bg-white px-3.5 py-2.5 md:text-[15px]"
            placeholder="What do you do, and what should the website help you with?"
            aria-describedby={describedBy}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        )}
      </Field>

      {/* Honeypot: hidden from people, bots tick it. */}
      <input type="checkbox" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("botcheck")} />

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          By sending this form you agree to be contacted on WhatsApp/phone about your enquiry.
        </p>
        <Button type="submit" variant="brand" size="xl" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? <Loader2Icon className="animate-spin" /> : <SendIcon />}
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  )
}

function Field({
  label,
  required,
  error,
  hint,
  className,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  hint?: string
  className?: string
  children: (id: string, describedBy: string | undefined) => React.ReactNode
}) {
  const id = `f-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`
  const noteId = `${id}-note`
  const note = error ?? hint
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} className="text-sm font-medium text-brand-navy">
        {label}
        {required && <span className="text-brand-blue">*</span>}
      </Label>
      {children(id, note ? noteId : undefined)}
      {note && (
        <p id={noteId} className={cn("text-xs", error ? "text-destructive" : "text-muted-foreground")}>
          {note}
        </p>
      )}
    </div>
  )
}
