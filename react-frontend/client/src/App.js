import React, { Component } from "react";
import "./App.css";
import TodoList from "./Components/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: []
    };
  }
  componentWillMount() {
    var todolist = [];
    todolist.push(<TodoList parentContext={this} appContext={this} />);
    this.setState({
      todolist: todolist
    });
  }
  render() {
    return <div className="App">{this.state.list}</div>;
  }
}

export default App;
