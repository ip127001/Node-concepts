var Person = require('../lib/Person');

var ben = new Person('Mr. Robot');

ben.on('speak', function (saying) {
    console.log(`${this.name}: ${saying}`);
});

ben.emit('speak', 'I am Mr. Robot');