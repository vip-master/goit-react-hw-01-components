import React from 'react'
import PropTypes from 'prop-types'
import styles from './FriendList.module.css'
import FriendListItem from './friendListItem/FriendListItem'

function FriendList({friends}) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend=>
            <FriendListItem key={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
            )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FriendList

