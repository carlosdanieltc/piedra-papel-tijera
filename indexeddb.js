let bd;

export function StartDataBase(){

    let request = indexedDB.open("Data-Users");

    request.addEventListener("error", ShowError);
    request.addEventListener("success",Start);
    request.addEventListener("upgradeneeded",CreateDataUsers);
}

let ShowError = (event) => {
    alert("Error" + event.code + "/" + event.message); 
}

let Start =  (event) => {
    bd = event.target.result;
}

let CreateDataUsers = (event) => {
    let database = event.target.result;
    let warehouse = database.createObjectStore("Users",{keyPath: "user"});
    warehouse.createIndex("userPoints","points",{unique: false});
}

export function ValidateUser(userName) {
    return new Promise((resolve, reject) => {
      let transaction = bd.transaction(["Users"], "readwrite");
      let myWarehouse = transaction.objectStore("Users");
  
      const request = myWarehouse.get(userName);
  
      request.onsuccess = function (event) {
        const user = event.target.result;
        if (user) {
          console.log("EXISTE");
          console.log("DESDE ValidateUser PUNTOS:" + user.points);
          resolve(user.points); // Resuelve la promesa con los puntos del usuario
        } else {
          console.log("NO EXISTE LO AÑADO");
          myWarehouse.add({
            user: userName,
            points: 0
          });
          resolve(0); // Resuelve la promesa con 0 puntos (usuario recién agregado)
        }
      };
  
      request.onerror = function (event) {
        console.error("Error al buscar el usuario:", event.target.error);
        reject(event.target.error); // Rechaza la promesa en caso de error
      };
    });
  }

export function ChangesInGame(userName, points){
    let transaction = bd.transaction(["Users"], "readwrite");
    let myWarehouse = transaction.objectStore("Users");

    console.log("HOLA DESDE ChangesInGame "+userName+" Puntos: "+points);
    const request = myWarehouse.get(userName);

    request.onsuccess = function (event) {
        const user = event.target.result;
        if (user) {
            user.points = points
            myWarehouse.put(user);
        }
    };
}

// export function ChargePoints(userName){
//     let transaction = bd.transaction(["Users"], "readonly");
//     let myWarehouse = transaction.objectStore("Users");

//     console.log("HOLA DESDE ChargePoints");
//     const request = myWarehouse.get(userName);

//     request.onsuccess = function (event) {
//         const user = event.target.result;
//         if (user) {
//             return user.points;
//         }
//     };
// }


