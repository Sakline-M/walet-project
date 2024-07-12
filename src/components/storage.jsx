const setDataToLocalStorage = (data) => {
     const oldData = localStorage.getItem("client")
     if (oldData) {
        localStorage.removeItem("client")
        localStorage.setItem("client",JSON.stringify(data))
     }else{
        localStorage.setItem("client",JSON.stringify(data))
     }
  };
  
  export default setDataToLocalStorage;