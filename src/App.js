import Header from "./components/Header/Header";
import GlobalStyle from "./utilities/globalStyles";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import ScorePage from "./components/ScorePage/ScorePage";
import PlayersPage from "./components/PlayersPage/PlayersPage";
import StatsPage from "./components/StatsPage/StatsPage";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Header/>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/scores" element={<ScorePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/stats" element={<StatsPage />} >
          <Route path="/stats:pId" element={<StatsPage />} />
          </Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
