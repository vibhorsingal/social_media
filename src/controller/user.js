const {Users} =require('../db/models')
const {usernameGenerator} =require('../util/username')
async function createUser(){
    const user=await Users.create({
        username:usernameGenerator()
    })
    return user
}

async function getUserbyId(id){
    return await Users.findOne({where: { id }})
}

async function getUserbyUsername(username){
    return await Users.findOne({where:{ username }})
}
module.exports={
    createUser,
    getUserbyId,
    getUserbyUsername
}




/* test function*/
/*
async function task(){
    console.log(await createUser())
}

task()
*/