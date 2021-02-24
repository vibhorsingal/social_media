const express=require('express')
const path=require('path')
const { db }=require('./db/models')
const app=express()
const { userRoute }=require('./routes/user')
const { postRoute }=require('./routes/post')
const { commentRoute }=require('./routes/post/comment')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoute)
app.use('/api/posts',postRoute)
app.use('/api/comments',commentRoute)
app.set("view engine","hbs")
app.use('/',express.static(path.join(__dirname,'/public')))


db.sync()
    .then(()=>{
        app.listen(8989,()=>{
            console.log("server started at http://localhost:8989")
        })
    })
    .catch((err)=>{
        console.log({
            error:"error syncing database"
        })
    })
