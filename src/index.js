module.exports = function check(str, bracketsConfig) {
  // your solution
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  
    let result = true;
    let searchExp = [];
    
    bracketsConfig.forEach((pair) => {
      // соединяем открывающую и закрывающую скобки из элемента pair
      let strWithBrackets = pair.join(''); // pair == '[]'
      
      // экранируем специальные символы для будущего регулярного выражения
      strWithBrackets = escapeRegExp(strWithBrackets);
      
      // запоминаем отформатированную строку с открывающей и закрывающей скобкой
      searchExp.push(strWithBrackets);
    });
    
    searchExp = searchExp.join('|'); // searchExp == ['()', '[]', '{}']
    // после предыдущей строчки кода searchExp == '()|[]|{}'
    // | - специальный символ регулярного выражения со значением "ИЛИ"
  
    // создаем регулярное выражение из строки searchExp
    let regExp = new RegExp(searchExp, 'g');
     
     // цикл надо запускать в половину длины строки (по кол-ву пар скобок, а не по кол-ву символов)
    let amount = str.length / 2
    for (let i = 0; i < amount; i++) {
        str = str.replace(regExp, "");
        
        // выходим из цикла если строка пустая, оптимизация цикла
        if (str.length === 0) {
          break;
        }
    }
    
    return str.length == 0 ? true : false;
  }

