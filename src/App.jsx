import Home from './routes/home/home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Nav } from './components'
import Prod from './routes/Products/Products'
import AboutUS from './routes/About/About'
import Auth from './routes/Authentication/signIn'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='products' element={<Prod />} />
        <Route path='about' element={<AboutUS />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default App
