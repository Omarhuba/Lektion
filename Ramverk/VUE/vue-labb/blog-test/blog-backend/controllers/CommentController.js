const { InvalidBody, CommentNotFound, Unauthorized } = require("../errors")
const Comment = require("../models/Comment")
const Post = require("../models/Post")

function parseQuery(query){
  const page = +query.page || 1
  let pageSize = +query.pageSize || 10
  pageSize = pageSize > 10 ? 10 : pageSize
  pageSize = pageSize < 1 ? 1 : pageSize
  return {page, pageSize}
}

module.exports = {
  async create(req, res, next){
    try{
      const {content, postId} = req.body
      if(!content || !postId){ throw new InvalidBody(['content', 'postId']) }
      const UserId = req.user.id
      const PostId = postId
      const comment = await Comment.create({content, UserId, PostId})
      res.json({comment})
    }catch(error){ next(error) }
  },

  async getAll(req, res, next){
    const {page,pageSize} = parseQuery(req.query)
    const UserId = req.user.id
    const fields = {
      limit: pageSize,
      offset: (page-1)*pageSize
    }
    if(req.user.role != "admin"){
      fields.UserId = UserId
    }
    const comments = await Comment.findAll({
      limit: pageSize*pageSize,
      offset: (page-1)
    })
    res.json({comments})
  },

  async getAllByPost(req, res, next){
    const {page,pageSize} = parseQuery(req.query)
    const PostId = req.params.id
    const comments = await Comment.findAll({
      limit: pageSize,
      offset: (page-1)*pageSize,
      where: { PostId }
    })
    res.json({comments})
  },
  async getAllByUser(req, res, next){
    const {page,pageSize} = parseQuery(req.query)
    const UserId = req.params.id
    const comments = await Comment.findAll({
      limit: pageSize,
      offset: (page-1)*pageSize,
      where: { UserId }
    })
    res.json({comments})
  },

  async getOne(req, res, next){
    const {id} = req.params
    const comment = await Comment.findOne({where:{id}})
    if(!comment){ throw new CommentNotFound(id) }
    
    res.json({comment})
  },

  async update(req, res, next){
    try{
      const {id} = req.params
      const {content} = req.body
      const fields = {}
      if(content) fields.content = content
      
      const comment = await Comment.findOne({where:{id}})
      if(!comment){ throw new CommentNotFound(id) }
      if(comment.UserId != req.user.id){ throw new Unauthorized() }

      await Comment.update(fields, {where: {id}})    
      res.json({message: 'Comment updated'})
    }catch(error){ next(error) }
  },

  async delete(req, res, next){
    try{
      const {id} = req.params
      const comment = await Comment.findOne({where:{id}})

      if(!comment){ throw new CommentNotFound(id)}

      if(comment.UserId != req.user.id){ throw new Unauthorized() }
      
      await comment.destroy()
      res.json({message: 'Comment annihilated!'})
    }catch(error){ next(error) }
  }
}