import './Application.css'
import Nullstack, { NullstackClientContext } from 'nullstack'

import Home from './ViewCount'

declare const Head: Application['renderHead']

class Application extends Nullstack {

  prepare({ page, project }: NullstackClientContext) {
    page.locale = 'en-US'
    page.title = `${project.name} - Welcome!`
    page.description = `${project.name} made with Nullstack`
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
      </main>
    )
  }

}

export default Application
