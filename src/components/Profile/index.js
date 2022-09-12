import './main.scss';
import avatar from '../../assets/img/avatar.png';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser.login);
  const infoUser = useSelector((state) => state.currentUser.info);

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  });

  return (
    <section className="profile">
      <div className="container">
        <div className="profile-wrap">
          <h3 className="profile-title">Welcome to your profile!</h3>
          <div className="profile-item">
            <div className="profile-item__img">
              <img src={avatar} />
            </div>
            <div className="profile-item_info">
              <h4 className="profile-item_info-name">{infoUser.username}</h4>
              <p>{infoUser.timeSince}</p>
              <ul className="profile-data__list">
                Data:
                <li className="profile-data__item">
                  &#128205; {infoUser.location}
                </li>
                <li className="profile-data__item">
                  &#128172; Speaks: {infoUser.language}
                </li>
                <li className="profile-data__item">
                  &#128101; Followers: {infoUser.followers}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
