export const options = [
    { value: "all", label: "Show all" },
    { value: "follow", label: "Follow" },
    { value: "followings", label: "Followings" },
];

export const customStyles = {
    input: (provided, state) => ({
        ...provided,
        color: "#fff",
        cursor: "pointer",
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "#fff",
    }),
    option: (provided, state) => ({
        ...provided,
        cursor: "pointer",
        backgroundColor: state.isFocused ? "#fffb00" : " #fffb00",
        color: state.isSelected ? "#5CD3A8" : "#000",
    }),
    control: (provided, state) => ({
        ...provided,
        borderRadius: "8px",
        backgroundColor: " ##0099ff",
        border: state.isFocused ? "1px solid blue" : "1px solid gray",
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? " #fffb00" : " #fffb00",
        borderRadius: "8px",
    }),
};