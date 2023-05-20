/* eslint-disable no-console */
import './ViewCount.css'
import Nullstack, { NullstackClientContext } from 'nullstack'

class ViewCount extends Nullstack {

  static serverViewCount = 0
  viewCount: number

  static async addViewCount() {
    console.log(`serverViewCount: ${this.serverViewCount + 1}`)
    return ++this.serverViewCount
  }

  async initiate() {
    this.viewCount = await ViewCount.addViewCount()
  }

  static async getViewCount() {
    return this.serverViewCount
  }

  async syncWithServer() {
    this.viewCount = await ViewCount.getViewCount()
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
