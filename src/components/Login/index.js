import './main.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isInvalid, setInvalid] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser.login);
  const infoUser = useSelector((state) => state.currentUser.info);
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === infoUser.login && userPassword === infoUser.password) {
      setInvalid(false);
      dispatch({
        type: 'LOGIN',
        payload: userName,
      });
      localStorage.setItem('currentUser', userName);
      navigate('/profile');
    } else {
      setUserName('');
      setUserPassword('');
      setInvalid(true);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="login-wrap">
          <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="login-form__title">User login</h3>
            <input
              className="login-form__input"
              type="text"
              placeholder="Your name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            {isInvalid && (
              <div className="form-error">
                The username or password entered is incorrect
              </div>
            )}
            <input
              className="login-form__input"
              type="password"
              placeholder="Your password"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
            />
            {isInvalid && (
              <div className="form-error">
                The username or password entered is incorrect
              </div>
            )}
            <input className="login-form__btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
