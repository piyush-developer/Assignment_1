import { connect } from 'react-redux';
import './App.css';
import AddTodo from "./MyComponent/AddTodo";
import Footer from './MyComponent/Footer';
import Header from "./MyComponent/Header";
import Todos from "./MyComponent/Todos";

function App() {

  return (
    <div className="App">
      <Header title="Assignment-one [Task Management by using Redux]" searchBar={false} />
      <AddTodo />
      <Todos />
      <Footer/>
    </div>
  );
}

export default connect(state => ({ todos: state }))(App);
