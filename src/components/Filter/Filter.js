import { useDispatch } from 'react-redux';

import { filteredContacts } from 'redux/filterSlice';

import { FilterTitle, FilterInputStyled } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInputStyled
        type="text"
        onChange={evt => {
          dispatch(filteredContacts(evt.target.value));
        }}
      />
    </>
  );
};
