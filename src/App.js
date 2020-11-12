import TodoInput from "./components/TodoInput";
import TodoListContainer from "./containers/todoContainer";

function App() {
    return (
        <div className="App m-5">
            <TodoInput/>
            <TodoListContainer/>
        </div>
    );
}

export default App;
