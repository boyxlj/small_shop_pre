import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from "react-router-dom"
import {Provider} from "react-redux"
import {store,persistor} from "./store/store"
import { PersistGate } from 'redux-persist/integration/react'
import { StillnessProvider } from "react-stillness-component";
ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StillnessProvider>
    <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
    </React.StrictMode>
    </StillnessProvider>
  </HashRouter>
)
