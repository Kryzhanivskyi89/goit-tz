import UserList from "../../components/UserList/UserList";
import "./Tweets.module.css";

import DropdownCustom from "../../components/Dropdown/Dropdown";

const Tweets = () => {
    return (
        <>
            <DropdownCustom />
            <div className="wrapper">
                <UserList />
            </div>
        </>
    );
};

export default Tweets;