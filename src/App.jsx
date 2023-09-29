import './app.css'
import Background from './components/Background/Background'
import Intro from './components/intro/intro'
import Message from './components/message/Message'


function App() {

  return (
    <>
      <main>
        <Intro/>
        <Message/>
        <Background/>
      </main>
    </>
  )
}

export default App