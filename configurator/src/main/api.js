import axios from 'axios'

export function loadIpAddress() {
  return axios.get('http://ip.jsontest.com/')
}
