import { useDispatch } from "react-redux";
import { ContactType } from "../../../shared/types/contactType";
import { useAppSelector } from "../../hooks"
import { setContactAction } from ".";

export const useContactReducer = () => {
    const dispatch = useDispatch();
    const { contacts } = useAppSelector((state) => state.contactReducer);

    const setContacts = (currentContacts: ContactType[]) => {
        dispatch(setContactAction(currentContacts));
    }

    return {
        contacts,
        setContacts,
    };
};