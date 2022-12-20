let app = document.getElementById('typewriter');


let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});


typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #668DC0;">Estudiante de Ingeniería y <strong>Desarrollo Sitios Web</strong>.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
