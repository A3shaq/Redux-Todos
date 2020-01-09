import React, { Component } from "react";
import { connect } from "react-redux";
import SquareButton from "../components/Button/SqaureButton";
import Nav from "../components/Navbar";
import "./Todo.css";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  listText,
  editText
} from "../Redux/actions/todoAction";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      index: null
    };
  }

  editChangeText = e => {
    let editableText = e.target.value;
    this.props.editText(editableText);
    this.setState({
      editText: e.target.value
    });
  };
  handleChange = e => {
    // console.log("handleChange");
    let text = e.target.value;
    this.props.listText(text);
    // this.setState({ text: e.target.value });
  };

  deleteItem(index) {
    // console.log("deleteItem");

    this.props.deleteTodo(index);
  }

  EditTodo(index) {
    // console.log("Edit Todo");
    // console.log(this.props);

    let { todos } = this.props;
    if (index >= 0) {
      todos.editText = todos.list[index];
      this.setState({
        index
      });
    } else {
      console.log("work");
      this.props.updateTodo(this.state.index);

      this.setState({ index: null });
    }
  }

  addList = () => {
    let { todos } = this.props;
    if (this.props.todos.text !== "") {
      this.props.addTodo();
      todos.text = "";
    } else {
      alert("invalid text");
    
    }
  };

  render() {
    let { todos } = this.props;

    return (
      <div className="row">
        <Nav />

        <div
          className="form-group inputContent  "
          style={{ margin: " 0px 66px 0px 66px" }}
        >
          <input
            className="form-control inputAddList"
            name="text"
            placeholder="Write here to Add List "
            value={todos.text}
            onChange={this.handleChange}
          />
        </div>

        <div className="btn-add">
          <SquareButton
            variant="contained"
            color="primary"
            buttonText="Add Todo"
            className="btn-addList"
            onClick={this.addList}
          />
        </div>

        <ul className="list-group col-4 col-md-4 col-lg-4">
          {todos.list.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item listItems"
                style={{
                  marginBottom: "10px"
                }}
              >
                <div className="row">
                  {this.state.index === index ? (
                    <div
                      className="form-group col-8"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        name="editText"
                        style={{ padding: 0 }}
                        value={todos.editText}
                        onChange={this.editChangeText}
                        className="form-control inputContent"
                      />

                      <SquareButton
                        variant="contained"
                        color="secondary"
                        buttonText="Update"
                        className="btn-Update"
                        onClick={() => this.EditTodo()}
                      />
                    </div>
                  ) : (
                    <div
                      className="col-8"
                      style={{
                        display: " flex",
                        alignItems: "center"
                      }}
                    >
                      <div className="todosListItems"> {item}</div>
                      <SquareButton
                        variant="contained"
                        color="secondary"
                        buttonText="Edit"
                        className="btn-Update"
                        onClick={() => this.EditTodo(index)}
                      />
                    </div>
                  )}

                  <div className="col-4">
                    <SquareButton
                      variant="contained"
                      color="primary"
                      buttonText="Delete"
                      className="btn-delete"
                      onClick={() => this.deleteItem(index)}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch(addTodo()),
    updateTodo: index => dispatch(updateTodo(index)),
    deleteTodo: index => dispatch(deleteTodo(index)),
    listText: text => dispatch(listText(text)),
    editText: editableText => dispatch(editText(editableText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
