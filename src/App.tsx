import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import Navbar from './components/essentials/Navbar'
import { Toaster } from './components/ui/toaster'
import './App.css'


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
            <Toaster />
        </BrowserRouter>
    )
}

export default App
