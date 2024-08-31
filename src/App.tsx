import { Provider } from 'react-redux';
import store from './store';
import GlobalModal from './shared/components/modal/globalModal/globalModal';
import Navigation from './Navitation';

const App = () => {
	return (
		<Provider store={store}>
			<GlobalModal />
			<Navigation />
		</Provider>
	);
};

export default App;
