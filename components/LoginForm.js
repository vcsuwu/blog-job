const LoginForm = (action) => `
<div id="outer">
<form action="${action}" method="post" hx-swap="outerHTML" hx-target="#outer">
  <p>Enter you username:</p>
  <input type="text" name="username">
  <p>Enter you password:</p>
  <input type="password" name="password">
  <button type="submit" hx-post="/login" hx-target="#outer">Login</button>
</form>
</div>
<div id="message"></div>
`

module.exports = {
  LoginForm
}
