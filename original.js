
// const fs = require("fs")
// const app = express();
// const port = 7000
// const mongoose = require("mongoose")

// //Connection  
// mongoose.connect("mongodb://127.0.0.1:27017/nodeOne-project")
// .then(()=>console.log("mongodb connected"))
// .catch((err)=>{console.log("mongo error",err)})

// //Schema
// const userSchema = new mongoose.Schema({ 
//     firstName:{
//         type:String,
//         required:true,
//     },
//     lastName:{
//         type:String,
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     jobTitle:{
//         type:String,
//     },
   
// },{timestamps:true})

// const User = mongoose.model("user", userSchema)


// //middleware - plugin
// app.use(express.urlencoded({extended:false}))

// app.use((req,res,next)=>{
//     fs.appendFile(
//         "log.txt",
//             `\n${Date.now()}:${req.ip}${req.method}:${req.path}\n`,
//             (err,data)=>{
//                 next()
//             }
//     );
// });

// //requests
// app.get('/api/users/',async (req,res)=>{
//     const allDbUsers = await User.find({})
//     return res.send(allDbUsers)
// })

// app.route('/api/users/:id')
// .get(async(req,res)=>{
//     const user = await User.findById(req.params.id)
//     if(!user){return res.status(404).json({error:"user not found"})}
//     return res.json(user)
// })
// .patch(async(req,res)=>{
//     // edit user with id
//     await User.findByIdAndUpdate(req.params.id,{lastName:"changed"})
//     return res.json({status:"success"})
// })
// .delete(async(req,res)=>{
//     // delete user with id
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({status:"success"})
// })

// app.post("/api/users",async(req,res)=>{
//     // cerate new user
//     const body = req.body;
//     if(!body || !body.first_name || !body.email || !body.last_name || !body.job_title){
//         return res.status(400).json({msg:"all fields are req"})
//     }
//     const result = await User.create({
//         firstName:body.first_name,
//         lastName:body.last_name,
//         email:body.email,
//         jobTitle:body.job_title,
//     })
//     console.log("result", result)
//     return res.status(201).json({msg:'success'})
// })

// app.listen(port , ()=>{console.log("server started")})