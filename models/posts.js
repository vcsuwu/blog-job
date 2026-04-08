const db = require('./db')

const getPosts = async function() {
  const posts = await db.query("SELECT * FROM posts")
  console.log(posts)
  return posts.rows
}


let findPost = async postId => {
  posts = await getPosts()
  return posts.find(p => p.id === postId)
}

let addPost = async (title, desc) => {
  const res = await db.query("INSERT INTO posts(title,description) VALUES($1, $2)", [title, desc])
  console.log(posts)
  return res
}

let removePost = (title) => {
  const post = findPost(title)
  if (post) {
    const index = posts.findIndex(item => item.title === title);
    posts.splice(index)
    console.log("added new post succesfully")
    console.log(posts)
  }
}

let updatePost = (title, desc) => {
  const post = findPost(title)
  if (post) {
    post.desc = desc;
    console.log("added new post succesfully")
    console.log(posts)
  }
}

module.exports = {
  getPosts,
  findPost,
  addPost,
  removePost,
  updatePost,
}

