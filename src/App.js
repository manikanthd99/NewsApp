import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import News from './components/News'

const App = () => {
  
  const [progress, setProgress] = useState(0);
    return (
      <div>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path="/"  element={<News setProgress={setProgress} key="general" pageSize={20} category="general"/>}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={20} category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={20} category="entertainment"/>}></Route>
        <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={20} category="general"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={20} category="health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={20} category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports"pageSize={20} category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={20} category="technology"/>}></Route>
      </Routes>
      </BrowserRouter>
        
      </div>
    )

}

export default App
