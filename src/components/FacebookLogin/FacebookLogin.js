import { Button } from 'antd';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login';
import { useDispatch } from 'react-redux';

import config from '../../settings/config';
import { facebookLogin } from '../../store/actions/usersAction';

const FacebookLogin = () => {
  const dispatch = useDispatch();
  const facebookResponse = response => {
    if (response.id) {
      dispatch(facebookLogin(response));
    }
  };
  return (
    <FacebookLoginButton
      appId={config.fb.appId}
      fields='username, email'
      render={renderProps => {
        return <Button onClick={renderProps.onClick}>Enter with Facebook</Button>;
      }}
      callback={facebookResponse}
    />
  );
};

export default FacebookLogin;
