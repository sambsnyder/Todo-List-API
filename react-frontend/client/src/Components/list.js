import React from "react";
import axios from "axios";

export default class TodoList extends React.Component {
  state = {
    todos: []
  };
  componentDidMount() {
    axios.get("http://localhost:8000/api/todos").then(res => {
      console.log(res.data);
      this.setState({
        todos: res.data
      });
    });
  }
  render() {
    var items = [];
    this.state.todos.forEach(function(obj) {
      obj.todoItems.forEach(function(obj1) {
        console.log(obj1.content);
        obj.content !== "undefined"
          ? items.push(obj1)
          : console.log("undefined item");
      });
    });
    return [
      <React.Fragment key="frag_1">
        <div key="1">
          <form>
            <input placeholder="Todo" />
            <button type="submit"> Add Todo </button>
          </form>
        </div>
        <div key="2">
          <ul>
            {this.state.todos.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
            <ul key="todo-items">
              {items.map(item => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </ul>
        </div>
      </React.Fragment>
    ];
  }
}
