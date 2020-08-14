/// pluralize(1, ['Год', 'Года', 'Лет']) === '1 Год'
/// pluralize(2, ['Год', 'Года', 'Лет']) === '2 Года'
/// pluralize(5, ['Год', 'Года', 'Лет']) === '5 Лет'

module.exports = (num, [str1, str2, str5]) => {
    if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
      return `${num} ${str2}`
    } else if (num % 10 === 1 && num % 100 !== 11) {
      return `${num} ${str1}`
    }
  
    return `${num} ${str5}`
  }
  