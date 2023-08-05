export const initialPreference = {
    fontSizeOptions: [{id: 1, size: "small"}, {id: 2, size: "medium"}, {id: 3, size: "large"}],
    colorOptions: [{id: 1, color: "light"}, {id: 2, color: "dark"}],
    get fontSize() {
        return this.fontSizeOptions[0].size
    },
    get colorScheme() {
        return this.colorOptions[0].color
    }
};
const preferencesReducer = (preference, action) => {
    switch (action.type) {
        case "changeSize":
            return {...preference, fontSize: action.preferredSize};
        case "changeColorScheme":
            return {...preference, colorScheme: action.preferredColorScheme};
        default:
            return preference;
    }
};
export default preferencesReducer;