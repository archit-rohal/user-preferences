import {useContext} from "react";
import {UserPreferencesContext} from "../context/UserPreferencesProvider.jsx";

const Settings = () => {
    const {getSize, getColor, preference} = useContext(UserPreferencesContext)
    return (
        <div>
            <h1>Preferences form</h1>
            <form action="">
                <label htmlFor="size">Font size </label>
                <select id="size" value={preference.fontSize} onChange={(e) => getSize(e)}>
                    {preference.fontSizeOptions.map(({id, size}) =>
                        <option key={id}>{size.charAt(0).toUpperCase() + size.slice(1)}</option>
                    )}
                </select>
                <label htmlFor="colorscheme">Color scheme </label>
                <select id="colorscheme" value={preference.colorScheme} onChange={e => getColor(e)}>
                    {preference.colorOptions.map(({id, color}) =>
                        <option key={id}>{color.charAt(0).toUpperCase() + color.slice(1)}</option>
                    )}
                </select>
            </form>
        </div>
    );
};

export default Settings;