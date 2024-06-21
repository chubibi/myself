import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.module.css'
import { NavBar } from './views/NavBar/NavBar'
import { Body } from './views/Body/Body'
import { Skills } from './views/Skills/Skills'
import { Experience } from './views/Experience/Experience'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Body/>
    <Skills/>
    <Experience/>
  </React.StrictMode>
)
