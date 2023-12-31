// const express = require('express');
// const app = express();
// const port = 8000;

// //use express router
// app.use('/',require('./routes/index'));


// app.set('view engine','ejs');
// app.set('views','./views');




// app.listen(port,function(err){
//     if(err){
//         console.log(`error in runnign the server: ${err}`);
//     }

//     console.log(`server is runnig on port : ${port}`);
// });


const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());
// Replace this line (older version without extended option)
//app.use(express.urlencoded());

// With this line (explicitly setting extended to true)
//app.use(express.urlencoded({ extended: true }));


app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
