export const changeTextToString = (password) => {
    let encrypted = "";
  
    if (password.length > 0) {
      encrypted = password.replaceAll(/./g, "*");
    }
  
    return encrypted;
  };