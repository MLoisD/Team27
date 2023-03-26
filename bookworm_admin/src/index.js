import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import "./index.scss"
import {AppContextProvider} from "./context/AppContext";
import {Provider} from "react-redux";
import {store} from "./components/store/configStore";
import "react-datepicker/dist/react-datepicker.css";


ReactDOM.render(
  <React.StrictMode>
      <AppContextProvider>
          <Provider store={store}>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
          </Provider>
      </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
