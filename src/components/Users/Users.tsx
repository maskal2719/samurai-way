import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UsersDataType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersDataType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (currentPage: number) => void
    isFetching: boolean
}

const Users: React.FC<UsersPropsType> = ({
                                             currentPage,
                                             pageSize,
                                             totalUsersCount,
                                             users,
                                             follow,
                                             unfollow,
                                             onPageChanged,
                                             isFetching
                                         }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.content}>
            <div className={classes.users}>
                {users.length > 1 ? users.map(el =>
                    <div key={el.id} className={classes.user}>
                        <NavLink to={'/profile/' + el.id}>
                            <img style={{width: '80px'}} src={el.photos.small !== null ? el.photos.small : userPhoto}
                                 alt="user_avatar"/>
                        </NavLink>
                        {el.name}
                        {!el.followed
                            ? <button onClick={
                                () =>
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                    withCredentials: true,
                                    headers : {
                                        'API-KEY' : 'fe6f47e1-85b3-410d-a710-52547d7fe962'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            follow(el.id)
                                        }
                                    })

                            }
                            >Follow</button>
                            : <button onClick={() =>
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{
                                    withCredentials: true,
                                    headers : {
                                        'API-KEY' : 'fe6f47e1-85b3-410d-a710-52547d7fe962'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            unfollow(el.id)
                                        }
                                    })
                            }>Unfollow</button>
                        }
                    </div>
                ) : <div>У тебя Нет друзей,потому что ты мудак :)))</div>}
            </div>
            <div className={classes.pagination}>
                {
                    pages.map((el) => <span key={el} onClick={() => {
                        onPageChanged(el)
                    }} className={currentPage === el ? classes.selectedPage : ''}>{el}</span>)
                }
                <span className={classes.selectedPage}></span>
            </div>
        </div>
    );
};

export default Users;