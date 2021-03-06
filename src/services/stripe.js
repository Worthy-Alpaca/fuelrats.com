// Module imports
import axios from 'axios'
import getConfig from 'next/config'





const { publicRuntimeConfig } = getConfig()
const localStripeApiUrl = publicRuntimeConfig.apis.stripe.url





const stApi = axios.create({
  baseURL: localStripeApiUrl,
  timeout: 10000,
  validateStatus: () => {
    return true // Always resolve because it's simpler for the action creators.
  },
})





export default stApi
