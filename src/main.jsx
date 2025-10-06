import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { NavBar } from './views/NavBar/NavBar'
import { Body } from './views/Body/Body'
import { Skills } from './views/Skills/Skills'
import { Experience } from './views/Experience/Experience'
import { Formation } from './views/Formation/Formation'
import { Footer } from './views/Footer/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Body />
    <Skills />
    <Experience />
    <Formation />
    <Footer/>
  </React.StrictMode>
)
