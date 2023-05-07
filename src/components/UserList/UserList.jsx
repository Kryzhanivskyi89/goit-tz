import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rings } from "react-loader-spinner";

import { useGetFollowersQuery } from "../../redux/followersApi";
import CardUser from "../CardUsers/CardUsers";
import Loader  from "../Loader/Loader";
import Button from "../Button/Button";
import style from "./UserList.module.css";
import { selectUsers } from "../../redux/selectors";
import {
    showAllUsers,
    showFollowUsers,
    showFollowingUsers,
} from "../../redux/slice";


const UserList = () => {
    const { data, isError, isLoading } = useGetFollowersQuery();
    const { filters, showUsers } = useSelector(selectUsers);
    const dispatch = useDispatch();

    const [visibleCards, setVisibleCards] = useState(3);

    const handleClick = () => {
        const maxCards = showUsers?.length;
        setVisibleCards((prev) => (prev + 3 > maxCards ? maxCards : prev + 3));
    };

    useEffect(() => {
        if (!data) {
            return;
        }
        if (filters === "follow") {
            dispatch(showFollowUsers(data));
            setVisibleCards(3);
        } else if (filters === "followings") {
            dispatch(showFollowingUsers(data));
            setVisibleCards(3);
        } else dispatch(showAllUsers(data));
    }, [data, dispatch, filters]);

    const paginationUsers = showUsers?.slice(0, visibleCards);
    return (
        <>
            {isError && (
                <>
                    <h1>Something went wrong</h1>
                    <Rings colors={["#ff0000", "#ff0000", "#ff0000"]} />
                </>
            )}
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <ul className={style.userList}>
                        {paginationUsers.map((user) => (
                            <CardUser user={user} key={user.id} />
                        ))}
                    </ul>

                    {showUsers?.length > visibleCards && (
                        <Button click={() => handleClick()}>load more</Button>
                    )}
                </>
            )}
        </>
    );
};

export default UserList;