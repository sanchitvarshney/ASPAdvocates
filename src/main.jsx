import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PracticeAreaPage from './pages/PracticeAreaPage.jsx'
import IndustrialVisePage from './pages/IndustrialVisePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import InternshipPage from './pages/InternshipPage.jsx'
import JobApplications from './pages/JobApplications.jsx'
import OurPeoplePage from './pages/OurPeoplePage.jsx'
const router = createBrowserRouter([
  {
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        element:<Homepage/>,
        path:"/"
      },
      {
        element:<AboutPage/>,
        path:"/about"
      },
           {
        element:<OurPeoplePage/>,
        path:"/our-people"
      },
      {
        element:<CareersPage/>,
        path:"/career"
      },
      {
        element:<InternshipPage/>,
        path:"/internship"
      },
      {
        element:<JobApplications/>,
        path:"/job-applications"
      },
      {
        element:<ContactPage/>,
        path:"/contact"
      },
      {
        element:<PracticeAreaPage/>,
        path:"/practice"
      },
      {
        element:<IndustrialVisePage/>,
        path:"/industries"
      }      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
