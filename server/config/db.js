const mysql=require("mysql2");
const db=mysql.createConnection({

 host:"localhost",
 user:"root",
 password:"rushi99",
 database:"usermanagement",

});


module.exports=db;
