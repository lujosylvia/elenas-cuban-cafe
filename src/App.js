import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import AppToolbar from "./components/Toolbar/AppToolbar";
import AnimatedRouter from "./router/AnimatedRouter";
import { mainTheme } from "./themes/mainTheme";
import './App.css';


const App = () => {
  return (
    <div style={{ backgroundColor: "#eeeeee", height: "1000px", weight: "1000px"}}>
    <ThemeProvider theme={mainTheme}>
      <Router>
        <div className="App">
          <AppToolbar />
        </div>
        <AnimatedRouter />
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
