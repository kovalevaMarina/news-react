import moment from 'moment';

const formatDate = (date) => {
  return moment(date, 'DD-MM-YYYY').format('MMMM Do YYYY');
};

export { formatDate };
