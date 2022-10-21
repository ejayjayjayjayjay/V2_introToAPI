//#STEPS IN INSTALLING EXPRESS
// mkdir myapp
// cd myapp
// create repository
// npm init - *** will create package.json ***
// npm install express
// add .gitignore
//9f7e9e0b314b24c7c6eaf82ebc88862a - API KEY (openweatherAPP)

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello WOrld!!');

})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})