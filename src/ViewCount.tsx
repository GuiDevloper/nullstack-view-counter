import './ViewCount.css'
import Nullstack, { NullstackClientContext } from 'nullstack'

class Home extends Nullstack {

  viewCount = 0;

  render(_context: NullstackClientContext) {
    return (
      <section>
        <h1>{this.viewCount}</h1>
      </section>
    )
  }

}

export default Home
