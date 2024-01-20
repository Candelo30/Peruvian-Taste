  // Scroll and fixed header
  
  let scrollDownLink = document.querySelector('.scroll-down-link');
  let header = document.querySelector('.header');

  scrollDownLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
      });
  });

  window.addEventListener('scroll', function () {
      var scrollY = window.scrollY || document.documentElement.scrollTop;

      // Puedes ajustar la altura (por ejemplo, 200) para que el encabezado se fije
      if (scrollY > 680) {
          header.classList.add('fixed');
      } else {
          header.classList.remove('fixed');
      }
  });


  // Box and details contends

  let productContainer = document.getElementById('productContainer');
  let modal = document.getElementById('myModal');
  let modalImage = document.getElementById('modalImage');
  let modalTitle = document.getElementById('modalTitle');
  let modalDetails = document.getElementById('modalDetails');


  // Cargar productos desde el JSON
  fetch('./products.json')
      .then(response => response.json())
      .then(products => {
          // Llenar el contenedor de productos con las cajas
          products.forEach(product => {
              var productBox = createProductBox(product);
              productContainer.appendChild(productBox);
          });
      });
  function openModal(product) {
    modalImage.src = product.image;
    modalTitle.textContent = '' + product.name;
    function openModal(product) {
      
        document.getElementById('modalAlergias').classList.remove('active');
        document.getElementById('modalIngredientes').classList.remove('active');
        document.getElementById('modaldescriptions').classList.remove('active');
      }
      

      // Limpiar detalles anteriores y agregar los nuevos
    document.getElementById('modalAlergias').innerHTML = '';
    document.getElementById('modalIngredientes').innerHTML = '';
    document.getElementById('modaldescriptions').innerHTML = '';
    product.alergias.forEach(alergia => {
        var li = document.createElement('li');
        li.textContent = alergia;
        document.getElementById('modalAlergias').appendChild(li);
      });
  
      product.ingredientes.forEach(ingrediente => {
        var li = document.createElement('li');
        li.textContent = ingrediente;
        document.getElementById('modalIngredientes').appendChild(li);
      });
  
      product.Description.forEach(detalle => {
        var li = document.createElement('li');
        li.textContent = detalle;
        document.getElementById('modaldescriptions').appendChild(li);
      });

      modal.classList.add('modalOpen');
      document.body.style.overflow = 'hidden';
      // Calcular la posición vertical para centrar el modal
      const modalHeight = modal.clientHeight;
      const windowHeight = window.innerHeight;
      const topPosition = (windowHeight - modalHeight) / 2;

    // Centrar verticalmente el modal
    modal.style.top = topPosition + 'px';
  }

  window.openModal = openModal; // Hacer la función accesible desde el ámbito global

function createProductBox(product) {
  var productBox = document.createElement('div');
  productBox.className = 'product-box';
  productBox.onclick = function () {
      openModal(product);
  };

  var productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;

  var productName = document.createElement('h3');
  productName.textContent = product.name;

  productBox.appendChild(productImage);
  productBox.appendChild(productName);

  return productBox;
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.classList.remove('modalOpen');

  // Restaurar el overflow en el body
  document.body.style.overflow = 'auto';
}

function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  var otherSections = document.querySelectorAll('.details-list');
  
  otherSections.forEach(otherSection => {
    if (otherSection.id !== sectionId) {
      otherSection.classList.remove('active');
    }
  });

  section.classList.toggle('active');
}

  
