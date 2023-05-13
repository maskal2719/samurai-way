import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpeg";
import {UsersDataType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersDataType[]
    acceptFollow: (userId: number) => void
    acceptUnfollow: (userId: number) => void
    onPageChanged: (currentPage: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             currentPage,
                                             pageSize,
                                             totalUsersCount,
                                             users,
                                             acceptUnfollow,
                                             acceptFollow,
                                             onPageChanged,
                                             followingInProgress,
                                             isFetching,
                                             followThunkCreator,
                                             unfollowThunkCreator
                                         }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let slicedPages;
    const curPage = currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 9);
    } else {
        slicedPages = pages.slice(curPage - 5, curPage + 4);
    }
    console.log(followingInProgress)

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
                            ? <button disabled={followingInProgress.some(id => id === el.id)} onClick={
                                () => followThunkCreator(el.id)
                            }
                            >Follow</button>
                            : <button disabled={followingInProgress.some(id => id === el.id)} onClick={
                                () => unfollowThunkCreator(el.id)

                            }>Unfollow</button>
                        }
                    </div>
                ) : <div>У тебя Нет друзей,потому что ты мудак :)))</div>}
            </div>
            <div className={classes.pagination}>
                {/*{*/}
                {/*    pages.map((el) => <span key={el} onClick={() => {*/}
                {/*        onPageChanged(el)*/}
                {/*    }} className={currentPage === el ? classes.selectedPage : ''}>{el}</span>)*/}
                {/*}*/}
                {slicedPages.map((el, index) => {
                    return (
                        <span key={index} onClick={() => onPageChanged((el))}
                              className={currentPage === el ? classes.selectedPage : ""}>{el}</span>
                    )
                })}
                <span className={classes.selectedPage}></span>
            </div>
        </div>
    );
};

export default Users;