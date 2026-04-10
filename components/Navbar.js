const Navbar = () => `
  <nav class="fixed bottom-0 flex flex-row items-center w-full h-8 bg-black">
    <ul class="flex flex-row items-center justify-center w-full gap-10">
      <li><a href="/" hx-target="main" hx-get="/" hx-push-url="true">Home</a></li>
      <li><a href="/" hx-target="main" hx-get="/posts" hx-push-url="true">Posts</a></li>
      <li><a href="/login" hx-target="main" hx-get="/login" hx-push-url="true">Login</a></li>
    </ul>
  </nav>
`

module.exports = {
  Navbar
}
