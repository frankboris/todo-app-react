import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
    return (
        <div className="App m-5">
            <TodoInput />
            <TodoList />
            <TodoFilter />
        </div>
    );
}

export default App;
