import axios from 'axios'
import React, { useState } from 'react'

import {
  FormControl,
  FormLabel,
  TextField,
  Button,
  Card,
  Grid,
  CardHeader
} from '@mui/material'

function AuthForm(props) {
  const { setUser } = props
  const [value, setValue] = useState('')

  const handleInput = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post(`${process.env.REACT_APP_HOST}users`, {
      username: value,
    })
    const user = res.data.user
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }
  return (
    <Card sx={{p: 2, maxWidth: '500px'}}>
      <CardHeader title='Email Messenger' subheader="best communication experience you've ever had"/>
        <form onSubmit={handleSubmit} method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel htmlFor="username">Username</FormLabel>
            <TextField
              inputProps={{ maxLength: 20 }}
              type="text"
              id="username"
              placeholder="Input your username here..."
              name="username"
              value={value}
              onChange={handleInput}
            />
          </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Button variant='contained' color='primary' fullWidth type="submit">Enter Mail Service</Button>
          </Grid>
          </Grid>
        </form>
    </Card>
  )
}

export default AuthForm
