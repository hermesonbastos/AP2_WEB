var mongoose = require("mongoose")
var mongoDB_URI = "mongodb+srv://yanzim:yanzim@cluster0.lphjmoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoDB_URI,{useNewUrlParser:true})
var db = mongoose.connection

db.on("connected",() => console.log("Mongo Connected!"))
db.on("disconnected",() => console.log("Mongo Disconnected!"))
db.on("error",(error) => console.log(error))