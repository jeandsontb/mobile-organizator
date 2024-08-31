import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../../shared/types/userType'
import { ContactType } from '../../../shared/types/contactType';

interface ContactStore {
	contacts: ContactType[];
}

const initialState: ContactStore = {
	contacts: [],
}

export const contactSlice = createSlice({
  name: 'contactReducer',
  initialState,
  reducers: {
    setContactAction: (state, action: PayloadAction<ContactType[]>) => {
      state.contacts = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setContactAction } = contactSlice.actions

export default contactSlice.reducer