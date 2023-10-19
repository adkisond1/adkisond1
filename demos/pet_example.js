html
head
title Pet
body
form(action = "/pet", method = "POST")
div
label(for = "name") Name:
input(name = "name")
br
div
label(for = "age") Age:
input(name = "age")
br
div
label(for = "species") Species:
input(name = "species")
br
button(type = "submit") Create new pet

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-wwww-form-urlencoded
app.use(upload.array()); // for parsing multipart/form-data