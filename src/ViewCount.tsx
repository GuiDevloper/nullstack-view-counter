/* eslint-disable no-console */
import './ViewCount.css'
import Nullstack, {
  NullstackClientContext,
  NullstackServerContext,
} from 'nullstack'

import { isRealUser } from './utils'

class ViewCount extends Nullstack {

  static serverViewCount = 0
  viewCount: number

  static async addViewCount(context?: NullstackServerContext) {
    if (!isRealUser(context)) return this.serverViewCount
    console.log(`serverViewCount: ${this.serverViewCount + 1}`)
    return ++this.serverViewCount
  }

  async initiate() {
    this.viewCount = await ViewCount.addViewCount()
  }

  static async getViewCount(ctx = {}) {
    return this.serverViewCount
  }

  async syncWithServer() {
    const init_rand = Math.round(Math.random() * 100)
    this.viewCount = await ViewCount.getViewCount({ init_rand })
  }

  render(_context: NullstackClientContext) {
    return (
      <section>
        <h1>{this.viewCount}</h1>
        <button onclick={this.syncWithServer}>Sync with server</button>
      </section>
    )
  }

}

export default ViewCount
