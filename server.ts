import Nullstack, { NullstackServerContext } from 'nullstack'

import Application from './src/Application'

const context = Nullstack.start(Application) as NullstackServerContext

context.start = async function start() {}

// Intercept all `/` GET requests
context.server.get('/', (_req, res, next) => {
  // obligate to cache response for the next 3s
  res.append('Cache-Control', 'max-age=3, stale-while-revalidate=3')
  next()
})

export default context
