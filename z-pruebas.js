let object= {nombre: "Lionel", edad: 36};

let newUser= {
    id: 1,
    ... object,
    pais:'Argentina'
}

let masUser= {
    ...newUser,
    fechaDeNacimiento: '06-03-1985'
}
console.log(object);
console.log(newUser);
console.log(masUser);

