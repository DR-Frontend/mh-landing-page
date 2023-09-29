import Background from './components/Background/Background'
import Colaboration from './components/Colaboration/Colaboration'
import Socialmedia from './components/Socialmedia/Socialmedia'
import Intro from './components/intro/intro'
import Message from './components/message/Message'

function App() {
  return (
    <>
      <main>
        <Intro/>
        <Message/>
        <Colaboration/>
        <Socialmedia/>
        <Background/>
      </main>
    </>
  )
}

export default App