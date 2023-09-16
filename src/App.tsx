import Navbar from './components/essentials/Navbar'
import { Toaster } from './components/ui/toaster'
import HomePage from './pages/HomePage'
import './App.css'


export default function App() {
    return (
        <>
            <Navbar />
            <HomePage />
            <Toaster />
        </>
    )
}

