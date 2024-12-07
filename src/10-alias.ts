(()=>{
    // Alias para tipos de datos
    type UserId = string | number;
    let userId: UserId;
    function getUserNameById(userId: UserId){
      if (typeof userId === 'string') {
        let myId = userId.toUpperCase();
        return `My name is: ${myId}`;
      } else {
        let myId = userId.toFixed(2);
        return `My identification is: ${myId}`;
      }
    }

    //Literal types
    type Role = 'admin' | 'user';
    let role: Role;
    role = 'admin';
    console.log('role:', role);
    // role = 'moderator'; // Error: Type '"moderator"' is not assignable to type 'Role'.
    role = 'moderator' as Role; // Sin error
    console.log('role:', role);
    role = 'user';
    console.log('role:', role);

  }
)();