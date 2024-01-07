import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      className="w-[40%] outline p-8 flex rounded-xl justify-between items-center"
      onSubmit={addTodoHandler}
    >
      <input
        type="text"
        placeholder="Enter a Todo......"
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
        className="outline outline-1 font-semibold text-lg rounded-xl p-2 w-[80%]"
      />
      <button
        className="outline w-[17%] p-2 outline-1 rounded-xl bg-blue-700 text-white font-bold"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
}
export default AddTodo;
