import axios from 'axios';
import qs from 'qs';

const apiAxios = axios.create({
  baseURL: 'https://golden-star.herokuapp.com/api',

});

const query = qs.stringify({
  sort: ['id:asc'],
  populate: {
    categories: {
      sort: ['id:asc'],
      populate: ['dishes', 'drinks'],
    },
  },
}, {
  encodeValuesOnly: true,
});

console.log('query: ', query);

const requestData = async () => {
  try {
    const response = await apiAxios(`/sections?${query}`);
    return response;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export default requestData;
