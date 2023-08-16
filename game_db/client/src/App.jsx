// import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import DisplayAllGames from './components/DisplayAll'
import GameForm from './components/GameForm'
import DisplayOneGame from './components/DisplayOneGame'
import UpdateGame from './components/UpdateGame'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<DisplayAllGames/>}/>
        <Route path='/gameForm' element={<GameForm/>}/>
        <Route path='/oneGame/:id' element={<DisplayOneGame/>}/>
        <Route path='/updateGame/:id' element={<UpdateGame/>}></Route>
      </Routes>
    </>
  )
}

export default App
