import "./App.css";
import "./colorpallete.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="main">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
