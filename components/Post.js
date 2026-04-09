const Post = (post) => `
  <div>
    <h1> ${post.title} </h1>
    <p> ${post.description} </p>
    <p> ${post.created_at} </p>
  </div>
`

module.exports = {
  Post
}
