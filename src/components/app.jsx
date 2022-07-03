import React, { useState } from "react";
import CreateArea from "./create-area";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";

const App = () => {
    return (
        <div>
            <Header />
            <CreateArea />
            <Note />
            <Footer />
        </div>
    );
};

export default App;
