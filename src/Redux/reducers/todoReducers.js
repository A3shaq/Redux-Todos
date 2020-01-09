import { ADD_TODO, UPDATE_TODO, DELETE_TODO, LIST_TEXT, EDIT_TEXT } from "../actions";

const initial_state = {
  list: [],
  text: "",
  editText: ""
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log("reducers ADD_TODO");
      let newList = [...state.list];
      // newList.push(action.payload);
      console.log(state.text)
      newList.push(state.text);
      // state.text="";  

      //...state =state.list.concat(action.payload)
      return {
        ...state,
        text: "",
        list: newList
      };
    }


    default: {
      return state;
    }
  }
};

export default reducer;
