import { useState } from 'react'
import { TentTree } from "lucide-react";
import whiteLogo from './assets/images/logo-white.webp'
import brandLogo from '/logo.svg'
import './App.css'


/* Main app component for the CrediNova. */
export default function App() {
    const [count, setCount] = useState(0)


    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={brandLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={whiteLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    <TentTree />
                    
                    count is {count}
                </button>

                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
