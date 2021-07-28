import React from 'react'
import PropTypes from 'prop-types'
import styles from "./FriendListItem.module.css"

function FriendListItem({avatar, name, isOnline}) {
    return (
        <li className={styles.item}>
          <span className={isOnline ? styles.online : styles.offline}></span>
          <img className={styles.avatar} src={avatar} alt="" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem

