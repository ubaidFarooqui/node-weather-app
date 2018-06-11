/*var getUser = (id, callback) => {
    
    var user = {
        id: id,
        name: 'ubaid'
    };
    
    setTimeout(() => {
        callback(user);
    }, 3000)
};

getUser(31, (userObject)=> {
    
    console.log(userObject)
});*/

//my try understing callback

var addnum = (a, callback)=> {
    
    var result = {
       sum: a + a  
    };
    
    if (result.sum === 10) { 
    callback(undefined, result);    
    }
    else if (result.sum != 10) {
        callback("not equal to 10", undefined)
    }
    
};

addnum(6 , (error, myresult) => {
    
  if (error) {
      console.log(error);
  }
    else {
        console.log(myresult);
    }
});