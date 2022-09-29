import React from 'react'
import { Box, CircularProgress } from '@mui/material'

function LoadingScreen() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
}

export default LoadingScreen