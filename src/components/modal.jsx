import React from "react";

const Modal = ({ onConfirm, onCancel, text }) => {
    return (
        <div
            className={
                "absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
            }
        >
            <div
                className={
                    "bg-white rounded-lg shadow-2xl p-4 w-80 h-44 flex justify-center items-center"
                }
            >
                <div className={"text-center "}>
                    <h1 className={"font-bold"}>
                        {text}
                    </h1>
                    <div className={"absolute bottom-2 right-3"}>
                        <button
                            onClick={onConfirm}
                            className={
                                "bg-red-500 text-white w-24 py-2 rounded-md mx-1"
                            }
                        >
                            confirm
                        </button>
                        <button
                            onClick={onCancel}
                            className={
                                "bg-green-500 text-white w-24 py-2 rounded-md mx-1"
                            }
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
