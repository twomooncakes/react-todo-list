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
      delete(state, action) {
        state.todos = state.todos.filter(t => t.id !== action.payload);
      },
      check(state, action) {
        state.todos = state.todos.map((t) => {
            if (t.id === action.payload) return { 
                ...t, 
                isDone: !t.isDone 
            };
            return t;
        });
      },
      edit(state, action) {
        state.todos = state.todos.map((t) => {
            if (t.id === action.payload.editId) return { 
                ...t, 
                title: action.payload.newTitle 
            };
            return t;
        });
      },
      reset(state) {
        state.todos = [];
      },
      sort(state) {
        state.todos = state.todos.sort((a, b) => a.isDone - b.isDone)
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