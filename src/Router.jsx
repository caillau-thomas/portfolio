import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import { Home } from './Pages/Home'


export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
