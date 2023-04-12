import React from "react";
import userPhoto from "../../assets/images/user.jpg";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import classes from './Users.module.css'

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (el: number) => {
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        const {totalUsersCount, pageSize, currentPage} = this.props
        let pagesCount = Math.ceil(totalUsersCount / pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <>
                <div className={classes.users}>
                    {this.props.users.length > 0 ? this.props.users.map(el =>
                        <div key={el.id} className={classes.user}>

                            <img style={{width: '80px'}} src={el.photos.small !== null ? el.photos.small : userPhoto}
                                 alt="user_avatar"/>
                            {el.name}
                            {!el.followed
                                ? <button onClick={() => this.props.follow(el.id)}>Follow</button>
                                : <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                            }
                        </div>
                    ) : <div>У тебя Нет друзей,потому что ты мудак :)))</div>}
                </div>
                <div>
                    {
                        pages.map((el) => <span key={el} onClick={() => {
                            this.onPageChanged(el)
                        }} className={currentPage === el ? classes.selectedPage : ''}>{el}</span>)
                    }
                    <span className={classes.selectedPage}></span>
                </div>
            </>
        );
    }
}

export default Users