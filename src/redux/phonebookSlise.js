import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookInitialState = { contacts: [], filter: '' };

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    addContact(state, action) {
      console.log(state.contacts.findIndex);
      state.contacts.push(action.payload);
    },

    removeContact(state, action) {
      // return {
      //   ...state,
      //   contacts: state.contacts.filter(
      //     contact => contact.id !== action.payload.id
      //   ),
      // };

      const index = state.contacts.findIndex(
        item => item.id === action.payload.id
      );
      console.log(state.contacts.splice(index, 1));
      state.contacts.splice(index, 1);
    },

    filtredContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const { addContact, removeContact, filtredContacts } =
  phonebookSlice.actions;

export const phonebookReduser = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

// export const phonebookReduser = phonebookSlice.reducer;
