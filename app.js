const express=require("express")
const app=express();
app.use(express.static("public"));

app.post("/email",function(req){

})
app.listen(3000,function(){
    console.log("Server is listening at port 3000");
})