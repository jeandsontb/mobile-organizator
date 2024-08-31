import { useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { validateEmail } from "../../../shared/functions/email";

export const useLogin = () => {	
	const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [disabled, setDisabled] = useState<boolean>(true);
  	const {authRequest, errorMessage, loading, setErrorMessage} = useRequest();

	const handleOnPress = async () => {
		authRequest({
			email,
			password
		});
  };

  useEffect(() => { 
	if(
		email !== '' &&
		validateEmail(email) &&
		password !== '' 
	) {
		setDisabled(false)
	} else {
		setDisabled(true);
	}
}, [email, password])

	const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
		setErrorMessage('');
		setEmail(event.nativeEvent.text)
	}

	const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
		setErrorMessage('');
		setPassword(event.nativeEvent.text)
	}

	const handleGoToCreateUser = () => {
		navigate(MenuUrl.CREATE_USER)
	}

    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
		handleGoToCreateUser,
		disabled
    }
}