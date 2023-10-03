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

export function ValidateUser(userName){
    let transaction = bd.transaction(["Users"], "readwrite");
    let myWarehouse = transaction.objectStore("Users");

    const request = myWarehouse.get(userName);

    request.onsuccess = function (event) {
        const user = event.target.result;
        if (user) {
            console.log("EXISTE");
            console.log(user.points);
        } else {
            console.log("NO EXISTE LO AÑADO");
            myWarehouse.add({
                user: userName,
                points: 0
            });
        }
    };

    request.onerror = function (event) {
        console.error("Error al buscar el usuario:", event.target.error);
    };
}


