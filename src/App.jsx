import { Outlet } from 'react-router-dom'
import MainNavigation from './components/MainNavigation'
import classes from './styles/Layout.module.css'

function App() {

  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  )
}

export default App
