import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Contact } from 'components/Contact';

import { StyledList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact id={id} name={name} number={number} key={id} />
      ))}
    </StyledList>
  );
};
