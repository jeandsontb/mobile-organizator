import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../../shared/types/userType'

interface UserStore {
	user?: UserType;
}

const initialState: UserStore = {
	user: undefined,
}

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserAction } = userSlice.actions

export default userSlice.reducer