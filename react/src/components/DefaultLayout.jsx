import React from 'react'
import { Link, Outlet , Navigate} from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider.jsx'


export default function DefaultLayout() {
    const {user, token} = useStateContext()

    if (!token){ 

        return <Navigate to="/login" />
    }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            User Information
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
