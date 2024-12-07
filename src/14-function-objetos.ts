
type User = {
  user: string;
  password: string;
};



const login = (data: User) => {
  if (data.user === 'admin' && data.password === 'admin') {
    return true;
  }
  return false;
};

const result = login({ user: 'admin', password: 'admin' });
console.log(result); // true
