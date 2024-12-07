(()=>{

  function hi(name: string | null) {
    let hello = 'Hello ';
    // hello += name === null ? name : name.toUpperCase();
    // hello += name?.toUpperCase() || 'No name';
    hello += name?.toUpperCase() ?? 'No name';
    console.log(hello);
  }

  hi('Luis');
  hi(null);
}
)();