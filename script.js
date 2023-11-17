function calculateDate() {
  const year = parseInt(document.getElementById('year').value);
  const week = parseInt(document.getElementById('week').value);

  const januaryFirst = new Date(year, 0, 1);
  const januaryFirstDay = januaryFirst.getDay();
  const firstWeekStart = januaryFirstDay <= 4 ? 1 : 8 - januaryFirstDay; // 根据ISO 8601确定的一年的第一周的起始日期

  const daysOffset = (week - 1) * 7 + firstWeekStart - 1; // 调整日期偏移量
  januaryFirst.setDate(januaryFirst.getDate() + daysOffset);

  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

  const resultElement = document.getElementById('result');
  const output = `第 ${week} 周是 ${year} 年的 ${januaryFirst.getMonth() + 1} 月 ${januaryFirst.getDate()} 日，星期${weekdays[januaryFirst.getDay()]}`;
  resultElement.textContent = output;
}
