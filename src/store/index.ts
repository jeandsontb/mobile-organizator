import { configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/userReducer'
import globalReducer from './reducers/globalReducer'
import contactReducer from './reducers/contactReducer';

export const store = configureStore({
  reducer: {
    globalReducer,
    contactReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;