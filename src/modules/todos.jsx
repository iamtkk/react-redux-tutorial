import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// const MY_ACTION = "sample/MY_ACTION";
// const myAction = createAction(MY_ACTION, (text) => `${text}!`);
// const action = myAction('hello world');
// result : { type: MY_ACTION, payload: 'hello world!' }

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
// export const insert = (text) => ({
//   type: INSERT,

//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

export const toggle = createAction(TOGGLE, (id) => id);
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

export const remove = createAction(REMOVE, (id) => id);
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

// reducer
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    // [CHANGE_INPUT]: (state, { payload: input }) => ({
    //   ...state,
    //   input,
    // }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    // [INSERT]: (state, { payload: todo }) => ({
    //   ...state,
    //   todos: state.todos.concat(todo),
    // }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    // [TOGGLE]: (state, { payload: id }) => ({
    //   ...state,
    //   todos: state.todos.map((todo) =>
    //     todo.id === id ? { ...todo, done: !todo.done } : todo
    //   ),
    // }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
    // [REMOVE]: (state, { payload: id }) => ({
    //   ...state,
    //   todos: state.todos.filter((todo) => todo.id !== id),
    // }),
  },
  initialState
);

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

export default todos;
