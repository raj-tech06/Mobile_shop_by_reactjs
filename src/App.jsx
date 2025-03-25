import { BrowserRouter, Routes, Route } from "react-router-dom"


import Layout from "./layout"
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}/>
      {/* <Route path="" */}

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
