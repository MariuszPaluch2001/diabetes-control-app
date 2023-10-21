export function getToken() {
  const token = localStorage.getItem('currentUser');
  return token ? JSON.parse(token).token : '';
}
