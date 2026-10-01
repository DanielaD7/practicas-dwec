//EJ1
  const precios = document.querySelectorAll("#productos span.precio");

  document.querySelector("#log").textContent =
    `Hay ${precios.length} precios listados`;

//EJ2
    var p1Inner = document.getElementById("p1").innerHTML;
    var p1Text = document.getElementById("p1").textContent;
//No son iguales 
    document.querySelector("#log").textContent += `\nEl innerHtml es: ${p1Inner}`;
    document.querySelector("#log").textContent += `\nEl textContent es: ${p1Text}`;

//EJ3

    const n2 = document.getElementById("n2");
    n2.textContent =  "Reposición completada. ¡Gracias por vuestra paciencia!";

//EJ4

    precios.forEach(precio => {
      const valor = Number(precio.textContent);
      precio.textContent = (valor + 0.10).toFixed(2);
    });

//EJ5

      const lista = document.getElementById("lista");

      const p4 = document.createElement("li");
      p4.textContent = "Tila ";


      var precioP4 = document.createElement("span");
      precioP4.className = "precio";
      precioP4.textContent = "2.20";

      p4.append(precioP4, " €");
      lista.append(p4);

//EJ6

      const destacado = document.createElement("li");
      destacado.innerHTML = 'Producto destacado <span class="precio">9.99</span> €';

      lista.firstElementChild.replaceWith(destacado);


//EJ7
      n2.remove();

//EJ8

      const alumnos = document.querySelectorAll('input[name="alumnos"]');

      alumnos.forEach(alumno => {
          alumno.checked = true;
      });

//EJ9
      const elementosLista = document.querySelectorAll("#lista li");
      var totalElementos =elementosLista.length;

      document.querySelector("#log").textContent += `\nHay un total de ${totalElementos} en la lista`;

