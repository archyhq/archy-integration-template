/**
 * HTTP Server for Archy Integration
 *
 * The following code is using ES2017 specification of JavaScript
 * plus some features from babel-preset-stage-1
 * Learn more about it here: https://babeljs.io/docs/plugins/preset-stage-1/
 *
 * HTTP server is implemented using express library
 * and all logic to handler requests is separated to handlers/*.js files
 *
 * In handlers/ directory you can find few examples
 * - how you can process Archy requests
 * - what kind of UI elements you can display
 * - and what to do with errors
 *
 * Note:
 * Since in node.js almost everything is async
 * we use ES2016 feature caled async generator functions and await statements
 * This saves some space and make code more easy to read (opinionated)
 * You can read more here: https://github.com/tc39/proposal-async-iteration
 *
 * Enjoy! And feel free to ask questions in Slack http://slack.archy.ai
 */

import express from 'express'
import bodyParser from 'body-parser'

import * as handlers from './handlers'
import * as utils from './utils'

const HTTP_PORT = process.env.PORT || 3000;

const app = express()
app.use(bodyParser.json())

/**
 * Example of middleware where you can put logic common for every request:
 * - verify that is well formed
 * - authorize user
 * - initialize external resources per user or an API library
 */
app.use(utils.tryCatch(async (req, res, next) => {
  // Archy sends a JSON body with payload in each request
  // learn more https://docs.archy.ai/request.html
  const payload = req.body.payload
  if (!payload) {
    return res.json(500, {
      message: 'Malformed request',
    })
  }
  // The following commented code is an example of user authorization
  // archy will send credentials in JSON payload when you enable Authentication
  // for your integration
  //
  // const userId = payload.user.id
  // const provider = payload.user.providers[0] || {}
  // // return 401 error if no credentials provided
  // if (!provider) {
  //   return res.json(401, {
  //     message: 'Bad credentials',
  //   })
  // }
  // // if you uncomment this, do: npm install axios --save
  // // pass down an API instance for this user
  // const { login: username, password } = provider
  // req.api = axios.create({
  //   baseURL: 'http://someapi/',
  //   headers: { 'Accept': 'application/json' },
  //   auth: { username, password },
  // })

  // process next middleware
  next()
}))

// handlers for different Archy requests
app.post('/list', utils.tryCatch(handlers.list))
app.post('/details', utils.tryCatch(handlers.details))
app.post('*', utils.tryCatch(handlers.dashboard))

app.listen(HTTP_PORT, () => {
  console.log('Listening on port ' + HTTP_PORT)
});
