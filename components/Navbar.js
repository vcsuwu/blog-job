const Navbar = () => `
  <nav>
    <ul>
      <li><a href="/" hx-target="main" hx-get="/" hx-push-url="true">Home</a></li>
      <li><a href="/" hx-target="main" hx-get="/posts" hx-push-url="true">Posts</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
`

module.exports = {
  Navbar
}
