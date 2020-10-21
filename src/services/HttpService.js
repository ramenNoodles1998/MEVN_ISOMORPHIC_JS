import '../store/index'
import axios from 'axios'
import store from '../store/index'
import * as auth from './AuthService'

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            'Content-Type': 'application/json',
            Authorization: auth.getToken()
        }
    })
}