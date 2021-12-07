var db = require("../config/db");
 
var User = function(user){
    this.uname     =   user.uname;
    this.uemail     =   user.uemail;
    this.umobile     =  user.umobile;
    this.uhome       =   user.uhome;
    this.unic        =   user.unic;
}
 
// get all users
User.getUserdetailsList = (result) =>{
    db.query('SELECT * FROM userdetails', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}
 
// get user by Name for Search Data by name 
User.getUserByName= (uname, result)=>{
    db.query('SELECT * FROM userdetails WHERE uname=?', uname, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
 
// create new user
User.createNewUser = (userReqData, result) =>{
    db.query('INSERT INTO userdetails SET ?', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}
 
 
// get user by ID for update
User.getUserByID = (id, result)=>{
    db.query('SELECT * FROM userdetails WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching user by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}
 
 
// update user
User.updateUser = (id, userReqData, result)=>{
    db.query("UPDATE userdetails SET uname=?,uemail=?,umobile=?,uhome=?,unic=? WHERE id = ?", [userReqData.uname,userReqData.uemail,userReqData.umobile,userReqData.uhome,userReqData.unic, id], (err, res)=>{
        if(err){
            console.log('Error while updating the user');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}
 
// delete user
User.deleteUser = (id, result)=>{
    db.query('DELETE FROM userdetails WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            result(null, res);
        }
    })
   
}
 
module.exports = User;