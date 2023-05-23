import React from 'react';
import { FormContaks } from './form/FormContaks';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

export const App = () => {
  console.log('проверка');
  return (
    <>
      <h2>Phonebook</h2>
      <FormContaks />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
