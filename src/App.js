// Importing Built-in Modules
import { Provider } from "react-redux";

// Importing Stylesheet
import './App.css';

// Importing Custom Modules
import { store } from "./redux/store";
import Notes from "./components/layout/notes";



function App() {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
}

export default App;