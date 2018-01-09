var express = require('express');
var app = express();

const test = 'test/';
const live = 'live/';
let dir = test; 

app.use(express.static(dir));

function makeStaticHtmlSendFileOptions() {
    const options = {
        root: __dirname + '/'+dir,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      };
    return options;
}


app.get('/', function (req, res) {
  res.sendFile('indexd.html');
})

app.get('/products/:html', function (req, res){
    const file = req.params['html'];
    const trySend = 'products/'+file+".html";
    res.sendFile(trySend,  makeStaticHtmlSendFileOptions());
});
app.get('/products', function (req, res){
    const file = req.params['html'];
    const trySend = 'products/products.html';
    res.sendFile(trySend,  makeStaticHtmlSendFileOptions());
});

app.get('/services/:html', function (req, res){
    const file = req.params['html'];
    const trySend = 'services/'+file+".html";
    res.sendFile(trySend, makeStaticHtmlSendFileOptions());
});
app.get('/services', function (req, res){
    const file = req.params['html'];
    const trySend = 'services/services.html';
    res.sendFile(trySend, makeStaticHtmlSendFileOptions());
});


// Handle 404
app.use(function(req, res) {
    res.status(404).sendFile(__dirname + '/'+dir+'/notfound.html'); 
});
 
 // Handle 500
 app.use(function(error, req, res, next) {
    res.status(500).sendFile(__dirname + '/'+dir+'/error.html'); 
});

// Launch
const port = 8000;
app.listen(port, function () {
  console.log('Articulate Insights Web Sever listening on ' + port)
})