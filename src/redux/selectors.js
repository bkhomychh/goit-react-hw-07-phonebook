const getContacts = state => state.contacts.items;
const getIsLoading = state => state.contacts.isLoading;

const getFilter = state => state.filter;

export { getContacts, getIsLoading, getFilter };
