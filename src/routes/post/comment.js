const route=require('express').Router()
const { showComments }=require('../../controller/comment')


route.get('/:id',async (req,res)=>{
    let comment=await showComments(req.params.id)
    console.log(comment)
    if(comment){
        res.status(200).render(
            'index',{
                doc:'comments',
                comment
            }
        )
        // res.send(
        //     comment
        // )
    }
    else{
        res.status(404).send({
            error:'no comments found on this post'
        })
    }
})

module.exports={
    commentRoute:route
}

