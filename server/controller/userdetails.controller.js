const UserdetailsModel = require('../model/userdetails.model');
 
// get all user list
exports.getUserdetailsList = (req, res)=> {
    //console.log('here all users list');
    UserdetailsModel.getUserdetailsList((err, user) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', user);
        res.send(user)
    })
}
 
// get user by Name for earch by Name 
exports.getUserByName = (req, res)=>{
    //console.log('get user by name');
    UserdetailsModel.getUserByName(req.params.uname, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
}
 
 
// create new user
exports.createNewUser = (req, res) =>{
    const userReqData = new UserdetailsModel(req.body);
    console.log('userReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserdetailsModel.createNewUser(userReqData, (err,user )=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User Created Successfully', data: user.insertId})
        })
    }
}
 
 
// get user by ID  for Update 
exports.getUserByID = (req, res)=>{
    //console.log('get user by id');
    UserdetailsModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
       
        res.send(JSON.stringify({ status: 200, error: null, response:user }));
    })
}
 
 
// update user
exports.updateUser = (req, res)=>{
    const userReqData = new UserdetailsModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserdetailsModel.updateUser(req.params.id, userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}
 
// delete user
exports.deleteUser = (req, res)=>{
    UserdetailsModel.deleteUser(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'User deleted successully!'});
    })
}