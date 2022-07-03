import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    isShow: false,
    isUpdate: false,
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setShow: (state, action) => {
            state.isShow = true;
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (data) => data.id !== action.payload
            );
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((data) => {
                if (data.id === action.payload) {
                    return {
                        ...data,
                        title: action.payload,
                    };
                }
                return data;
            });
        }
    },
});

export const { setShow, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
