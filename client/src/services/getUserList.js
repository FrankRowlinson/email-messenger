import axios from 'axios'


export async function getUserList() {
  const res = await axios.get(`${process.env.REACT_APP_HOST}users`)
  return res.data.userList.map(el => el.username)
}