import React from "react";
import userPhoto from "../../assets/images/user.jpg";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import classes from './Users.module.css'

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
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
        );
    }
}

export default Users