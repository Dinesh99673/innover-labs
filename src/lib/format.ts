const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

/** 4999 → "₹4,999" */
export function formatINR(amount: number) {
  return inr.format(amount)
}
