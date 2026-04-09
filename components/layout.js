const { Navbar } = require('./Navbar.js')
const Layout = (title, content = "") => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link href="/styles.css" rel="stylesheet">
  <script defer src="/htmx.min.js"></script>
</head>

<body>
  ${Navbar()}
  <main>
    ${content}
  </main>
</body>

</html>
`

module.exports = {
  Layout
}
