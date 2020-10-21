import '../store/index'
import axios from 'axios'
import store from '../store/index'

export function http() {
    console.log(store.state.apiUrl)
    return axios.create({
        baseURL: store.state.apiUrl
    })
}