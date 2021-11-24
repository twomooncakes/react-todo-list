import { createSlice, configureStore } from '@reduxjs/toolkit';

const initState = {
    todos: [
        {
            id: 1,
            title: 'Drink coffee',
            isDone: false,
        },
        {
            id: 2,
            title: 'Go to park',
            isDone: true,
        },
        {
            id: 3,
            title: 'Make a pie',
            isDone: false,
        },
    ]
}

const todoListSlice = createSlice({
    name: 'todos',
    initialState: initState,
    reducers: {
      add(state, action) {
        console.log("store bert")
        console.log(state);
        console.log(action.payload);
        state.todos = [...state.todos, action.payload];
      },
    //   delete(state) {
    //     state.counter--;
    //   },
    //   check(state, action) {
    //     state.counter += action.payload;
    //   },
    //   edit(state) {
    //     state.showCounter = !state.showCounter;
    //   },
      reset(state) {
        state.todos = [];
      },
    },
});

const store = configureStore({
    reducer: {
      todoList: todoListSlice.reducer,
    },
});



export const todoListActions = todoListSlice.actions;
export default store;