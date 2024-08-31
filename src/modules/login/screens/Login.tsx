import S from '../styles/login.styles'
import { Input } from "../../../shared/components/input/input";
import { theme } from "../../../shared/theme/theme";
import { Button } from "../../../shared/components/button";
import { useLogin } from "../hooks/useLogin";
import { Text } from '../../../shared/components/text';
import { TextInput, TouchableOpacity } from 'react-native';
import { textTypes } from '../../../shared/components/text/textTypes';
import { useRef } from 'react';

const Login = () => {
	const passwordInputRef = useRef<TextInput>(null);

	const {
		email,
		password,
		loading,
		errorMessage,
		handleOnPress,
		handleOnChangeEmail,
		handleOnChangePassword,
		handleGoToCreateUser,
		disabled
	} = useLogin();

	return (
		<S.Container>

		<S.ImageLogo source={require('../../../assets/images/logo.jpg')} />

		<Input
			placeholder="Digite seu E-mail"
			placeholderTextColor={theme.colors.grayTheme.gray80}
			value={email}
			errorMessage={errorMessage}
			title="E-mail"
			margin="0px 0px 8px 0px"
			onChange={handleOnChangeEmail}
			onSubmitEditing={() => passwordInputRef.current?.focus()}
		/>

		<Input
			placeholder="Digite sua senha"
			placeholderTextColor={theme.colors.grayTheme.gray80}
			errorMessage={errorMessage}
			value={password}
			secureTextEntry
			onChange={handleOnChangePassword}
			ref={passwordInputRef}  
			title="Senha"
		/>

		<TouchableOpacity onPress={handleGoToCreateUser}>
			<Text margin='16px' type={textTypes.PARAGRAPH_SEMIBOLD} color={theme.colors.mainTheme.primary}>Cadastrar usuário</Text>
		</TouchableOpacity>

		<Button
			type={theme.buttons.buttonsTheme.primary}
			loading={loading}
			disabled={disabled}
			title="ENTRAR"
			margin="8px"
			onPress={handleOnPress}
		/>

		
		</S.Container>
	)
}

export default Login;