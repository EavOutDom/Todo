import React, { useRef, useState } from "react";
import { MdAddCircle, MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import { TiTick } from "react-icons/ti";
import Note from "./note";
const CreateArea = () => {
    const { todos } = useSelector((state) => ({ ...state.todo }));
    const dispatch = useDispatch();
    const [note, setNote] = useState({
        id: "",
        title: "",
        content: "",
    });
    const [tempId, setTempId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const ref = useRef(null);

    const focus = () => {
        ref.current.focus();
    };
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
        if (isUpdate && note) {
            dispatch(
                updateTodo({
                    id: tempId,
                    title: note.title,
                    content: note.content,
                })
            );
            setIsUpdate(false);
            setNote({
                id: "",
                title: "",
                content: "",
            });
            console.log(note);
        } else {
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
        }
    };

    const checkNote = (id) => {
        const selected = todos.find((todo) => todo.id === id);
        // console.log(selected);
        if (selected) {
            setNote(selected);
            setTempId(id);
            setIsUpdate(true);
        }
    };
    // console.log(tempId);

    return (
        <div>
            <form
                // onSubmit={handleSubmit}
                className={
                    "relative my-2 mx-auto md:w-[480px] w-80 bg-white p-4 rounded-md shadow-lg"
                }
            >
                <div>
                    <input
                        ref={ref}
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

                <div>
                    {isUpdate ? (
                        <div>
                            <button
                                className={
                                    "absolute right-[70px] bottom-[-18px] bg-[yellow] rounded-full w-10 h-10 shadow-sm outline-none"
                                }
                                onClick={handleSubmit}
                            >
                                <TiTick
                                    className="w-full"
                                    color={"white"}
                                    size={"35"}
                                />
                            </button>
                            <button
                                className={
                                    "absolute right-[18px] bottom-[-18px] bg-[yellow] rounded-full w-10 h-10 shadow-sm outline-none"
                                }
                                onClick={() => {
                                    if (isUpdate) {
                                        setIsUpdate(false);
                                        setNote({
                                            id: "",
                                            title: "",
                                            content: "",
                                        });
                                    }
                                }}
                            >
                                <MdCancel
                                    className="w-full"
                                    color={"white"}
                                    size={"35"}
                                />
                            </button>
                        </div>
                    ) : (
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
                    )}
                </div>
            </form>
            <Note checkNote={checkNote} focus={focus} />
        </div>
    );
};

export default CreateArea;
