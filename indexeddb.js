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

let CreateDataUsers =  (event) => {
    let database = event.target.result;
    let warehouse = database.createObjectStore("Users",{keyPath: "user"});
    warehouse.createIndex("userPoints","points",{unique: false});
}

export function SaveUser(userName){
    let transaction = bd.transaction(["Users"], "readwrite");
    let myWarehouse = transaction.objectStore("Users");

    myWarehouse.add({
        user: userName,
        points: 0
    });
}

