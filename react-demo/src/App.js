import logo from './logo.svg'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ul>
        <img
          src={require("./Logo-og.png")} 
          alt="logo"
          style={{ width: '300px', height: 'auto' }} 
        />
      </ul>
    </div>
  );
}

export default App;

