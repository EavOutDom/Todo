import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {setShow, addTodo} from '../features/todo/todoSlice'
const CreateArea = ({ onAdd }) => {
    const {todos, isShow} = useSelector((state) => ({...state.todo}));
    const dispatch = useDispatch();
    const [note, setNote] = useState({
        id: "",
        title: "",
        content: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({
            ...note,
            [name]: value,
            id: Date.now(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.title === "" || note.content === "") {
            alert("Please fill in all fields");
        } else {
            dispatch(addTodo(note));
            setNote({
                id: "",
                title: "",
                content: "",
            });
        }
    };

    return (
        <div>
            <form
                // onSubmit={handleSubmit}
                className={
                    "relative my-2 mx-auto w-[480px] bg-white p-4 rounded-md shadow-lg"
                }
            >
                <div onClick={() => dispatch(setShow())}>
                    <input
                        name={"title"}
                        type={"text"}
                        className={
                            "focus:outline-none w-full text-lg p-1 resize-none my-1"
                        }
                        placeholder={"Title..."}
                        value={note.title}
                        onChange={handleChange}
                    />
                </div>
                {isShow && (
                    <div>
                        <textarea
                            name={"content"}
                            type={"text"}
                            className={
                                "focus:outline-none text-lg w-full p-1 resize-none my-1"
                            }
                            placeholder={"Content..."}
                            rows={"2"}
                            value={note.content}
                            onChange={handleChange}
                        />
                    </div>
                )}
                {isShow && (
                    <div>
                        <button
                            className={
                                "absolute right-[18px] bottom-[-18px] bg-[yellow] rounded-full w-10 h-10 shadow-sm outline-none"
                            }
                            onClick={handleSubmit}
                        >
                            <MdAddCircle
                                className="w-full"
                                color={"white"}
                                size={"35"}
                            />
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default CreateArea;
