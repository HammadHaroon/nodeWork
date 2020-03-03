const router = require('express').Router();
var fs = require('fs')
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

authValue= "Bearer 123456789";

fs.readFile('bookdata.json', function(err,data){
    bookData=JSON.parse(data);
});



router.get("/books", function(req , res){
    
    if(req.headers.authorization == authValue){
        res.send(bookData);

    }else{
        res.send("auth not valid");
    }
    
 });

 router.post("/books",urlencodedParser, function(req , res){
     if(req.headers.authorization == authValue){    
         response={
             title:req.body.title,
             author:req.body.author,
             part:req.body.part

         }
        
console.log(response);
bookData.push(response);
console.log(bookData);
res.send(response);        
     }else{
         res.send("auth not valid");
     }

});


router.delete("/books/:title", function (req , res){
    if(req.headers.authorization == authValue){
    title = req.params.title;
    
    let id = bookData.filter(id=>{
        return id.title == title;
    })[0];

    const index = bookData.indexOf(id);
    bookData.splice(index,1);

    console.log(bookData);
}
else{
    res.send("auth not valid");
}
    
});

router.put("/books/:title", function(request , res){
    if(request.headers.authorization == authValue){

    const requestId = request.params.title;

    let book = bookData.filter(book =>{
        return book.title == requestId;
    })[0];

    const index = bookData.indexOf(book);

    const keys = Object.keys(request.body);

    keys.forEach(key =>{
        book[key]=request.body[key];
    });

    bookData[index] = book;
    console.log(bookData);
}
    else{
        res.send("not valid auth");
    }

});

module.exports =  router;