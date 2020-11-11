import TodoInput from './components/TodoInput';
import { TodoListContainer } from './containers/todoContainer';
import { TodoFilterContainer } from './containers/filterContainer';

function App() {
    return (
        <div className="App m-5">
            <TodoInput />
            <TodoListContainer />
            <TodoFilterContainer />
        </div>
    );
}

export default App;
