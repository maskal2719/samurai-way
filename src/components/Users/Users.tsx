import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UsersDataType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersDataType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (currentPage: number) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             currentPage,
                                             pageSize,
                                             totalUsersCount,
                                             users,
                                             follow,
                                             unfollow,
                                             onPageChanged
                                         }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div className={classes.users}>
                {users.length > 0 ? users.map(el =>
                    <div key={el.id} className={classes.user}>

                        <img style={{width: '80px'}} src={el.photos.small !== null ? el.photos.small : userPhoto}
                             alt="user_avatar"/>
                        {el.name}
                        {!el.followed
                            ? <button onClick={() => follow(el.id)}>Follow</button>
                            : <button onClick={() => unfollow(el.id)}>Unfollow</button>
                        }
                    </div>
                ) : <div>У тебя Нет друзей,потому что ты мудак :)))</div>}
            </div>
            <div>
                {
                    pages.map((el) => <span key={el} onClick={() => {
                        onPageChanged(el)
                    }} className={currentPage === el ? classes.selectedPage : ''}>{el}</span>)
                }
                <span className={classes.selectedPage}></span>
            </div>
        </>
    );
};

export default Users;