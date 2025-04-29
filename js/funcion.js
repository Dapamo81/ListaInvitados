let invitados=["Juan", "Maria", "Roberto", "Luis", "Ana"];

function mostrarLista(){
    const listaDiv = document.getElementById("listaInvitados");
    if(invitados.lenght === 0){
        listaDiv.innerHTML= "No hay invitados en la lista";
    }else{
        listaDiv.innerHTML= invitados.join("<br>");
    }
}

function agregar(){
    invitados.push("Juani");
    invitados.push("Alex");

    alert("Juani y alex Se han añadido a la lista");
    mostrarLista();
}

function colar(){
    if(invitados.length >=3){
        invitados.splice(2, 0, "Marta");
        alert("Marta ha sido colada en la lista la 3ª");
    }else{
        invitado.push("Marta");
        alert("Se Ha añadido Marta a la lista");
    }
    mostrarLista();
}