const { Layout } = require('./layout.js')
const { testComponent } = require('./test.js')

const testPage = () => `
  ${Layout('testPage', testComponent())}
`

module.exports = {
  testPage
}
