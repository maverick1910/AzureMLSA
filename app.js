var PORT= process.env.PORT || 3000
var express=require('express');
const app=express();
var bodyparser=require("body-parser");

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('index');
})

app.listen(PORT,console.log('Server Up'));
