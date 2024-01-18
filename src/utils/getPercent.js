/**
 * Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
 * например, getPercents(30, 200) должно вернуть 60.
 */

function getPercent(percent = 0, number = 0) {
  if (percent > 100 || percent < 0) {
    return "Error"
  }
  result = number * percent / 100;
  return result;
};

module.exports = getPercent
