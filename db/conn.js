const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://deepakyadav13012001:xiRYZw1Fuw4FMsnm@userdb.ij2fjbq.mongodb.net/?retryWrites=true&w=majority&appName=UserDb")
.then(()=>{
    console.log("your Atlas db connected");
})
.catch((error)=>{
    console.log("error===", error)
})
