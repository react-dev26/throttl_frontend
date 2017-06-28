import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import Auth0Lock from 'auth0-lock';

const ID_TOKEN_KEY = 'id_token';
const options = {
  theme: {
    logo: 'http://res.cloudinary.com/hvvy4ktte/image/upload/v1491419276/blackhelmet-transparentBG_udktfv.png',
  },
};

// hack for passing the test
// global.location = global.location || {};
const lock = new Auth0Lock('UK7S3UC7jTh2EBiQAlN19jRzsFyw33h2', 'app61363140.auth0.com', options, {
  auth: {
    redirectUrl: 'https://throttl-frontend.herokuapp.com',
    responseType: 'token',
  },
});

function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

lock.on('authenticated', (authResult) => {
  setIdToken(authResult.idToken);
  browserHistory.push('/signUp');
});

export function login() {
  lock.show(options);

  return {
    hide() {
      lock.hide();
    },
  };
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

export function logout() {
  clearIdToken();
  browserHistory.replace('/');
}

function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}
function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}
export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({ pathname: '/' });
  }
}
