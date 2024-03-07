// eslint-disable-next-line import/prefer-default-export
import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const expiration = localStorage.getItem('auth-expiration');

  if (!expiration) {
    return null;
  }

  const expirationDate = new Date(expiration);
  return expirationDate.getTime() - new Date().getTime();
}

export function getAuthToken() {
  const duration = getTokenDuration();

  if (!duration && duration < 0) {
    return 'EXPIRED';
  }

  return localStorage.getItem('auth-token');
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}
