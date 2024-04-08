var mysql = require('mysql');
var connection = mysql.createConnection({
host: 'localhost', 
user: 'root',
password: '',
database: 'pd_library_db'
})

connection.connect(function(error){
if(!!error){
    console.log(error);
} else {
    console.log('mysql database connected');
}
});

module.exports = connection;