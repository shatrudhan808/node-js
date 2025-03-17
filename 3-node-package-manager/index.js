
const lodash = require('lodash');

const name = ['John', 'Doe', 'amit', 'sohan'];

const capitalizeName = lodash.map(name, lodash.capitalize)
console.log(capitalizeName);
