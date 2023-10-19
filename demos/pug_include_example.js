 // div.header.
//I'm the header for this website. Eventually, I'll have a logo.

//div.header.
//I'm the footer for this website.

//html
//head
//title Simple template
//body
//include ./header.pug
//h3 I'm the main content
//include ./footer.pug

const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.set('views','./views');
// Route handler
app.get('/content', (req, res) => {
res.render('content');
});
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});