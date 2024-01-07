
const express = require('express')
const app = express();
const port = 7000

const userRouter = require('./routes/user')
const {connectMongoDb} = require('./connection')
const {logReqRes} = require('./middlewares')

//Connection  

connectMongoDb('mongodb://127.0.0.1:27017/nodeOne-project')
.then(()=>console.log("mongoDB connected"))

//middleware - plugin
app.use(express.urlencoded({extended:false}))

app.use(logReqRes('log.txt'));

//requests
// Routes
app.use("/api/users",userRouter)

app.listen(port , ()=>{console.log("server started")})