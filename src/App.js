import './App.css';
import Navbar from './components/nav-comp.js';
import Greet from './components/greet.js';

let date = new Date();
let hours = date.getHours();

const customStyle = {
  backgroundColor: "",
  height: "100vh",
  width: "100%",
  display:"flex",
  justifyContent:"center",
alignItems:"center",
};

if (hours < 12 && hours > 3) {
  customStyle.backgroundColor = "#6a5acd"; // Moody purple
} else if (hours >= 12 && hours < 16) {
  customStyle.backgroundColor = "#708090"; // Moody slate gray
} else if (hours >= 16 && hours < 19) {
  customStyle.backgroundColor = "#2e8b57"; // Moody sea green
} else {
  customStyle.backgroundColor = "#8b4513"; // Moody saddle brown
}

function App() {
  return (
    <div className="App" style={customStyle}>
      <Greet />
    </div>
  );
}

export default App;
