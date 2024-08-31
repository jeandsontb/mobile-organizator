import { useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_CONTACT } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/method.enums";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { validateEmail } from "../../../shared/functions/email";
import { CreateContactType } from "../../../shared/types/createContactType";
import { maskPhone, validatePhone } from "../../../shared/functions/phone";
import { maskInDate } from "../../../shared/functions/date";

export const useCreateContact = () => {
    const {request, loading} = useRequest();
    const {reset} = useNavigation<NavigationProp<ParamListBase>>();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [createContact, setCreateContact] = useState<CreateContactType>({
        firstName: '',
        lastName: '',
        address: '',
        date_birth: '',
        email: '',
        phone: '',
    });

    useEffect(() => { 
        if(
            createContact.firstName !== '' &&
            validateEmail(createContact.email) &&
            validatePhone(createContact.phone) &&            
            createContact.email !== '' &&
            createContact.address !== '' &&
            createContact.date_birth !== '' &&
            createContact.phone !== '' &&
            createContact.firstName !== '' &&
            createContact.lastName !== '' 
        ) {
            setDisabled(false)
        } else {
            setDisabled(true);
        }
    }, [createContact])

    const handleCreateContact = async () => {
        const result = await request({
            url: URL_CONTACT,
            method: MethodEnum.POST,
            body: createContact,
            message: 'Registro cadastrado com sucesso'
        })

        if(result) {
            reset({
                index: 0,
                routes: [{ name: MenuUrl.HOME }]
            })
        }
    }

    const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>, name: string) => {
        let text = event?.nativeEvent?.text ?? ''; // Usando ?? para garantir que text seja uma string

        switch(name) {
            case 'phone':
            text = maskPhone(text);
            break;
            case 'date_birth':
            text = maskInDate(text)
            break;
            default:
                text = event?.nativeEvent?.text ?? '';
                break;
        }

        setCreateContact((currentCreateContact) => ({
            ...currentCreateContact,
            [name]: text,
        }));
    }

    return {
        createContact,
        handleOnChangeInput,
        handleCreateContact,
        loading,
        disabled
    }
};