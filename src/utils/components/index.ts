/**
 * A helper function to format currency values. It's good practice to keep this
 * logic separate for reusability and testing.
 * @param amount - The numeric amount.
 * @param currency - The ISO currency code. Defaults to 'USD'.
 * @returns A formatted currency string (e.g., "$19.99").
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD"
): string {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount)
  } catch (error) {
    console.warn(
      `[formatCurrency] Invalid currency code: ${currency}. Falling back to USD.`
    )

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount)
  }
}
