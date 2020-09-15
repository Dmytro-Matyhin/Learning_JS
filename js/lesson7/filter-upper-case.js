filterUpperCase = str => [].filter.call(str, item => item == item.toUpperCase() ? item : item.slice(1));

console.log(filterUpperCase('HelLo'));
