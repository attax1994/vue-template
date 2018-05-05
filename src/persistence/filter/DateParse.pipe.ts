export default function (value: number | null): string {
  if (value) {
    const date = new Date();
    date.setTime(value);
    let _month: number | string = date.getMonth() + 1,
      _date: number | string = date.getDate();
    _month = _month < 10 ? `0${_month.toString()}` : _month;
    _date = _date < 10 ? `0${_date.toString()}` : _date;
    return `${date.getFullYear()}/${_month}/${_date}`;
  } else {
    return '未知';
  }
}