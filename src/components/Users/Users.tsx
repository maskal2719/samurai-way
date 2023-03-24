import React from 'react';
import classes from 'Users.module.css'
import {UsersPropsType} from "./UsersContainer";

const Users: React.FC<UsersPropsType> = ({users, setUsers, unfollow, follow}) => {

    if (users.length === 0) {
        setUsers([{
            id: 1,
            fullName: 'Den',
            status: 'I`m fine',
            avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png',
            location: {
                city: 'Gomel',
                country: 'Belarus'
            },
            followed: true
        },
            {
                id: 2,
                fullName: 'Lexa',
                status: 'I`m fine',
                avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png',
                location: {
                    city: 'Mozir',
                    country: 'Belarus'
                },
                followed: false
            },
            {
                id: 3,
                fullName: 'Dimon',
                status: 'I`m fine',
                avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png',
                location: {
                    city: 'Parichi',
                    country: 'Belarus'
                },
                followed: true
            }])
    }

    let usersElement = users.length > 0 ? users.map(el =>
        <div key={el.id}>
            <img style={{width: '80px'}} src={el.avatar} alt="avatar"/>
            {el.fullName}
            {!el.followed
                ? <button onClick={() => follow(el.id)}>Follow</button>
                : <button onClick={() => unfollow(el.id)}>Unfollow</button>
            }
        </div>
    ) : <div>У тебя Нет друзей, мудак :)</div>

    return (
        <>
            {usersElement}
        </>
    );
};

export default Users;