import Counter from "./components/counter/Counter";
import User from "./components/user";
import ContextProvider from "./context/User";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        {/* <Counter /> */}
        <User />
      </div>
    </ContextProvider>
  );
}

export default App;
