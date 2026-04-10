const Posts = (posts) => `
  <ul class="flex flex-col justify-center items-start gap-5">
  ${posts.slice(-3).reverse().map(post =>
  `
      <li><a href=/posts/${post.id} hx-target="main" hx-get="/posts/${post.id}" class="text-red-500">${post.title}</a> <br> ${post.created_at.toLocaleString()}</li>
  `
).join('')}
  </ul>
`

module.exports = {
  Posts
}
