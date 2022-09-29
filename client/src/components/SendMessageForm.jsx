import React, { useState, useEffect } from 'react'

import {
  Autocomplete,
  TextField,
  FormControl,
  Button,
  Stack,
} from '@mui/material'

import { getUserList } from '../services/getUserList'
import { sendMessage } from '../services/sendMessage'
import DeliveryStatusPopup from './DeliveryStatusPopup'

function SendMessageForm(props) {
  const { userId } = props
  const [popupStatus, setPopupStatus] = useState(false)
  const [text, setText] = useState('')
  const [theme, setTheme] = useState('')
  const [options, setOptions] = useState([])
  const [receiver, setReceiver] = useState('')
  const [response, setResponse] = useState('')

  const handleReceiverInput = (_, newValue) => {
    setReceiver(newValue)
  }

  const handleTextInput = (event) => {
    setText(event.target.value)
  }

  const handleThemeInput = (event) => {
    setTheme(event.target.value)
  }

  const showResult = (result) => {
    setResponse(result)
    setPopupStatus(true)
  }

  const handleSubmit = async () => {
    const result = await sendMessage(userId, receiver, theme, text)
    setTheme('')
    setText('')
    showResult(result)
  }

  useEffect(() => {
    const fetchData = async () => {
      const userList = await getUserList()
      setOptions(userList)
    }
    fetchData()
  }, [])

  return (
    <>
      <Stack spacing={2} sx={{mt: 2}}>
        <FormControl>
          <Autocomplete
            freeSolo
            autoSelect
            id="username"
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  maxLength: 20,
                }}
                label="To:"
              />
            )}
            value={receiver}
            onChange={handleReceiverInput}
          />
        </FormControl>
        <FormControl>
          <TextField
            type="text"
            id="theme"
            autoComplete='off'
            label="Theme"
            name="message"
            inputProps={{ maxLength: 70 }}
            value={theme}
            onChange={handleThemeInput}
          />
        </FormControl>
        <FormControl>
          <TextField
            type="text"
            id="text"
            label="Message"
            name="message"
            minRows="4"
            multiline
            value={text}
            onChange={handleTextInput}
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Send Message</Button>
      </Stack>
      <DeliveryStatusPopup
        popupStatus={popupStatus}
        setPopupStatus={setPopupStatus}
        response={response}
      />
    </>
  )
}
export default SendMessageForm
