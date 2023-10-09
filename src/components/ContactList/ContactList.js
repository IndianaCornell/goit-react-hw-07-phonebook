import { deleteContact } from 'redux/contactsSlice';
import { ItemsList, StyledItem, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ItemsList>
      {visibleContacts.map(contact => (
        <StyledItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteButton>
        </StyledItem>
      ))}
    </ItemsList>
  );
};
