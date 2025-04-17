import clsx from 'clsx';
import { FaHeart, FaEye, FaUserFriends } from 'react-icons/fa';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.profileCard)}>
      <div>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <FaUserFriends className={css.icon} />
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <FaEye className={css.icon} />
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <FaHeart className={css.icon} />
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
