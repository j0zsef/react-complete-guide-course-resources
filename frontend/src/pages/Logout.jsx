import { redirect } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export function logoutAction() {
  localStorage.removeItem('auth-token');
  localStorage.removeItem('auth-expiration');
  return redirect('/');
}
