let portVar = 8000;

if (process.env.REACT_APP_PRODUCTION) {
  portVar = 8001;
}

if (process.env.REACT_APP_NODE_ENV === 'production') {
  portVar = 8003;
}

if (process.env.REACT_APP_NODE_ENV === 'admin') {
  portVar = 8001;
}

let host = 'http://localhost';

const test = 1;

if (process.env.REACT_APP_CI) {
  host = 'http://glampings.kz';
}

if (process.env.REACT_APP_NODE_ENV === 'production') {
  host = 'https://glampings.kz';
}

if (process.env.REACT_APP_NODE_ENV === 'admin') {
  host = 'http://glampings.kz';
}

console.log(host + ':' + portVar);

export default {
  apiUrl: host + ':' + portVar,
};
