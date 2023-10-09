axios.defaults.baseURL = `https://65158033dc3282a6a3ce8612.mockapi.io/`;

console.log('hi');

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
