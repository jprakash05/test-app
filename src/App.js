import { RedocStandalone } from 'redoc';
import "./App.css";

function App() {
  return (
    <div className="App">
      <RedocStandalone
        spec={}
        onLoaded={(error) => {
          if (!error) {
            console.log("Yay!");
          }
        }}
      />
    </div>
  );
}

export default App;
