import {NavLink, Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import {useContext, useEffect} from "react";
import {UserPreferencesContext} from "./context/UserPreferencesProvider.jsx";

const App = () => {
    const {preference: {fontSize, colorScheme}} = useContext(UserPreferencesContext)
    useEffect(() => {
        document.body.className = `${fontSize.toLowerCase()} ${colorScheme.toLowerCase()}`
    }, [colorScheme, fontSize]);
    return (
        <div>
            <nav>
                <NavLink to="/">Profile</NavLink> ||
                <NavLink to="/notes">Notes</NavLink> ||
                <NavLink to="/settings">Settings</NavLink>
            </nav>
            <Routes>
                <Route index element={<Profile/>}/>
                <Route path="/notes" element={<Notes/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="*" element={<h1>sorry, page not found 🤷</h1>}/>
            </Routes>
        </div>
    );
};

export default App;