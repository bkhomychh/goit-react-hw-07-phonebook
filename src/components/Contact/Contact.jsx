import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { Item, Name, Number, DeleteBtn } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}: </Name>
      <Number>{number}</Number>
      <DeleteBtn
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
