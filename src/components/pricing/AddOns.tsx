import { addons } from "@/data/addons"
import { Reveal } from "@/components/shared/Reveal"

export function AddOns() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {addons.map(({ name, price, description, icon: Icon }, i) => (
        <Reveal key={name} delay={i * 0.05}>
          <div className="flex h-full gap-4 rounded-2xl border bg-white p-5 transition-colors hover:border-brand-blue/40">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-ice text-brand-blue">
              <Icon className="size-5" />
            </span>
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-heading text-base font-semibold">{name}</h3>
                <span className="font-heading text-sm font-bold whitespace-nowrap text-brand-blue">{price}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
