import React from 'react'
import { Container, Button, AppBar, Typography, Toolbar } from '@mui/material'
import MailList from '../components/MailList'
import SendMessageForm from '../components/SendMessageForm'

function MailPage(props) {
  const { user, setUser } = props
  const userId = user[0].id
  const username = user[0].username
  const logout = () => {
    localStorage.setItem('user', null)
    setUser(null)
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Welcome, {username}
          </Typography>
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 10 }}>
        <Container maxWidth="sm">
          <Typography variant="h4">Send Message</Typography>
          <SendMessageForm userId={userId} />
        </Container>
        <MailList userId={userId} />
      </Container>
    </>
  )
}

export default MailPage
