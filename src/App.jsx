import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="h-full w-full p-4 bg-zinc-300 flex flex-col justify-center items-center">
      <h1 className="p-8 text-lg font-semibold">Learning Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
