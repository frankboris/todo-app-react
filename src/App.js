import TodoInput from './components/TodoInput';
import TodoListContainer from './containers/todo.container';
import TodoFilterContainer from './containers/todo.filter.container';

function App() {
    return (
        <div className="App m-5">
            <TodoInput/>
            <TodoFilterContainer/>
            <TodoListContainer/>
        </div>
    );
}

export default App;
