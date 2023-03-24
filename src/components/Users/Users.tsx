import React from 'react';
import classes from 'Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

const Users: React.FC<UsersPropsType> = ({users, setUsers, unfollow, follow}) => {

    let getUsers = () => {
        const urlUsers = 'https://social-network.samuraijs.com/api/1.0/users'
        if (users.length === 0) {
            axios.get(urlUsers)
                .then(response => {
                    setUsers(response.data.items)
                })
        }
    }

    let usersElement = users.length > 0 ? users.map(el =>
        <div key={el.id}>

            <img style={{width: '80px'}} src={el.photos.small !== null ? el.photos.small : userPhoto} alt="avatar"/>
            {el.name}
            {!el.followed
                ? <button onClick={() => follow(el.id)}>Follow</button>
                : <button onClick={() => unfollow(el.id)}>Unfollow</button>
            }
        </div>
    ) : <div>
        <button onClick={getUsers}>Получить</button>
        У тебя Нет друзей,потому что ты мудак :)))
    </div>

    return (
        <>

            {usersElement}
        </>
    );
};

export default Users;