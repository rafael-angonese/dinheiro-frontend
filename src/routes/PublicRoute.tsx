import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute: React.FC = () => {
  const isAuthenticated = false

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default PublicRoute