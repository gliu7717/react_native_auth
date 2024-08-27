import axios from 'axios';

const API_KEY = 'AIzaSyBjsUDyi6QbJ6v3v3tXji1fSAzK4wuf5I4'

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );
}