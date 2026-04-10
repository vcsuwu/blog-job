const marked = require('marked')

const Post = (post) => `
    <h1> ${post.title} </h1>
    <div>${marked.parse(post.description)}<div>
    <p> ${post.created_at.toLocaleString()} </p>
`

module.exports = {
  Post
}
