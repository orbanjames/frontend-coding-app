import React from 'react'
import AllPosts from './Components/CreatePostPage'
import CreatePost from './Components/CreatePostPage'
import EditPost from './Components/EditPostPage'
import NavBar from './Components/NavBar'
import Home from './Components/HomePage'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllPosts />} />
        <Route path='/add' element={<CreatePost />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
