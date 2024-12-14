import { Routes as RouterRoutes, Route } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />
  </RouterRoutes>
)

export default Routes
