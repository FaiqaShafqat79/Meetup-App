import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Meetups, { loader as meetupLoader } from './routes/Meetups.jsx'
import NewMeetup from './routes/NewMeetup.jsx'
import FavouriteMeetup from './routes/FavouriteMeetup.jsx'
import { action as newMeetupAction } from './components/NewMeetupForm.jsx'

const router = createBrowserRouter([
  { path:'/', element: <App />, children:[
    { path: '/', loader: meetupLoader, element: <Meetups /> },
    { path: '/create-meetup', action: newMeetupAction, element: <NewMeetup /> },
    { path: '/favourite-meetups', element: <FavouriteMeetup /> }
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
