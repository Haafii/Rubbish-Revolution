import { useState } from 'react'

import './App.css'

import AuthPage from './AuthPage'
import ChatsPage from './ChatPage'

function AppChat() {
  const [user, setUser] = useState(undefined)

  if (!user) {
    return <AuthPage onAuth={user => setUser(user)} />
  } else {
    return <ChatsPage user={user} />
  }
}

export default AppChat
