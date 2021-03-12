export const credentials = {
  username: 'hackthenorth',
  password: 'frontendchallenge',
};

export default function isCorrectLogin(username: string, password: string) {
  return username === credentials.username && password === credentials.password;
}
