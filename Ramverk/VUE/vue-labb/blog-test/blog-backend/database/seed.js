const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const { faker } = require('@faker-js/faker');

const NUM_ADMINS = 2;
const NUM_USERS = 4;
const MIN_POSTS_PER_USER = 2;
const MAX_POSTS_PER_USER = 10;
const MIN_COMMENTS_PER_POST = 0
const MAX_COMMENTS_PER_POST = 3

Array.prototype.last = function(){return this[this.length -1]};
Array.prototype.random = function(){return this[Math.floor(Math.random()*this.length)]};

(async () => {
  await User.destroy({where:{}, truncate: true});
  await Post.destroy({where:{}, truncate: true});
  await Comment.destroy({where:{}, truncate: true});

  [...Array(NUM_ADMINS).keys()].forEach(async _ => {
    const [firstName, lastName] = faker.name.findName().split(" ")
    const domain = faker.internet.email().split("@").last()

    const user = {
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`,
      password: 'grillkorv',
      name: `${firstName} ${lastName}`,
      role: 'admin'
    }
    await User.create(user)
    console.log(`Create admin: ${user.email} with password: ${user.password}`)
  });
  
  await Promise.all([...Array(NUM_USERS).keys()].map(async _ => {
    const [firstName, lastName] = faker.name.findName().split(" ")
    const domain = faker.internet.email().split("@").last()

    const user = {
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`,
      password: 'grillkorv',
      name: `${firstName} ${lastName}`,
      role: 'user'
    }
    console.log(`Creating user: ${user.email} with password: ${user.password}`)
    return User.create(user)
  }))

  const users = await User.findAll({where:{role: 'user'}})

  users.forEach(user => {
    const numPosts = Math.floor(Math.random()*(MAX_POSTS_PER_USER-MIN_POSTS_PER_USER)+MIN_POSTS_PER_USER);
    [...Array(numPosts).keys()].forEach(async _ => {
      const post = await Post.create({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(),
        UserId: user.id
      })
      const numComments = Math.floor(Math.random()*(MAX_COMMENTS_PER_POST-MIN_COMMENTS_PER_POST)+MIN_COMMENTS_PER_POST);
      [...Array(numComments).keys()].forEach( async _ => {
        const randomUser = users.random()
        const comment = {
          content: faker.lorem.sentences(),
          UserId: randomUser.id,
          PostId: post.id
        }
        await Comment.create(comment)
      })
      if(numComments > 0)
        {console.log(`Created ${numComments} comments on post: ${post.id}`)}
    })
    console.log(`Created ${numPosts} posts by ${user.name}`)
  })

})()