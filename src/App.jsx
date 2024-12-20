import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductDetails from "./productDetails"
function App() {


  return (
    <>
    <Router>
      <ul>
        <li><Link to="/product/1">product1</Link></li>
        <li><Link to="/product/2">product2</Link></li>
        <li><Link to="/product/3">product3</Link></li>
      </ul>
      <Routes>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
