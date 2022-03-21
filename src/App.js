import Header from "./Components/Header";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { FormContextProvider } from "./Contexts/FormContext";

function App() {
  return (
    <main className="App">
      <Header />
      <FormContextProvider>
        {/* <Login /> */}
        <Signup />
      </FormContextProvider>
    </main>
  );
}

export default App;
