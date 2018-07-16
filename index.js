var express = require('express');
var body_parser = require('body-parser');
//var multer = require('multer');
//var upload = multer();
var cookie_parser = require('cookie-parser');
var session = require('express-session');
var csurf = require('csurf');
var app = express();

var csrf_protect = csurf();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
//app.use(upload.array());
app.use(cookie_parser());
app.use(session({
    genid: function(req) {
      return "123abc";
    },
    secret: 'kesh27',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static('public'));
app.get('/', csrf_protect,function(req, res){
    res.render("login", { csrf_token: req.csrfToken() });
    //res.send(req.sessionID);
});

app.post('/url', function(req, res){
    res.json({"status": "SUCCESS"});
});
app.listen(3000)