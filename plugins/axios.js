import axios from 'axios'

axios.defaults.baseURL = 'https://zh.nuxtjs.org/api'
axios.defaults.timeout = 600000

export default function({ $axios, redirect }, inject) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
    return config
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  inject('$axios', $axios)
}
