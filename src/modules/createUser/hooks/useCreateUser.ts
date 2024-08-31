import { useEffect, useState } from "react"
import { CreateUserType } from "../../../shared/types/createUserType";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_USER_CREATE } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/method.enums";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { validateEmail } from "../../../shared/functions/email";

export const useCreateUser = () => {
    const {request, loading} = useRequest();
    const {reset} = useNavigation<NavigationProp<ParamListBase>>();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [createUser, setCreateUser] = useState<CreateUserType>({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => { 
        if(
            createUser.name !== '' &&
            validateEmail(createUser.email) &&
            createUser.email !== '' &&
            createUser.password !== '' 
        ) {
            setDisabled(false)
        } else {
            setDisabled(true);
        }
    }, [createUser])

    const handleCreateUser = async () => {
        const result = await request({
            url: URL_USER_CREATE,
            method: MethodEnum.POST,
            body: createUser,
            message: 'Usuário cadastrado com sucesso'
        })

        if(result) {
            reset({
                index: 0,
                routes: [{ name: MenuUrl.LOGIN }]
            })
        }
    }

    const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>, name: string) => {
        const text = event?.nativeEvent?.text ?? ''; // Usando ?? para garantir que text seja uma string
        setCreateUser((currentCreateUser) => ({
            ...currentCreateUser,
            [name]: text,
        }));
    }

    return {
        createUser,
        handleOnChangeInput,
        handleCreateUser,
        loading,
        disabled
    }
};