import Header from "./components/Header/Header";
import GlobalStyle from "./utilities/globalStyles";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import PlayersPage from "./components/PlayersPage/PlayersPage";
import MorePage from "./components/MorePage/MorePage";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Header/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/more" element={<MorePage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
