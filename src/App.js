import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="hello"/>
        </main>
        <footer className="App-footer"> Coded by Marcela Máximo</footer>
      </div>
    </div>
  );
}
