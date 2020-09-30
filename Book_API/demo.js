const express = require('express'),
app = express();

app.set('title', 'My Site')
app.get('title')
console.log('demo');

app.listen(3000)
