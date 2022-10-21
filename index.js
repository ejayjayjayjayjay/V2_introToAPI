//#STEPS IN INSTALLING EXPRESS
// mkdir myapp
// cd myapp
// create repository
// npm init - *** will create package.json ***
// npm install express
// add .gitignore

const express = require('express');
const app = express();
const port = 3000;

app.listen('port',() => {
    console.log(`server is running on port ${port}`);
})

app.get('/',(req, res) => {
    res.send('Hello WOrld!!');
    
})