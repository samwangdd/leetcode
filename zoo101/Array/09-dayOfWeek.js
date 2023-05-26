function dayOfWeek(day, month, year) {
    const WEEK_ALIAS = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // 日期是从1970年12🈷️31日开始计算，这天是周4
    let count = 4;
    const dayMap = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31]; // 每月的天数
    // 每年暂时按 365 天计算；
    count += (year - 1970 - 1) * 365;
    // 月份对应的天数
    for (let i = 1; i < month; i++) {
      count += dayMap[i - 1];
    }
    count += day;
    // 处理闰年
    for (let y = 1971; y <= year - 1; y++) {
      if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        count++;
      }
    }
  
    // 今年如果是闰年且已经过二月份
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      if (month > 2) {
        count++;
      }
    }
  
    return WEEK_ALIAS[count % 7];
  }
  
  const res = dayOfWeek(26, 5, 2023);