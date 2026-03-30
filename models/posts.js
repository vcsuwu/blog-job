let posts = [
  {
    title: "1",
    desc: "putin nigger top"
  },
  {
    title: "today is gokdalsdk;od day",
    desc: "putin top"
  },
  {
    title: "today is good day",
    desc: "putin top213123"
  },
  {
    title: "today is good day",
    desc: "putin top"
  },
]


let findPost = postId => {
  return posts.find(p => p.title === postId)
}

let addPost = (title, desc) => {
  let newPost = {
    title,
    desc,
  }

  posts.push(newPost)
  console.log("added new post succesfully")
  console.log(posts)
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
  posts,
  findPost,
  addPost,
  removePost,
  updatePost,
}

