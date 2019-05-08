const express = require('express');
const updateDatabase = require('../database/index.js').updateDatabase;
const faker = require('faker');

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/products/');

app.get('/fill-database-with-mock-data', (req, res) => {
  // @TODO: Generate mock data using Faker npm package then pass data into updateDatabase
  let fakeInfoArr = [];
  let counter = 0;
  while (counter < 100) {
    fakeInfoArr.push({
      id: counter + 1,
      title: faker.fake('{{commerce.productName}}'),
      description: faker.fake('{{lorem.lines}}'),
      product_price: faker.fake('{{commerce.price}}'),
      seller: faker.fake('{{internet.userName}}'),
      colors: (() => {
        let resultArr = [];
        let numberOfColors = Math.floor(Math.random() * Math.floor(4));
        let colorCount = 0;
        while (colorCount <= numberOfColors) {
          resultArr.push(faker.fake('{{commerce.color}}'));
          colorCount++;
        }
        return resultArr;
      })(),
    });
    counter++;
  }
  res.send(fakeInfoArr);

  // updateDatabase();
});

app.listen(port, () =>
  console.log(`App connection successful! App hosted at port: ${port}`)
);
