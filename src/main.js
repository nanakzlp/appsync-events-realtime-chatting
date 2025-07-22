import { createApp } from 'vue'
import './style.css'
import { Amplify } from 'aws-amplify'
import { events } from 'aws-amplify/data'
import App from './App.vue'

// Configure Amplify
Amplify.configure({
  "API": {
    "Events": {
      "endpoint": "Change this with your AppSync Events endpoint",
      "region": "Change this with your region",
      "defaultAuthMode": "apiKey",
      "apiKey": "Change this with your API Key"
    }
  }
})

const app = createApp(App)
app.mount('#app')

// Create a component (App.vue) to handle the events: