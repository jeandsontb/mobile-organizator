import { TextInput } from "react-native";
import { Input } from "../../../shared/components/input/input";
import { Button } from "../../../shared/components/button";

import S from '../styles/createUser.styles'
import { useCreateUser } from "../hooks/useCreateUser";
import { useRef } from "react";


const CreateUser = () => {
    const { createUser, loading, handleOnChangeInput, handleCreateUser, disabled  } = useCreateUser();

    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);

    return (
        <S.CreateUserContainer>
            <Input 
                value={createUser.name} 
                onChange={(event) => handleOnChangeInput(event, 'name')}
                placeholder="Digite" 
                title="Nome" 
                margin="16px 0px 16px 0px" 
                onSubmitEditing={() => emailInputRef.current?.focus()}
            />
            <Input 
                value={createUser.email} 
                onChange={(event) => handleOnChangeInput(event, 'email')}
                placeholder="Digite" 
                title="email" 
                margin="0px 0px 16px 0px" 
                ref={emailInputRef}                
                onSubmitEditing={() => passwordInputRef.current?.focus()}
                keyboardType="email-address"
            />
            <Input
                value={createUser.password} 
                onChange={(event) => handleOnChangeInput(event, 'password')}
                placeholder="Digite" 
                title="Senha" 
                margin="0px 0px 16px 0px"
                secureTextEntry
                ref={passwordInputRef}
            />
            <Button 
                title="Criar usuário" 
                margin="0px 0px 32px 0px" 
                onPress={handleCreateUser}
                loading={loading} 
                disabled={disabled}
            />
        </S.CreateUserContainer>
    )
}

export default CreateUser;