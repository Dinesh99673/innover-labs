// TODO: Confirm GST, renewal, email-provider and payment answers with the business before launch.
export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: "When does the 12-hour clock start?",
    a: "As soon as we've received payment and everything on our checklist: your business name, logo (if you have one), a short description, contact details and a few photos. We send the checklist on WhatsApp right after you pick a plan, and most people finish it in about 15 minutes.",
  },
  {
    q: "What do I need to give you?",
    a: "Very little. Your business name, what you do, your contact details and some photos. No logo? We'll set your name in a clean typeface, or you can add our logo design add-on. No photos? We'll use quality stock images that suit your business.",
  },
  {
    q: "Do I own my domain and website?",
    a: "Yes. The domain is registered in your name and you get all the logins at handover. You're never locked in, and you can move to another provider whenever you like.",
  },
  {
    q: "What happens after the first year?",
    a: "Your domain, hosting and email renew once a year. We send you the renewal price 30 days in advance, and nothing is charged without your approval.",
  },
  {
    q: "Are the prices inclusive of GST?",
    a: "Prices shown are exclusive of GST. GST is added on the invoice where applicable.",
  },
  {
    q: "Which email service do you use?",
    a: "We set up business email on a reliable, well-known provider chosen for your plan and needs. It works with the Gmail app, Outlook and iPhone Mail, so you can read and send mail anywhere.",
  },
  {
    q: "Can I make changes after the site is live?",
    a: "Yes. Small text and image tweaks are included during your support period. After that you can request changes one at a time or join the monthly care plan for regular updates.",
  },
  {
    q: "How do I pay?",
    a: "Once we've confirmed your requirements on WhatsApp, we send a secure payment link. You can pay by UPI, card, net banking or bank transfer.",
  },
  {
    q: "Do you work with businesses outside my city?",
    a: "Yes. Everything happens online, so we work with businesses all over India. Most of the work happens on WhatsApp, with a short call at handover.",
  },
]
