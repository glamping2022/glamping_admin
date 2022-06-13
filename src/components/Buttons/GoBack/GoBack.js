import './GoBack.scss';

import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const GoBack = () => {
	const history = useHistory();

	const handleGoBack = () => {
		history.goBack();
	};

	return (
		<Button type="primary" className={'button_Go_Back'} onClick={handleGoBack}>{'<<< Назад'}</Button>
	);
};

export default GoBack;