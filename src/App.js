import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import { TodoListContainer } from './containers/todoContainer';

function App() {
    return (
        <div className="App m-5">
            <TodoInput />
            <TodoListContainer />
            <TodoFilter />
        </div>
    );
}

export default App;
