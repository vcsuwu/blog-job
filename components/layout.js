const { Navbar } = require('./Navbar.js')
const Layout = (title, content = "") => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link href="/output.css" rel="stylesheet">
  <script defer src="/htmx.min.js"></script>
</head>

<body class="flex flex-col items-center w-full font-pixel bg-black text-white">
  ${Navbar()}
  <main class="flex flex-col w-1/2 items-center justify-center min-h-dvh gap-10 py-16">
    ${content}
  </main>
</body>

</html>
`

module.exports = {
  Layout
}
