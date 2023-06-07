
import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}>
      <h1 className="text-3xl dark:text-green font-bold underline">
        Hello world!
      </h1>
      <button
        className="bg-white text-blue-500 rounded-md px-4 py-2 mt-4 hover:bg-blue-500 hover:text-white"
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default App
