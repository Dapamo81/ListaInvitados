let invitados=["Juan", "Maria", "Roberto", "Luis", "Ana"];

function mostrarLista(){
    const listaDiv = document.getElementById("listaInvitados");
    if(invitados.lenght === 0){
        listaDiv.innerHTML= "No hay invitados en la lista";
    }else{
        listaDiv.innerHTML= invitados.join("<br>");
    }
}