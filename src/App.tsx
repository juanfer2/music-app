import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import './App.css'

import Navbar from './components/navbar'
import Layout from './components/layouts'
import Header from './components/header'

function App() {

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Layout>
            <Header />
            <Routes />
            <Navbar />
          </Layout>
        </Fragment>
      </Router>
    </div>
  )
}

export default App
