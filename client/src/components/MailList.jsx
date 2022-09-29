import React, { useEffect, useState } from 'react'
import Message from './Message'
import { Stack, Typography, Container } from '@mui/material'
import { getMailList } from '../services/getMailList'

function MailList(props) {
  const { userId } = props
  const [messages, setMessages] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const mailList = await getMailList(userId)
      setMessages(mailList)
    }
    fetchData()
    setTimeout(() => {setUpdate(!update)}, 5000)
  }, [userId, update])

  return (
    <Container maxWidth='md' sx={{marginTop: "20px"}}>
      {messages.length > 0 && <Typography variant="h4">Inbox</Typography> }
      <Stack spacing={1}>
        {messages.map((message, key) => (
          <Message message={message} key={key} />
        ))}
      </Stack>
    </Container>
  )
}

export default MailList
