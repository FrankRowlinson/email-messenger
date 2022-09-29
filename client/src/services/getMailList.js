import axios from 'axios'

export async function getMailList(userId) {
  const mailList = await axios.get(`${process.env.REACT_APP_HOST}messages/${userId}`)
  return mailList.data.map(el => ({
    'receivedAt': el.createdAt,
    'from': el.sender.username,
    'theme': el.theme,
    'text': el.text
  }))
}