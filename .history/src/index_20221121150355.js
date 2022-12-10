// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import { HashRouter } from "react-router-dom"
// import { Provider } from "react-redux"
// import { store, persistor } from "./store/store"
// import "./App.less"
// import { PersistGate } from 'redux-persist/integration/react'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <HashRouter>
//     <React.StrictMode>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <App />
//         </PersistGate>
//       </Provider>
//     </React.StrictMode>
//   </HashRouter>
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.ss'
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store, persistor } from "./store/store"
import { PersistGate } from 'redux-persist/integration/react'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider locale={zhCN}>
          <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
            <App />
            </PageTransition>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </HashRouter>
)



