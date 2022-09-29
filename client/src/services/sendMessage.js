import axios from 'axios'

export async function sendMessage(senderid, username, theme, text) {
  const data = {
    senderid,
    username,
    theme,
    text
  }
  const res = await axios.post(`${process.env.REACT_APP_HOST}messages`, data)
  return res.data
}