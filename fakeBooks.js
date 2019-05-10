const faker = require('faker')

var i;
for (i = 0; i < 30; i++) {

    const Books = {
        title: faker.lorem.words(),
        author: faker.name.findName(),
        isbn: faker.random.number(),
        price: faker.commerce.price()
    }
    console.log(JSON.stringify(Books, null, 2));
}

module.exports = Books;