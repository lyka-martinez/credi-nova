import { useState } from 'react'
import LoginPage from './pages/loginPage'
import Dashboard from './pages/dashboard'
import './styles/App.css'

/**
 * Main App component that conditionally renders the LoginPage or Dashboard.
 * @returns JSX.Element
 */

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [fade, setFade] = useState<'in' | 'out'>('in')

    const handleLogin = () => {
        setFade('out')

        setTimeout(() => {
            setIsLoggedIn(true)
            setFade('in')
        }, 200)
    }

    const handleLogout = () => {
        setFade('out')

        setTimeout(() => {
            setIsLoggedIn(false)
            setFade('in')
        }, 200)
    }

    return (
        <div
            className={`b-app-container ${fade === 'out' ? 'b-fade-out ' : ''}`}
        >
            {isLoggedIn ? (
                <Dashboard onLogout={handleLogout} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </div>
    )
}

export default App
