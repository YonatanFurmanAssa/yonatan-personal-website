import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { NavBar } from "./components/NavBar"


function App() {

  return (
    <><BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter> </>

  )
}

export default App
