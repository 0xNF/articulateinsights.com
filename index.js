var express = require('express');
var app = express();

const test = 'test/';
const live = 'live/';
let dir = test; 

app.use(express.static(dir));



app.get('/', function (req, res) {
  res.sendFile('indexd.html');
})

app.get('/products/:html', function (req, res){
    const file = req.params['html'];
    const trySend = 'products/'+file+".html";
    console.log(trySend);
    var options = {
        root: __dirname + '/'+dir,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      };
    res.sendFile(trySend, options);
});

// Handle 404
app.use(function(req, res) {
    res.status(404).sendFile(__dirname + '/'+dir+'/notfound.html');    // res.send('404: Page not Found', 404);
    //    res.status(404).sendFile('notfound.html');
});
 
 // Handle 500
 app.use(function(error, req, res, next) {
    res.status(500).sendFile(__dirname + '/'+dir+'/error.html'); 
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})