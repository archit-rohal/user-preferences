import {createContext, useReducer} from "react";
import {initialPreference} from "./preferencesReducer";
import preferencesReducer from "./preferencesReducer";

export const UserPreferencesContext = createContext()
const UserPreferencesProvider = ({children}) => {
    const [preference, dispatch] = useReducer(
        preferencesReducer, initialPreference
    );
    const getSize = (e) => {
        dispatch({type: "changeSize", preferredSize: e.target.value})
    }
    const getColor = e => {
        dispatch({type: "changeColorScheme", preferredColorScheme: e.target.value})
    }
    return (
        <UserPreferencesContext.Provider value={{preference, getSize, getColor}}>
            {children}
        </UserPreferencesContext.Provider>
    );
};
export default UserPreferencesProvider;