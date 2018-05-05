export default function (value: number | null): string {
  if (value) {
    const date = new Date();
    date.setTime(value);
    return date.toLocaleString('zh-cn', {
      hour12: false,
    });
  } else {
    return '未知';
  }
};