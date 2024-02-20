// import Routers from './Routers/Routers'
// import './app.css'

import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './Routers/Routers'
import Default from './layout/Default/Default'

function App() {
  return (
    <div>
      {/* <Routers /> */}
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? Default : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
