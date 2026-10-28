import type { ReactNode } from "react"

import { site } from "@/data/site"
import { PageHero } from "@/components/shared/PageHero"
import { Section } from "@/components/shared/Section"
import { Seo } from "@/components/shared/Seo"

// TODO: These are starter templates. Have them reviewed before launch.
const UPDATED = "28 October 2026"

function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <Seo title={title} description={intro} />
      <PageHero eyebrow="Legal" title={title} description={`Last updated: ${UPDATED}`} />
      <Section>
        <article className="prose prose-lg mx-auto max-w-3xl prose-slate prose-headings:font-heading prose-headings:text-brand-navy prose-a:text-brand-blue">
          <p className="lead">{intro}</p>
          {children}
          <h2>Contact</h2>
          <p>
            Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone}.
          </p>
        </article>
      </Section>
    </>
  )
}

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what information ${site.name} collects when you use our website or services, and how we use it.`}
    >
      <h2>Information we collect</h2>
      <ul>
        <li>Details you give us through our contact form or WhatsApp: name, phone number, email, business details and project content.</li>
        <li>Basic, anonymous usage data (such as pages visited) to improve the website.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and deliver the services you order.</li>
        <li>To register domains, set up email and publish your website on your behalf.</li>
        <li>To send service updates such as renewal reminders. We never sell your data.</li>
      </ul>
      <h2>Sharing</h2>
      <p>
        We share only what is needed with the providers that make the service work (domain registrars, hosting and email
        providers, payment gateways), and only to deliver what you ordered.
      </p>
      <h2>Your choices</h2>
      <p>You can ask us to view, correct or delete your personal information at any time.</p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These terms apply when you buy a plan or service from ${site.name}. Placing an order means you accept them.`}
    >
      <h2>Orders & delivery</h2>
      <ul>
        <li>Delivery times (for example, 12 hours for Launch in 12) start once payment is received and all the content on our checklist has been provided.</li>
        <li>Delays caused by missing content, third-party verification (such as domain registry checks) or change requests may extend the timeline.</li>
      </ul>
      <h2>Pricing</h2>
      <ul>
        <li>Prices are one-time and exclusive of GST unless stated otherwise.</li>
        <li>Domain, hosting and email renew yearly. We share renewal pricing in advance.</li>
      </ul>
      <h2>Ownership</h2>
      <p>
        Domains are registered in your name. Once payment is complete, the website content and design delivered for your
        business belong to you. Third-party themes, fonts and stock images remain under their own licences.
      </p>
      <h2>Your content</h2>
      <p>You confirm that you have the rights to all text, images and logos you provide for your website.</p>
      <h2>Support</h2>
      <p>Each plan includes a support period after launch, as listed on the pricing page. Further changes can be ordered separately or through a care plan.</p>
    </LegalPage>
  )
}

export function Refund() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="We want you to be happy with your launch. Here is how refunds and cancellations work."
    >
      <h2>Before work starts</h2>
      <p>If you cancel before we have started work on your order, you get a full refund.</p>
      <h2>After work starts</h2>
      <p>
        Domain registration and third-party subscription fees (such as email or hosting) can't be refunded once purchased,
        because providers don't return them. Any remaining amount for work not yet done can be refunded at our discretion.
      </p>
      <h2>After delivery</h2>
      <p>
        Once your website, domain and email have been delivered and handed over, the order is complete. We'll still fix
        anything that doesn't work as described during your support period.
      </p>
      <h2>How to request a refund</h2>
      <p>Email or WhatsApp us with your order details. Approved refunds are processed within 7 working days.</p>
    </LegalPage>
  )
}
