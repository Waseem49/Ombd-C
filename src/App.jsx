import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoriteList from "./pages/FavoriteList";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={"/Favorite"} element={<FavoriteList />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
