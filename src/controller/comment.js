const{ 
    Posts,
    Comments 
}=require('../db/models')

async function createComment(userId,postId,title,body){
    let comment=await Comments.create({
        title,
        body,
        userId,postId
    })
    return comment
}

async function showComments(postId){
    let comments=await Comments.findAll({where: {postId} }) 
    
    return comments
}
module.exports={
    createComment,
    showComments
}
/*test function
async function tasks(){
    console.log(await createComment(
        2,
        1,
        'comment 1',
        'body of comment'

    ))
    console.log(await showComments(
        1
        // 1,
        // 'comment 1',
        // 'body of comment'
    ))
}

tasks()
//*/