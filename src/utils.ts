import { NullstackServerContext } from 'nullstack'

const botAgents = [
  'Vercelbot',
  'HeadlessChrome',
  'https://github.com/sindresorhus/got',
]

export function isRealUser(context: NullstackServerContext) {
  const userAgent = context.request.headers['user-agent']
  for (const bot of botAgents) {
    if (userAgent.includes(bot)) return false
  }
  return true
}
