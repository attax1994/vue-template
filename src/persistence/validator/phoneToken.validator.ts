export function phoneTokenValidator(value: any): string | null {
  const pass = /^\d{6}$/.test(value);
  return pass ? null : '请输入正确的手机验证码';
}