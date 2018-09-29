//SET UP ===================================================
const express = require('express');
const app = express();
// saw  process.env.PORT done on some site 
//I know i neesd it for like cloud 9 testing
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const apiRouter = require('./api');

//CONFIGURATION=============================================
app.use('/api',
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    apiRouter
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})