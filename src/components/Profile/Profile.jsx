import clsx from 'clsx';
import { FaHeart, FaEye, FaUserFriends } from 'react-icons/fa';
import './Profile.css';

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={clsx('profile-card')}>
      <div>
        <img src={image} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats-list">
        <li className="stats-item">
          <FaUserFriends className="icon" />
          <span className="stats-label">Followers</span>
          <span className="stats-value">{stats.followers}</span>
        </li>
        <li className="stats-item">
          <FaEye className="icon" />
          <span className="stats-label">Views</span>
          <span className="stats-value">{stats.views}</span>
        </li>
        <li className="stats-item">
          <FaHeart className="icon" />
          <span className="stats-label">Likes</span>
          <span className="stats-value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
