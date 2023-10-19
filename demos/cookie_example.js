const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(cookieParser());
app.get('/', (req, res) => {
res.cookie('name', 'express').send('cookie set'); //Sets name = express
});
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});

//Expires after 360000 ms from the time it is set.
res.cookie(name, 'value', {expire: 360000 + Date.now()});

//This cookie also expires after 360000 ms from the time it is set.
res.cookie(name, 'value', {maxAge: 360000});


app.get('/clear_cookie', function(req, res){
    res.clearCookie('name');
    res.send('cookie name cleared');
    });