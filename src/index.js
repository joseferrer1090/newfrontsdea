import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {browserHistory} from "react-router"

import App from "./App";

const app = document.getElementById("app");

ReactDOM.render(<BrowserRouter history={browserHistory}>
    <App/>
</BrowserRouter>, app);