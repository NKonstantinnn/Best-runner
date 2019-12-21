export const apiUrl = '/api/v1';

export const getAuthParams = () => ({
  headers: {
    Authorization: localStorage.getItem('bestrunnerToken'),
  },
});
