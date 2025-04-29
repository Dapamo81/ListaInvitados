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