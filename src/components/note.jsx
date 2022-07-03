import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";
const Note = () => {
    const { todos } = useSelector((state) => ({ ...state.todo }));
    const dispatch = useDispatch();

    return (
        <div>
            {todos?.map((data, index) => {
                return (
                    <div
                        key={data.id}
                        className="bg-white rounded-md p-2 w-[240px] m-4 float-left shadow-md"
                    >
                        <h1
                            className={
                                "bg-white rounded-md px-2 py-4 w-[240px] m-4 float-left shadow-xl font-semibold"
                            }
                        >
                            {data.title}
                        </h1>
                        {/* <input 
                            value={data.title}
                            onChange={(e) => dispatch(updateTodo(e.target.value, data.id))}
                        /> */}
                        <p
                            className={
                                "bg-white rounded-md px-2 py-4 w-[240px] m-4 float-left shadow-xl"
                            }
                        >
                            {data.content}
                        </p>
                        <div className={"w-full flex justify-end items-end"}>
                            <button
                                className={
                                    "bg-[yellow] text-white rounded-full p-2 text-xl "
                                }
                                onClick={() => dispatch(deleteTodo(data.id))}
                            >
                                <BsFillTrashFill />
                            </button>
                            {/* <button
                                onClick={() => dispatch(updateTodo(data.id))}
                            >
                                update
                            </button> */}
                        </div>
                    </div>
                );
            })}
            <div></div>
        </div>
    );
};

export default Note;
