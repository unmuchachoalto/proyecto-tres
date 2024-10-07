import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './home';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} /> {/* Define the Home route here */}
      </Routes>
    </Router>
  );
}

export default MainRouter;
