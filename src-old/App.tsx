import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppToolbar from "./components/Toolbar/AppToolbar";
import './App.css';


const App = () => {
  return (
    <NextUIProvider>
      <Router>
        <div className="App">
          <AppToolbar />
        </div>
        {/* <AnimatedRouter /> */}
      </Router>
    </NextUIProvider>
  );
}

export default App;
