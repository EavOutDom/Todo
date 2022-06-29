import React, { useState } from "react";
import CreateArea from "./create-area";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";

const App = () => {
    const [items, setItems] = useState([]);
    return (
        <div>
            <Header />
            <CreateArea
                onAdd={(data) => {
                    setItems([...items, data]);
                }}
            />
            <Note items={items} />
            <Footer />
        </div>
    );
};

export default App;
