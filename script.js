function calculateDate() {
  const year = parseInt(document.getElementById('year').value);
  const week = parseInt(document.getElementById('week').value);

  const januaryFirst = new Date(year, 0, 1);
  const daysOffset = (week - 1) * 7;
  januaryFirst.setDate(januaryFirst.getDate() + daysOffset - januaryFirst.getDay());

  const resultElement = document.getElementById('result');
  resultElement.textContent = `第 ${week} 周的日期是：${januaryFirst.getFullYear()}年${januaryFirst.getMonth() + 1}月${januaryFirst.getDate()}日`;
}