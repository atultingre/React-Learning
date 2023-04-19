import React from "react";

// import Hooks from "./components/Hooks/Hooks";
import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Form/context/AuthProvider";
// import Notes from './components/NotesApp/Notes'
// import ColorsName from "./components/colorsName/ColorsName";
// import JsonPlaceholder from "./components/jsonplaceholder/JsonPlaceholder";

const App = () => {
  return (
    <div>
      {/* <Notes/> */}
      {/* <ColorsName /> */}
      {/* <JsonPlaceholder/> */}
      {/* <Hooks/> */}
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<Form />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
