import userData from './userData.json';
import Profile from './Profile';

const AppProfile = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      ></Profile>
    </>
  );
};

export default AppProfile;
