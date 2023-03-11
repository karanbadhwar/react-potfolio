import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import Home from './Home'
import Login from '../Login'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //
      if (user) {
        setUser(user)
        localStorage.setItem('User', user.email)
      } else {
        setUser(null)
        localStorage.removeItem('User')
      }
    })
  })
  // console.log(user.email)
  return (
    <div>{user || localStorage.getItem('User') ? <Home /> : <Login />}</div>
  )
}
