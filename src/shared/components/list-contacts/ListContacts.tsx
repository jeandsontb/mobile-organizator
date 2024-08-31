import { TouchableOpacity } from 'react-native';
import { ContactType } from '../../types/contactType';
import { Text } from '../text';
import S from './styles';
import { Icon } from '../icon/icon';
import { useState } from 'react';
import { textTypes } from '../text/textTypes';
import { formatPhoneNumber } from '../../functions/utils/maskPhone';
import { theme } from '../../theme/theme';
import { useRequest } from '../../hooks/useRequest';
import { URL_CONTACT } from '../../constants/urls';
import { MethodEnum } from '../../../enums/method.enums';
import { useContactReducer } from '../../../store/reducers/contactReducer/useContactReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../enums/MenuUrl.enum';

interface ContactsProps {
    contacts: ContactType;
    contactsList: ContactType[];
}

const ListContacts = ({contacts, contactsList}: ContactsProps) => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const { request } = useRequest();
    const [isOpen, setIsOpen] = useState(false);    

    const { setContacts } = useContactReducer();

    const handleOpenDetails = (id: number) => {
        setIsOpen(!isOpen)
    }

    const handleEditRegister = () => {
        navigation.navigate(MenuUrl.UPDATE_CONTACT, {contacts});
    }

    const handleRemoveRegister = async (id: number) => {
        try {
            await request<ContactType[]>({
                url: `${URL_CONTACT}/${id}`,
                method: MethodEnum.DELETE,
            });
    
            const updateContacts = contactsList.filter((item) => item.id !== id);
            setContacts(updateContacts);
            
        } catch (error) {}
    }

    if(!contacts) {
        return null;
    } else {
        return (
            <S.BoxContainer>
                <TouchableOpacity onPress={() => handleOpenDetails(contacts.id)}>
                    <S.ContainerListContact >
                        <Text type={textTypes.SUB_TITLE_MEDIUM}>{contacts.firstName}</Text>
    
                            {isOpen && (
                                <Icon name='arrow-up' />
                            )}
                            
                            {!isOpen && (
                                <Icon name='arrow-down' />
                            )}
                    </S.ContainerListContact>
                </TouchableOpacity>
    
                <S.ContainerDetailsContact $isOpen={isOpen}>
                    <Text>Nome: {`${contacts.firstName} ${contacts.lastName}`}</Text>
                    <Text>E-mail: {contacts.email}</Text>
                    <Text>Telefone: {formatPhoneNumber(contacts.phone)}</Text>
                    <Text>Endereço: {contacts.address}</Text>
                    <Text>Data: {contacts.date_birth}</Text>
    
                    <S.BoxButtons $isOpen={isOpen}>
                        <S.BoxButtonEdit>
                            <TouchableOpacity onPress={handleEditRegister}>
                                <Icon name='pencil' color={theme.colors.neutralTheme.white}/>
                            </TouchableOpacity>
                        </S.BoxButtonEdit>
    
                        <S.BoxButtonRemove>
                            <TouchableOpacity onPress={() => handleRemoveRegister(contacts.id)}>
                                <Icon name='bin2' color={theme.colors.neutralTheme.white}/>
                            </TouchableOpacity>
                        </S.BoxButtonRemove>
                    </S.BoxButtons>
                </S.ContainerDetailsContact>            
            </S.BoxContainer>
        )
    }
}

export {ListContacts};