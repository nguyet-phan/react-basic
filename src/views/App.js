import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world! - nguyetpt
        </p>

        <MyComponent />

      </header>
    </div>
  );
}

export default App;
