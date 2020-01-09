export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const LIST_TEXT = "LIST_TEXT";
export const EDIT_TEXT = "EDIT_TEXT";


const addTodo = () => {
  // console.log(text);
  return {
    type: ADD_TODO
    // payload: text
  };
};

const updateTodo = index => {
  // console.log(index);
  return {
    type: UPDATE_TODO,
    index
  };
};

const deleteTodo = index => {
  console.log(index);
  return {
    type: DELETE_TODO,
    payload: index
  };
};

const listText = text => {
  // console.log(text);
  return {
    type: LIST_TEXT,
    payload: text
  };
};

const editText = editableText => {
  console.log(editableText);
  return {
    type: EDIT_TEXT,
    payload: editableText
  };
};

export { addTodo, updateTodo, deleteTodo, listText, editText };
