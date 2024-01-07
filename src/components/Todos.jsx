import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" w-[40%] flex flex-col gap-4">
        <p className="p-4 text-xl font-semibold">Your Todos</p>
        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <div
              className="outline rounded-md p-2 flex justify-between items-center"
              key={todo.id}
            >
              <p className="w-[80%] font-semibold">{todo.text}</p>
              <button
                className="font-bold text-red-700 text-xl"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todos;
