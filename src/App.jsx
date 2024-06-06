import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AuthenticatedContent from "./pages/AuthenticatedContent.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/authenticated" element={<AuthenticatedContent />} />
      </Routes>
    </Router>
  );
}

export default App;