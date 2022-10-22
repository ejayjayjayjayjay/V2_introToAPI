//#STEPS IN INSTALLING EXPRESS
// mkdir myapp
// cd myapp
// create repository
// npm init - *** will create package.json ***
// npm install express
// add .gitignore
// 9f7e9e0b314b24c7c6eaf82ebc88862a - API KEY (openweatherAPP)
// https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=9f7e9e0b314b24c7c6eaf82ebc88862a - API END POINT
/* 
STATUS CODE MEANING :
200 - success status response code indicates that the request has succeeded
401 - Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource
404 - Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot
*/


/* const https = require('node:https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
}); */

const express = require('express');
const app = express();
const https = require('node:https');
const port = 3000;

app.get('/', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=9f7e9e0b314b24c7c6eaf82ebc88862a';
    https.get(url, (response) => {
        // console.log(response);
        // console.log(response.statusCode);
        response.on('data',(data) => {
            // console.log(data);
            const weatherData = JSON.parse(data);
            // console.log(weatherData);

           /*  const object = {
              firstName: 'Josell',
              lastName: 'Vibar',
              favoriteAnime: 'HunterxHunter',
              specialSkills: 'com skills'
          }
          console.log(JSON.stringify(object));*/
          const humidity = weatherData.main.humidity;
          console.log(humidity);
          const temp = weatherData.main.temp;
          console.log(temp);

          const printDesc = weatherData.weather[0].description;
          res.send(`The Temperature in Manila is ${temp} deg celcius`);
          console.log(printDesc);
        });
    });
    // res.send(`This is going to cracsh our server`)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})