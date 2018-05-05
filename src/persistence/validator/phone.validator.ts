export function phoneValidator(value: any): string | null {
  const pass = /^1\d{10}$/.test(value);
  return pass ? null : '请输入11位手机号';
}