// Hard coded credentials for demo of application
export const credentials = {
  username: 'hackthenorth',
  password: 'frontendchallenge',
};

/**
 * Determines whether user input matches credentials
 * @param username input of username
 * @param password input of password
 */
export default function isCorrectLogin(username: string, password: string) {
  return username === credentials.username && password === credentials.password;
}
