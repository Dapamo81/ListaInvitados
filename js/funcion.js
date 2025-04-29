let invitados=[ "Juan", "Maria", "Roberto", "Luis", "Ana"];

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

function quitar(){
    const indexRoberto = invitados.indexOf("Roberto");
    if(indexRoberto !== -1){
        invitados.splice(indexRoberto,1);
        alert("Roberto no pued venir, se elimina de la lista");
    }else{
        alert('Roberto no esta en la lista');
    }
}

function añadir(){
    const nuevos =["Juan", "Rafa", "Anais", "Lis"];
    invitados = invitados.concat(nuevos);
    alert("Se han añadido invitados de la fiesta de al lado.");
    mostrarLista();
}