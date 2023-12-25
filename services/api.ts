import axios from 'axios'
import { ILogin } from '../types/login.types'

export class Request {
  private readonly APIROUTE = 'http://localhost:3000/api'
  constructor() {}

  async login(payload: ILogin) {
    const response = await axios.post(`${this.APIROUTE}/v1/users/login`, payload, { withCredentials: true })
    return response
  }
}
