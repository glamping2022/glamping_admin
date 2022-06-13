let portVar = 8000;
let host = 'http://localhost';


if (process.env.REACT_APP_CI) {
  host = 'http://glampings.kz';
  portVar = 8001;
}

// if (process.env.REACT_APP_NODE_ENV === 'production') {
//   host = 'https://glampings.kz';
//   portVar = 8003;
// }

console.log(host + ':' + portVar);

export default {
  apiUrl: host + ':' + portVar,
};