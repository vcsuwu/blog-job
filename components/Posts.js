const Posts = (posts) => `
  <ul>
  ${posts.map(post =>
  `
      <li>${post.title} <br> ${post.created_at}</li>
  `
).join('')}
  </ul>
`

module.exports = {
  Posts
}
