(()=>{
    // Unión de tipos
    let userId: string | number;
    userId = 123;
    console.log('userId:', userId);
    userId = '456';
    console.log('userId:', userId);

    function getUserNameById(id: string | number){
      if(typeof id === 'string'){
        let myId = id.toUpperCase();
        return `My name is: ${myId}`;
      }else{
       let myId = id.toFixed(2);
        return `My identification is: ${myId}`;
      }
    }

    console.log('getUserNameById:', getUserNameById(123));
    console.log('getUserNameById:', getUserNameById('456'));

  }
)();