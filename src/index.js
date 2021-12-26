import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './assets/iconfont/iconfont.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routeConfig from './router/index'

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/portfolio-react">{renderRoutes(routeConfig)}</Router>
  </Provider>,
  document.getElementById('root')
)
