 //dynamic routes 1
const express = require('express');
const app = express();
const port = 3000;
app.get('/:id', (req, res) => {
res.send('The id you specified is ' + req.params.id);
});
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});


//dynamic routes 2
//const express = require('express');
//const app = express();
//const port = 3000;
//app.get('/:course/:num', (req, res) => {
//res.send('Welcome to ' + req.params.course + ' ' + req.params.num);
//});
//app.listen(port, () => {
//console.log(`Example app listening on port ${port}`);
//});
