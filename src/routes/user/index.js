const {Router}=require('express')
const route=Router()
const {
    createUser,
    getUserbyId,
    getUserbyUsername
}=require('../../controller/user')
route.get('/:id',async (req,res)=>{
    let user
    if(isNaN(parseInt(req.params.id))){
        user=await getUserbyUsername(req.params.id)
    }
    else{
        user=await getUserbyId(req.params.id)
    }

    if(user){
        res.status(200).render(
            'index'
        )
    }
    else{
        res.status(404).send({
            error:'no such user found'
        })
    }
})

route.post('/',async (req,res)=>{
    const user=await createUser()
    res.status(201).send(
        user
    )
})
module.exports={
    userRoute:route
}