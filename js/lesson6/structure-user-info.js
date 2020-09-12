structureUserInfo = (role) => {
  return (name) => {
    return {
      role,
      name,
    };
  };
}

console.log(structureUserInfo('John')('Admin'));
console.log(structureUserInfo('Pete')('Staff'));