/**
Напишите функцию, которая принимает строку и возвращает эту строку в перевёрнутом виде (например, “строка” — “акортс”).
 */

function reverseString(text) {
  if (typeof text !== "string") return 'Error';
  const reverseStr = text.split("").reverse().join("");
  return reverseStr;
};


module.exports = reverseString;
