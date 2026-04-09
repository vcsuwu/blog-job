const render = (component) => (req, res) => {
  res.send(component)
}

module.exports = {
  render
}
