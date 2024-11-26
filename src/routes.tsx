import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'

const Routes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />
  </Routes>
)

export default Routes
