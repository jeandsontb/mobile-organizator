import { useEffect, useRef } from 'react';
import { Input } from '../../../shared/components/input/input';
import S from '../styles/index';
import { ScrollView, TextInput } from 'react-native';
import { Button } from '../../../shared/components/button';
import { useCreateContact } from '../../createContact/hooks/useCreateContact';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ContactType } from '../../../shared/types/contactType';
import { useUpdateContact } from '../../createContact/hooks/useUpdateContact';

interface ContactParams {
    contacts: ContactType
}

const UpdateContact = () => {
    const {params} = useRoute<RouteProp<Record<string, ContactParams>>>();
    const {contacts} = params;
    const { updateContact, loading, handleOnChangeInput, handleUpdateContact, setUpdateContact, disabled } = useUpdateContact();

    const lastNameInputRef = useRef<TextInput>(null);
    const emailInputRef = useRef<TextInput>(null);
    const phoneInputRef = useRef<TextInput>(null);
    const dateBirthInputRef = useRef<TextInput>(null);
    const addressInputRef = useRef<TextInput>(null);

    useEffect(() => {
        if(contacts) {
            setUpdateContact(contacts);
        }
    }, [contacts]);

    return (
        <S.ContainerUpdateContact>
           <ScrollView>
                <Input 
                    value={updateContact?.firstName} 
                    onChange={(event) => handleOnChangeInput(event, 'firstName')}
                    placeholder="Primeiro Nome" 
                    title="Primeiro nome" 
                    margin="16px 0px 16px 0px" 
                    onSubmitEditing={() => lastNameInputRef.current?.focus()}
                />
                <Input 
                    value={updateContact?.lastName} 
                    onChange={(event) => handleOnChangeInput(event, 'lastName')}
                    placeholder="Sobrenome" 
                    title="Sobrenome" 
                    margin="0px 0px 16px 0px"
                    ref={lastNameInputRef}                
                    onSubmitEditing={() => emailInputRef.current?.focus()}               
                />
                <Input
                    value={updateContact?.email} 
                    onChange={(event) => handleOnChangeInput(event, 'email')}
                    placeholder="E-mail" 
                    title="E-mail" 
                    margin="0px 0px 16px 0px"
                    ref={emailInputRef}
                    onSubmitEditing={() => phoneInputRef.current?.focus()} 
                    keyboardType="email-address"
                />
                <Input
                    value={updateContact?.phone} 
                    onChange={(event) => handleOnChangeInput(event, 'phone')}
                    placeholder="Celular" 
                    title="Celular" 
                    margin="0px 0px 16px 0px"
                    ref={phoneInputRef}
                    onSubmitEditing={() => dateBirthInputRef.current?.focus()} 
                    keyboardType='numeric'
                />
                <Input
                    value={updateContact?.date_birth} 
                    onChange={(event) => handleOnChangeInput(event, 'date_birth')}
                    placeholder="Data de nascimento" 
                    title="Data de nascimento" 
                    margin="0px 0px 16px 0px"
                    ref={dateBirthInputRef}
                    onSubmitEditing={() => addressInputRef.current?.focus()}
                    keyboardType='numeric' 
                />
                <Input
                    value={updateContact?.address} 
                    onChange={(event) => handleOnChangeInput(event, 'address')}
                    placeholder="Endereço" 
                    title="Endereço" 
                    margin="0px 0px 16px 0px"
                    ref={addressInputRef}
                />
                <Button 
                    title="Atualizar registro" 
                    margin="0px 0px 32px 0px" 
                    onPress={handleUpdateContact}
                    loading={loading} 
                    disabled={disabled}
                />
           </ScrollView>
        </S.ContainerUpdateContact>
    )
}

export default UpdateContact;

