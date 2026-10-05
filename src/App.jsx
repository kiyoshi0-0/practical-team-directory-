import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import UserDetails from './pages/UserDetails.jsx'
import Users from './pages/Users.jsx'

function App() {
  const [favorites, setFavorites] = useState([])
  const [isDark, setIsDark] = useState(false)

  function toggleFavorite(userId) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((favoriteId) => favoriteId !== userId)
        : [...currentFavorites, userId],
    )
  }

  return (
    <BrowserRouter>
      <div className={`particle-canvas min-h-screen transition-colors ${isDark ? 'dark bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-950'}`}>
        <Navbar
          favoriteCount={favorites.length}
          isDark={isDark}
          onToggleTheme={() => setIsDark((currentMode) => !currentMode)}
        />
        <main className="mx-auto min-h-[calc(100vh-144px)] max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/users"
              element={
                <Users favorites={favorites} onToggleFavorite={toggleFavorite} />
              }
            />
            <Route
              path="/users/:id"
              element={
                <UserDetails
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="border-t border-neutral-200 px-4 py-4 text-center text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
          Team Directory <span className="px-1 text-neutral-400 dark:text-neutral-600">/</span> Local team contacts
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
