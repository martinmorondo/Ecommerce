const stockOfProducts = [
    {
      id: 1,
      name: "Crash Bandicoot",
      quantity: 1,
      description: "Juego plataformero, niveles dificiles",
      price: 1200,
      img: "img/Crash.jpg",
    },
    {
      id: 2,
      name: "Mortal Kombat X",
      quantity: 1,
      description: "Luchas con los mejores graficos",
      price: 1500,
      img: "img/mortal.jpg",
    },
    {
      id: 3,
      name: "Pac Man",
      quantity: 1,
      description: "Juego plataformero, niveles basicos",
      price: 1570,
      img: "img/pacman.jpg",
    },
    {
      id: 4,
      name: "Dragon Ball Xenoverse",
      quantity: 1,
      description: "Vive la experiencia dragon ball",
      price: 1000,
      img: "img/dragonball.jpg",
    },
    {
      id: 5,
      name: "Naruto Ninja Storm 4",
      quantity: 1,
      description: "La historia de Naruto",
      price: 1200,
      img: "img/naruto.jpg",
    },
    {
      id: 6,
      name: "Shingeki Final Attack",
      quantity: 1,
      description: "Eren Jeager vuelve en formato gamer...",
      price: 1200,
      img: "img/shingeki.jpg",
    },
    {
      id: 7,
      name: "League of Legends",
      quantity: 1,
      description: "No compres esto por tu bien",
      price: 1400,
      img: "img/league.jpg",
    },
    {
      id: 8,
      name: "Call Of Duty Warzone",
      quantity: 1,
      description: "Dispara como nunca",
      price: 1200,
      img: "img/callduty.jpg",
    },
    {
      id: 9,
      name: "Fifa 2019",
      quantity: 1,
      description: "Juego de futbol",
      price: 1400,
      img: "img/fifa.jpg",
    },
    {
      id: 10,
      name: "Fornite",
      quantity: 1,
      description: "Battle Royale",
      price: 1200,
      img: "img/fornite.jpg",
    },
  ];

  let cart = [];

const container = document.querySelector('#container');
const containerCart = document.querySelector('#containerCart');
const emptyCart = document.querySelector('#emptyCart');
const totalPrice = document.querySelector('#totalPrice');
const processPurchase = document.querySelector('#processPurchase');
const activateFunction = document.querySelector('#activateFunction');
const totalProcess = document.querySelector('#totalProcess');
const form = document.querySelector('#process-payment');

if (activateFunction) {
activateFunction.addEventListener('click', processOrder);
}

if (form) {
  form.addEventListener('submit', sendOrder);
}

// When the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    showCart();

    if (activateFunction) {
      document.querySelector('#activateFunction').click(processOrder);
    } 
})

stockOfProducts.forEach((product) => {
    const {id, name, quantity, description, price, img} = product;
    // console.log(name);
    container.innerHTML +=  `  
    <div class="card" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Price: ${price}</p>
      <p class="card-text">Description: ${description}</p>
      <p class="card-text">Quantity: ${quantity}</p>
      <button onclick = "addProduct(${id})" class="btn btn-primary">Add to cart</button>
    </div>
  </div>
    ` 
});

if (processPurchase) {
  processPurchase.addEventListener('click', () => {
    if (cart.length === 0) {
        Swal.fire({
            title: "¡Your cart is empty!",
            text: "Buy something to continue with the purchase.",
            icon: "error",
            confirmButtonText: "Accept",
          });
        } else {
          location.href = "compra.html";
          processOrder();
        }
      });
}

    
if (emptyCart) {
  emptyCart.addEventListener('click', () => {
    cart.length = [];
    showCart();
})
}

function addProduct(id) {
    // console.log(id);

    const exist = cart.some(product => product.id === id);
    if(exist) {
        const prod = cart.map(prod => {
            if(prod.id === id) {
                prod.quantity++;
            }
        })
    } else {
        const item = stockOfProducts.find((product) => product.id === id);
        cart.push(item);
        // console.log(cart);
        // console.log(item);
    }
    showCart();
}

const showCart = () => {
    const modalBody = document.querySelector('.modal .modal-body');

    if (modalBody) {
      modalBody.innerHTML = '';
    // console.log(modalBody);
    cart.forEach((product) => {
        const {id, name, quantity, description, price, img} = product;
        modalBody.innerHTML += `
            <div class = "modal-container">
                <div>
                    <img class = "img-fluid img-cart" src = "${img}"/>
                </div>

                <div>
                <p>Product: ${name}</p>
                <p>Product: ${price}</p>
                <p>Product: ${quantity}</p>
                <p>Product: ${name}</p>

                <button onclick = "deleteProduct(${id}) " class = "btn btn-danger">Delete product</button>
                </div>
            </div>
        `
    })
    }
    
    if (cart.length === 0) {
        // console.log('There is nothing');
        modalBody.innerHTML = `
            <p class = "text-primary text-center paragraph">You haven't added anything yet!</p>
        `
    } else {
        console.log('Something');
    }

    containerCart.textContent = cart.length;

    if (totalPrice) {
      totalPrice.textContent = cart.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0); // The accumulator starts at zero
  }
      saveStorage();
    }
   
function deleteProduct(id) {
    // console.log(id);
    const gameId = id;
    cart = cart.filter((game) => game.id !== gameId);
    // console.log(cart);
    showCart();
}

function saveStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function processOrder() {
    cart.forEach((product) => {
      const purchaseList = document.querySelector('#purchase-list tbody');
      const {name, quantity, price, img} = product;

      const row = document.createElement('tr');
      row.innerHTML += `
        <td>
          <img class = "img-fluid img-cart" src = "${img}">
        </td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${price * quantity}</td>
      `
      purchaseList.appendChild(row);
    })

    totalProcess.innerText = cart.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0);
}

function sendOrder(event) {
  event.preventDefault();
  // console.log('Sending...');
  const client = document.querySelector('#client').value;
   const email = document.querySelector('#email').value;
  // console.log(client);
  // console.log(mail);

  if (client === '' || email == '') {
    Swal.fire({
      title: "¡Debes completar tu email y nombre!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
  })
} else {
  // console.log('You passed the validation');
}


}
