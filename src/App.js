import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import { SecondComponet } from "./SecondComponet";
import { ThirdComponent } from "./ThirdComponent";

function App() {

  const medical_record ={
    height: "184cm",
    bloodType: "B+",
    status: "Well",
    alergics: "none"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome React</p>

        <div className="componets">
          <hr />
          <ThirdComponent 
              name = "jose" 
              lastName = "Zuniga Vargas"
              medical_record = {medical_record}/>
          <hr />
          <SecondComponet />
          <hr />
          <MyComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
