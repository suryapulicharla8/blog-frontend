import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
// import Hollywood from "./Pages/Hollywood";
import Hollywood from "./Pages/Hollywood";
// import Bollywood from "./Pages/Bollywood";
import Bollywood from "./Pages/Bollywood";
import Technology from "./Pages/Technology";
import Fitness from "./Pages/Fitness";
import Food from "./Pages/Food";
import SingleBlogPage from "./Pages/SingleBlogPage";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <div className="App">
        <Header />
        <h1>CLONE THE REPO AND USING PUSH AND PULL COMMANDS</h1>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/Hollywood" element={<Hollywood />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path=":category/articleid" element={<SingleBlogPage />} />
            <Route path="*" element={<DetailPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;