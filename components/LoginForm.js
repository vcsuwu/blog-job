const LoginForm = (action, customTitle = "") => `
${customTitle !== null ? `<title>${customTitle}</title>` : ""}
<div id="outer">
<form action="${action}" method="post" hx-swap="outerHTML" hx-target="#outer" class="flex flex-col">
  <p>Enter you username: </p>
  <input type="text" name="username" class="border-b-1">
  <p>Enter you password:</p>
  <input type="password" name="password" class="border-b-1">
  <button type="submit" hx-post="/login" hx-target="#outer">Login</button>
</form>
</div>
<div id="message"></div>
`
module.exports = {
  LoginForm
}
