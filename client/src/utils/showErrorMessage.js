import Alert from 'react-s-alert';

const showErrorMessage = (error) => {
  const res = error.response;
  if (!res) {
    return null;
  }
  if (typeof res.data === 'string') {
    return Alert.error(res.data);
  }
  if (res.data.errors) {
    const { errors } = res.data;
    return Object.keys(errors).forEach(field => Alert.error(errors[field].msg));
  }
  return Alert.error('Unknown error on server');
};

export default showErrorMessage;
