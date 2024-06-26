import React, { useState} from 'react'
import { Outlet , Navigate} from 'react-router-dom'

export default function DefaultLayout() {
    const {user, token} = useState()

    if (!token){ 

        return <Navigate to="/login" />
    }

  return (
    <div>
        Default
        <Outlet />
    </div>
  )
}
