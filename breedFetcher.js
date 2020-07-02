const request = require('request');
const args = process.argv;
let input = args.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  if (error) {
    console.log('Input Error', error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('Error: breed not found');
    process.exit();
  }
  console.log(data);
  console.log(typeof data);
  console.log(data[0].description);
});