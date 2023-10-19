 
const checkSignIn = (req, res, next) => {
    if(req.session.user){
    return next(); //If session exists, proceed to page
    } else {
    const err = new Error("Not logged in!");
    err.status = 400;
    return next(err); //Error, trying to access unauthorized page!
    }
    };
    

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    if(!req.body.id || !req.body.password){
    res.render('login', {message: "Please enter both id and password"});
    return;
    }
    let user = Users.find( (element) => {
    return element.id === req.body.id && element.password === req.body.password;
    });
    console.log("<Login> Find: ", user);
    if (user === undefined || user === null) {
    res.render('login', {message: "Invalid credentials!"});
    return;
    } else {
    req.session.user = user;
    res.redirect('/protected_page');
    return;
    }
    });
    