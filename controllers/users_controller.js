// const User = require('../models/user');

// module.exports.profile = function(req, res){
//     return res.render('user_profile', {
//         title: 'User Profile'
//     })
// }


// module.exports.signUp = function(req,res){
//     return res.render('user_sign_up',{
//         title: "codeil | Sign Up"
//     })
// }

// module.exports.signIn = function(req,res){
//     return res.render('user_sign_in',{
//         title: "codeil | Sign In"
//     })
// }


// module.exports.create = function(req,res){
//     //todo later
//     if (req.body.password != req.body.confirm_password){
//         return res.redirect('back');
//     }

//     User.findOne({email: req.body.email}, function(err, user){
//         if(err){console.log('error in finding user in signing up'); return}

//         if (!user){
//             User.create(req.body, function(err, user){
//                 if(err){console.log('error in creating user while signing up'); return}

//                 return res.redirect('/users/sign-in');
//             })
//         }else{
//             return res.redirect('back');
//         }

//     });
// }

// module.exports.cerateSession = function(req,res){
//     //todo later
// }












const User = require('../models/user');


module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}


// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res) {
    //todo later
    if (req.body.password != req.body.confirm_password) {
      return res.redirect('back');
    }
  
    User.findOne({ email: req.body.email })
      .exec() // Execute the query
      .then(user => {
        if (!user) {
          // User with the given email does not exist, so create a new user
          User.create(req.body)
            .then(newUser => {
              return res.redirect('/users/sign-in');
            })
            .catch(err => {
              console.log('Error in creating user while signing up', err);
              return res.redirect('back');
            });
        } else {
          // User with the given email already exists, redirect back
          return res.redirect('back');
        }
      })
      .catch(err => {
        console.log('Error in finding user in signing up', err);
        return res.redirect('back');
      });
  };
  

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // TODO later
}


