import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Note = ({ items }) => {
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(items);
    }, [items]);
    console.log("list", list);
    const handleDelete = (id) => {
        setList((data) => {
            return list.filter((data) => {
                return data.id !== id;
            });
        });
    };
    return (
        <div>
            {list?.map((data, index) => {
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
                        <p
                            className={
                                "bg-white rounded-md px-2 py-4 w-[240px] m-4 float-left shadow-xl"
                            }
                        >
                            {data.content}
                        </p>
                        <div className="flex justify-end">
                            <button
                                className={
                                    "bg-[yellow] text-white rounded-full p-2 text-xl"
                                }
                                onClick={() => handleDelete(data.id)}
                            >
                                <BsFillTrashFill />
                            </button>
                            {/* <button onClick={() => {}}>Update</button> */}
                        </div>
                    </div>
                );
            })}
            <div></div>
        </div>
    );
};

export default Note;
