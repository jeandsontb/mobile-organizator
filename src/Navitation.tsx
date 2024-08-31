import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./modules/login";
import Home from "./modules/home";
import { MenuUrl } from "./shared/enums/MenuUrl.enum";
import Splash from "./modules/splash";
import CreateUser from "./modules/createUser";
import CreateContact from "./modules/createContact";
import UpdateContact from "./modules/updateContact";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{headerShown: false}} />
				<Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{headerShown: false}} />
				<Stack.Screen name={MenuUrl.CREATE_USER} component={CreateUser} options={{title: 'Criar usuário'}} />
				<Stack.Screen name={MenuUrl.CREATE_CONTACT} component={CreateContact} options={{title: 'Criar registro'}} />
				<Stack.Screen name={MenuUrl.UPDATE_CONTACT} component={UpdateContact} options={{title: 'Editar registro'}} />
				<Stack.Screen name={MenuUrl.HOME} component={Home} options={{title: 'Meus Registros'}} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation;