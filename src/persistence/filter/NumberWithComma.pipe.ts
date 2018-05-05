export default function (value: number): string {
  return value.toLocaleString('en-us', {maximumFractionDigits: 2, minimumFractionDigits: 2});
}