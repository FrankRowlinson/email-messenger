import { useEffect } from 'react'
import { useState } from 'react'

import AuthPage from './pages/AuthPage'
import MailPage from './pages/MailPage'
import LoadingScreen from './pages/LoadingScreen'

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)
    setIsLoading(false)
  }, [])
  return (
    <div className="App">
        {isLoading ? (
          <LoadingScreen />
        ) : user ? (
          <MailPage user={user} setUser={setUser} />
        ) : (
          <AuthPage setUser={setUser} />
        )}
    </div>
  )
}

export default App
