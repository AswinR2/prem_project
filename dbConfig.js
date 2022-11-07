var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',   //your host name
    user:'root',    //your database username
    password:'',    //your database password
    database:'clubs_premier_league'    //your databese name
});

    conn.connect(function(err){
        if(err) throw err;
        console.log('Database is connected successfully !');
    });

    module.exports=conn;