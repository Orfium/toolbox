export function formatToCurrency(
  value: number | string,
  currency = 'USD',
  options?: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
) {
  if (typeof value === 'string' && isNaN(Number(value))) {
    throw 'A string value must be expressing a proper numeric value';
  }

  return new Intl.NumberFormat('en-US', {
    ...options,
    style: 'currency',
    currency: currency,
    // Per spec, Intl.NumberFormat.prototype.format can accept a string value, however TS is not allowing it.
    // Read this issue thread for more information: https://github.com/microsoft/TypeScript/issues/52124
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  }).format(value);
}
export function formatToUSD(
  value: number | string,
  options?: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
) {
  return formatToCurrency(value, 'USD', options);
}

export function formatToEUR(
  value: number | string,
  options?: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
) {
  return formatToCurrency(value, 'EUR', options);
}

export function formatToGBP(
  value: number | string,
  options?: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
) {
  return formatToCurrency(value, 'GBP', options);
}

export function formatToAUD(
  value: number | string,
  options?: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
) {
  return formatToCurrency(value, 'AUD', options);
}

export function formatToCAD(
  value: number | string,
  options?: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
) {
  return formatToCurrency(value, 'CAD', options);
}

export function formatToJPY(
  value: number | string,
  options?: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
) {
  return formatToCurrency(value, 'JPY', options);
}
