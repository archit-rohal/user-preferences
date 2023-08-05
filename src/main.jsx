import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import UserPreferencesProvider from "./context/UserPreferencesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <UserPreferencesProvider>
            <App/>
        </UserPreferencesProvider>
    </BrowserRouter>
);