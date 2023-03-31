import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Contact } from 'components/Contact';

import { StyledList } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact id={id} name={name} phone={phone} key={id} />
      ))}
    </StyledList>
  );
};
