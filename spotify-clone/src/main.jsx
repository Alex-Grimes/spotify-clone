import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import * as serviceWorker from './serviceWorker';
import { DataLayer } from './context/DataLayer'
import reducer,{ initialState } from './context/reducer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
  </DataLayer>
  </React.StrictMode>,
)
