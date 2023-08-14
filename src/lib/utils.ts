export const safetyNumberToPx = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value
}
