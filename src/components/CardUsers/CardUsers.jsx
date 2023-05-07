import { useDispatch, useSelector } from "react-redux";
import avatarPlug from "../../images/avatar.png";
import { useUpdateFollowersMutation } from "../../redux/followersApi";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import style from "./CardUsers.module.css";
import { selectFollowing } from "../../redux/selectors";
import { followingUser, unfollowingUser } from "../../redux/slice";

const CardUser = ({ user }) => {
    const { id, tweets, followers, avatar } = user;
    const [unFollowing, { isLoading }] = useUpdateFollowersMutation();
    const following = useSelector(selectFollowing);
    const dispatch = useDispatch();

    const isFollowing = following.includes(id);

    const handleFollow = () => {
        const userUpdate = {
            id,
            followers: isFollowing ? followers - 1 : followers + 1,
        };
        unFollowing(userUpdate);

        if (isFollowing) {
            dispatch(unfollowingUser(id));
        } else {
            dispatch(followingUser(id));
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <li className={style.card}>
                <div className={style.avatarWrap}>
                    <img
                        className={style.userImg}
                        src={avatar ?? avatarPlug}
                        alt="user profile avatar"
                        width={62}
                    />
                </div>
                <ul className={style.info}>
                    <li>
                        <h3 className={style.text}>{normNum(tweets)} tweets</h3>
                    </li>
                    <li>
                        <h3 className={style.text}>
                            {normNum(followers)} followers
                        </h3>
                    </li>
                </ul>
                <Button click={() => handleFollow()} styleAdd={isFollowing}>
                    {isFollowing ? "Following" : "Follow"}
                </Button>
            </li>
        </>
    );
};

function normNum(num) {
    return num.toLocaleString().replace(/\s/g, ",");
}
export default CardUser;