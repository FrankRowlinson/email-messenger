import React from 'react'
import { Box } from '@mui/material'

import AuthForm from '../components/AuthForm'

function AuthPage(props) {
  const { setUser } = props
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AuthForm setUser={setUser} />
    </Box>
  )
}

export default AuthPage
