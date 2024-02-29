// import Routers from './Routers/Routers'
// import './app.css'

import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes, adminRoutes } from './Routers/Routers.jsx'
import Default from './layout/Default/Default'
import { jwtDecode } from "jwt-decode";

import AdminLayout from './layout/AdminLayout/admin.jsx'

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const decoded = jwtDecode(localStorage.getItem('token'));
  console.log(decoded);

  const account = decoded;

  if(account?.role === 'ADMIN'){
      return (
        <Router>
          <Routes>
            {adminRoutes.map((route, index) => {
              const Page = route.page
              const Layout = Fragment
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
      )
  }

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
