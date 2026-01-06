import Nullstack, { NullstackServerContext } from 'nullstack'

import Application from './src/Application'

const context = Nullstack.start(Application) as NullstackServerContext

context.start = async function start() {}

// Intercept all `/` GET requests
context.server.get('*', (_req, res, next) => {
  // obligate to cache response for the next 60s
  // const rand = Math.round(Math.random() * 20)
  const rand = 20
  res.append('Cache-Control', `max-age=0, s-maxage=${100 + rand}`)
  next()
})

// experiment enforcing "stale" behavior of service-worker for `/`
// context.worker.staleWhileRevalidate = [/\//]

export default context
