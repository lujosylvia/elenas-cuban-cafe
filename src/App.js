import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import AppToolbar from "./components/Toolbar/AppToolbar";
import { mainTheme } from "./themes/mainTheme";
import './App.css';


const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <AppToolbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
