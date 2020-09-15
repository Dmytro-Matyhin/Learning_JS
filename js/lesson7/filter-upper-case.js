filterUpperCase = str => [].filter.call(str, item => item == item.toUpperCase());

console.log(filterUpperCase('HelLo'));
