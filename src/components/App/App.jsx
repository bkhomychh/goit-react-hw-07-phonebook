import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Container, Title, Heading } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </Container>
  );
};
