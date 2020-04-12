const bookModel= require(`../model/book`)

module.exports=function(app){
    app.get(`/getbook`,(req,res)=>{
        res.json(bookModel);
    })
}