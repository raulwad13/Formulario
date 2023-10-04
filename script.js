document.getElementById("formulario").addEventListener;
    ("submit",function (event){
    event.prevenDefault();
    console.log("Hemos recibido tu registro");
    console.log(event);

    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const edad = event.target.edad.value;
    const sexo = event.target.sexo.value; //select
    const email = event.target.email.value;
    const password = event.target.password.value;

    let msj = " ";

    if (fname.length < 3 || fname.length > 30) {
      console.log("Apellido fuera de tamaño: 3-30");
      msj += "Nombre fuera de tamaño: 3-30";
    }

    if (lname.length < 3 || lname.length > 30) {
      console.log("Nombre fuera de tamaño: 3-30");
      msj += "Apellido fuera de tamaño: 3-30";
    }
    if (edad.length < 0 || edad.length > 4) {
      console.log("Nombre fuera de tamaño: 1-4");
      msj += "Apellido fuera de tamaño: 1-4";
    }

    if (
      !email.endsWith(".com") &&
      !email.endsWith(".es") &&
      email.includes("@")
    ) {
      console.log("Error de validación:" + email);
      msj += "Error validacion" + email;
    }

    if (sexo == " ") {
      console.log("Selecciona un sexo");
      msj += "Seleccione un sexo";
    }

    if (msj.length != 0) {
      alert(msj);
      document.body.innerHTML += msj;

      let mensaje = document.createTextNode(msj);
      let parrafo = document.createElement("pre");
      parrafo.style.color = "#DD1C1A";
      parrafo.style.fontSize = "8px";
      parrafo.appendChild(mensaje);

      document.getElementById("contact").appendChild(parrafo); //Dibuja resultado
    }
  })
