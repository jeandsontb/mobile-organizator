import { Button } from "../../../shared/components/button";
import { FlatList, View } from "react-native";
import {  logout } from "../../../shared/functions/connection/auth";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_CONTACT } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/method.enums";
import { useContactReducer } from "../../../store/reducers/contactReducer/useContactReducer";
import { ContactType } from "../../../shared/types/contactType";

import S from '../styles/index';
import { ListContacts } from "../../../shared/components/list-contacts/ListContacts";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { Text } from "../../../shared/components/text";
import { textTypes } from "../../../shared/components/text/textTypes";

const Home = () => {
	const { request } = useRequest();
	const navigation = useNavigation<NavigationProp<ParamListBase>>();

	const { contacts, setContacts } = useContactReducer();

	const [contactList, setContactList] = useState<ContactType[]>()

	const handleNavigationCreateContact = () => {
		navigation.navigate(MenuUrl.CREATE_CONTACT)
	}

	useEffect(() => {
		request<ContactType[]>({
			url: URL_CONTACT,
			method: MethodEnum.GET,
			saveGlobal: setContacts,
		});
	}, []);

	useEffect(() => {
		if(contacts && contacts.length > 0) {
			setContactList(contacts)
		}
	}, [contacts])

    return (
		<View style={{flex: 1}}>
			<S.ContainerHomeHeader>
				<S.BoxButtonCreate>
					<Button  title="Criar Registro" onPress={handleNavigationCreateContact} fontSmal />
				</S.BoxButtonCreate>
				<S.BoxButtonLogout>
					<Button type="secondary"  title="Sair" onPress={() => logout(navigation)} fontSmal />
				</S.BoxButtonLogout>
			</S.ContainerHomeHeader>
			
			<S.BoxListContacts>
				{contactList && contactList.length > 0 && (
					<FlatList 
					data={contacts}
					renderItem={({item}) => <ListContacts contacts={item} contactsList={contactList} />}
					keyExtractor={(item, index) =>  `${index}`}
					showsVerticalScrollIndicator={false}
				/>
				)}

				{!contactList && (
					<S.BoxRegistersContacts>
						<Text type={textTypes.PARAGRAPH_REGULAR}>Sem registros no momento!</Text>
					</S.BoxRegistersContacts>
				)}
			</S.BoxListContacts>					
		</View>
    )
}

export default Home;