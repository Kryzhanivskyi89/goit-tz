import { useEffect, useMemo, useState } from "react";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { customStyles, options } from "./dropdownOption";
import { filtersUser } from "../../redux/slice";

const DropdownCustom = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [option, setOption] = useState(options[0]);
    const dispatch = useDispatch();

    useMemo(() => {
        const searchFilter = searchParams.get("filter");
        setOption(options.find((option) => option.value === searchFilter));
    }, [searchParams]);

    useEffect(() => {
        if (!option) {
            dispatch(filtersUser("all"));
            setSearchParams({ filter: "all" });
        } else dispatch(filtersUser(option.value));
    }, [dispatch, option, setSearchParams]);

    const handleChange = ({ value }) => {
        setSearchParams({ filter: value });
    };
    return (
        <Select
            onChange={handleChange}
            options={options}
            styles={customStyles}
            value={option}
            defaultValue={option ?? options[0]}
        />
    );
};

export default DropdownCustom;