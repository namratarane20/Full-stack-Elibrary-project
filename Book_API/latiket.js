const express      = require('express');
const bodyParser   = require('body-parser');
const app = express();
const mysql = require('mysql');

app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'Swamisamarth123@',
  database: 'bookDetails'
});
 
//connect to database
conn.connect((err) =>{

  if(err) throw err;
  console.log('Mysql Connected successfully -----------------');
});



//show all books
app.get('/api/books',(req, res) => {
  let sql = "SELECT * FROM books ORDER BY id DESC";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    // return res.json(results)
    res.status(200).send(results)
    
  });
});
 

// HERE same above you can specify anathor routes
// app.post(){...}
// app.put(){...}

 
//Server listening to port
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});