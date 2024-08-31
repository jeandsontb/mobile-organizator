import { useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_CONTACT } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/method.enums";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { validateEmail } from "../../../shared/functions/email";
import { maskPhone, validatePhone } from "../../../shared/functions/phone";
import { maskInDate } from "../../../shared/functions/date";
import { UpdateContactType } from "../../../shared/types/updateContactType";

export const useUpdateContact = () => {
    const {request, loading} = useRequest();
    const {reset} = useNavigation<NavigationProp<ParamListBase>>();
    const [disabled, setDisabled] = useState<boolean>(true);
    const [updateContact, setUpdateContact] = useState<UpdateContactType>();

    useEffect(() => { 
        if(
            updateContact &&
            updateContact?.firstName !== '' &&
            validateEmail(updateContact.email) &&
            validatePhone(updateContact.phone) &&            
            updateContact?.email !== '' &&
            updateContact?.address !== '' &&
            updateContact?.date_birth !== '' &&
            updateContact?.phone !== '' &&
            updateContact?.firstName !== '' &&
            updateContact?.lastName !== '' 
        ) {
            setDisabled(false)
        } else {
            setDisabled(true);
        }
    }, [updateContact])

    const handleUpdateContact = async () => {
        const result = await request({
            url: `${URL_CONTACT}`,
            method: MethodEnum.PUT,
            body: updateContact,
            message: 'Registro atualizado com sucesso'
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

        setUpdateContact((currentUpdateContact = {} as UpdateContactType) => ({
            ...currentUpdateContact,
            [name]: text,
        }));
    }

    return {
        updateContact,
        handleOnChangeInput,
        handleUpdateContact,
        setUpdateContact,
        loading,
        disabled
    }
};