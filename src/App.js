
import React, { Component } from "react";
import "./App.css";
import Todo from "./screens/Todo";
import { store,  } from "./Redux/store";
import { Provider } from "react-redux";

class App extends Component {
  

  render() {
    return (
      <Provider store={store}>
   
       
          <Todo />
       
      </Provider>
    );
  }
}

export default App;
