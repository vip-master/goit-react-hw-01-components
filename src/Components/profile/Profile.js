import React from 'react'
import PropTypes from 'prop-types'
import styles from './Profile.module.css'

function Profile({name, tag, location, avatar, stats}) {
    return (
        <div className={styles.profile}>
          <div className={styles.description}>
            <img
              src={avatar}
              alt="user avatar"
              className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
          </div>
            
          <ul className={styles.stats}>
            {
                Object.keys(stats).map(stat=>(
                    <li key={stat} className={styles.stat}>
                        <span className={styles.label}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</span>
                        <span className={styles.quantity}>{stats[stat]}</span>
                    </li>  
                ))
            }      
          </ul>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile

