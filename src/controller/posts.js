const {Posts,Users}=require('../db/models')

async function createPost(userId,title,body){
    const post=await Posts.create({
        title,
        body,
        userId
    })
    return post
}

async function showAllPosts(query){
    const posts=Posts.findAll({
        include:[Users]
    })
    return posts
}
module.exports={
    createPost,
    showAllPosts
}
/*test case*/
/*
async function tasks(){
    // console.log(await createPost(
    //     1,
    //     'title of the post',
    //     'body of the post'
    // ))
    // console.log(await createPost(
    //     2,
    //     'test post 2',
    //     'glitter over the glittering sky'
    // ))
    const posts= await showAllPosts()
    for(let post of posts){
        console.log(`${post.title}\nauthor:${post.user.username}\n${post.body}\n`)
    }
}
tasks()

*/