const mongoose = require('mongoose')
const uri = "mongodb+srv://Mie:j5pP5LwHNPVxi995@cluster.xajie2t.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect( uri ,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex: true,
})

mongoose.connection
.once("open", ()=>console.log("Connected"))
.on("error", error =>{
    console.log("error", error)
})

module.exports = mongoose
