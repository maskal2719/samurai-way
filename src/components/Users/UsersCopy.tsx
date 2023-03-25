import React from "react";
import userPhoto from "../../assets/images/user.jpg";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

class UsersCopy extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.users.length > 0 ? this.props.users.map(el =>
                    <div key={el.id}>

                        <img style={{width: '80px'}} src={el.photos.small !== null ? el.photos.small : userPhoto}
                             alt="user_avatar"/>
                        {el.name}
                        {!el.followed
                            ? <button onClick={() => this.props.follow(el.id)}>Follow</button>
                            : <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                        }
                    </div>
                ) : <div>У тебя Нет друзей,потому что ты мудак :)))</div>}
            </>
        );
    }
}

export default UsersCopy