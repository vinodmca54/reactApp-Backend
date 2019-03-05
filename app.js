var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var app = express();
import {bootDbConnection} from './bootstrap';
import {bootEnvConfig} from './config'
import routes from './routes';

const port = 8081;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


bootDbConnection();
console.log(bootEnvConfig());

app.use('/api', routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use('/', function (req, res) {
    res.json({serverStatus: 'running'});
})

const request = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//request.timeout = 2000;
module.exports = app;