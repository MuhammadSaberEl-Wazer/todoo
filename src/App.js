import "./App.css";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";
import { DataProvide } from "./components/DataProvide";

function App() {
  return (
    <DataProvide>
      <div className="App">
        <h1>To do list</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvide>
  );
}

export default App;
