// Validación en el navegador: práctica de JavaScript, sin backend.
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = formulario.elements.nombre.value.trim();
  const apellidos = formulario.elements.apellidos.value.trim();
  const edad = Number(formulario.elements.edad.value);
  const email = formulario.elements.email.value.trim();
  const password = formulario.elements.password.value;
  const confirmar = formulario.elements.password2.value;
  const errores = [];

  if (nombre.length < 3) errores.push("El nombre debe tener al menos 3 caracteres.");
  if (apellidos.length < 3) errores.push("Los apellidos deben tener al menos 3 caracteres.");
  if (!Number.isInteger(edad) || edad < 1 || edad > 120) errores.push("Introduce una edad válida.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errores.push("Introduce un correo válido.");
  if (password.length < 8) errores.push("La contraseña debe tener al menos 8 caracteres.");
  if (password !== confirmar) errores.push("Las contraseñas no coinciden.");

  resultado.className = errores.length ? "error" : "ok";
  resultado.textContent = errores.length
    ? errores.join(" ")
    : "¡Formulario validado! Este ejercicio no guarda ni envía los datos.";
});
