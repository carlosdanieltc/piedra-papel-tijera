let bd;

function StartDataBase(){
    console.log("HOLA");
    console.log(document.querySelector("#btn-save"));
    let btnRegister = document.querySelector("#btn-save");
    btnRegister.addEventListener("click", SaveUser)

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
    warehouse.createIndex("SearPoints","points",{unique: false});
    console.log("Function CreateDataUsers");
}

let SaveUser = () => {
    let n = document.getElementById("#userName").value;
    let p = parseInt(document.querySelector("#userPoints").value);

    let transaction = bd.transaction(["Users"], "readwrite");
    let myWarehouse = transaction.objectStore("Users");

    myWarehouse.add({
        name: n,
        points: p
    });

    document.querySelector("userName").value = "";
    document.querySelector("userPoints").value = 0;
}

window.addEventListener("load",StartDataBase);