const {Router}=require('express')
const route=Router()

const {
    createPost,
    showAllPosts
}=require('../../controller/posts')

route.get('/',async (req,res)=>{
    const posts=await showAllPosts()
    res.status(200).send(posts)
})

route.post('/',async (req,res)=>{
    const {userId, title, body}= req.body
    if((!userId) ||(!title) || (!body)){
        return res.status(400).send({
            error:'Need user id, title and body to create a post'
        })
    }

    const post=await createPost(userId,title,body)
    res.status(201).send(post)
})

module.exports={
    postRoute:route
}