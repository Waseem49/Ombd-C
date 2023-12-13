import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoriteList from "./pages/FavoriteList";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/Favorite"} element={<FavoriteList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
