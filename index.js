const alphabet = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'kh',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'shch',
  ъ: '',
  ы: 'y',
  ь: '‘',
  э: 'e',
  ю: 'yu',
  я: 'ya',
  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'G',
  Д: 'D',
  Е: 'E',
  Ё: 'Y',
  Ж: 'Zh',
  З: 'Z',
  И: 'I',
  Й: 'Y',
  К: 'K',
  Л: 'L',
  М: 'M',
  Н: 'N',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  У: 'U',
  Ф: 'F',
  Х: 'Kh',
  Ц: 'Ts',
  Ч: 'Ch',
  Ш: 'Sh',
  Щ: 'Shch',
  Ъ: '',
  Ы: 'y',
  Ь: '‘',
  Э: 'E',
  Ю: 'Yu',
  Я: 'Ya',
};

const add = document.getElementById('add-button');
const input = document.getElementById('input-field');
const rusText = document.querySelector('.rus-text');
const engText = document.querySelector('.eng-text');

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }
function createRuPharase(text) {
  const $p = document.createElement('p');
  $p.textContent = text;
  $p.setAttribute('data-looptip', text);
  rusText.insertAdjacentElement('beforeend', $p);
  const widthCalculation = Number(rusText.offsetWidth - $p.offsetWidth);
  if (widthCalculation > 30) {
    $p.classList.add('usual');
  } else {
    $p.textContent = `${text.slice(0, 40)}...`;
    $p.classList.add('cropped');
  }
}
function createEngPhrase(text) {
  const wordTranslator = (val) => {
    let str = '';
    for (const char of val) {
      alphabet[char] ? (str += alphabet[char]) : (str += char);
    }
    return str;
  };
  const $p = document.createElement('p');
  $p.textContent = wordTranslator(text);
  $p.setAttribute('data-looptip', wordTranslator(text));
  engText.insertAdjacentElement('beforeend', $p);
  const widthCalculation = Number(engText.offsetWidth - $p.offsetWidth);
  if (widthCalculation > 30) {
    $p.classList.add('usual');
  } else {
    $p.textContent = `${wordTranslator(text).slice(0, 40)}...`;
    $p.classList.add('cropped');
  }
}

add.addEventListener('click', () => {
  const val = input.value;
  if (!val) {
    alert('Пустая строка, пожалуйста введите текст.');
  } else if (val.length > 400) {
    alert('Очень длинная строка, пожалуйста сократите текст.');
  } else {
    createRuPharase(val.trim());
    createEngPhrase(val.trim());
  }
});
