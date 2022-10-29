const stockOfProducts = [
    {
      id: 1,
      name: "eFootball 2022",
      quantity: 1,
      description: "eFootball is an association football simulation video game developed and published by Konami.",
      price: 1200,
      img: "img/pes-2023.jpg",
    },
    {
      id: 2,
      name: "Fifa 2022",
      quantity: 1,
      description: "FIFA 22 is a football simulation video game published by Electronic Arts.",
      price: 2000,
      img: "img/fifa-2022.jpg",
    },
    {
      id: 3,
      name: "Battlefield V",
      quantity: 1,
      description: "Battlefield V is a first-person shooter game developed by DICE and published by Electronic Arts.",
      price: 1570,
      img: "img/battlefield.jpg",
    },
    {
      id: 4,
      name: "Grand Theft Auto V",
      quantity: 1,
      description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
      price: 3000,
      img: "img/gta-v.jpg",
    },
    {
      id: 5,
      name: "God of War",
      quantity: 1,
      description: "God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio.",
      price: 1200,
      img: "img/god-of-war.jpg",
    },
    {
      id: 6,
      name: "Uncharted 4: A Thief's End",
      quantity: 1,
      description: "Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment.",
      price: 1450,
      img: "img/uncharted.jpg",
    },
    {
      id: 7,
      name: "Fortnite",
      quantity: 1,
      description: "Fortnite is an online video game developed by Epic Games and released in 2017.",
      price: 1000,
      img: "img/fortnite.jpg",
    },
    {
      id: 8,
      name: "Call Of Duty Warzone",
      quantity: 1,
      description: "Call of Duty: Warzone is a free-to-play battle royale video game released on March 10, 2020, for PlayStation 4, Xbox One, and Microsoft Windows.",
      price: 1660,
      img: "img/callduty.jpg",
    },
    {
      id: 9,
      name: "Apex Legends",
      quantity: 1,
      description: "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts.",
      price: 1400,
      img: "img/apex.jpg",
    },
    {
      id: 10,
      name: "Minecraft",
      quantity: 1,
      description: "Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus 'Notch' Persson in the Java programming language.",
      price: 800,
      img: "img/minecraft.jpg",
    },
    {
      id: 11,
      name: "Gran Turismo 7",
      quantity: 1,
      description: "Gran Turismo 7 is a 2022 sim racing video game developed by Polyphony Digital and published by Sony Interactive Entertainment.",
      price: 800,
      img: "img/gran-turismo.jpg",
    },
    {
      id: 12,
      name: "Elder Ring",
      quantity: 1,
      description: "Elden Ring is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.",
      price: 2000,
      img: "img/elder-ring.jpeg",
    },
  ];

  let cart = [];

const container = document.querySelector('#container');
const containerCart = document.querySelector('#container-cart');
const emptyCart = document.querySelector('#emptyCart');
const totalPrice = document.querySelector('#totalPrice');
const processPurchase = document.querySelector('#processPurchase');
const activateFunction = document.querySelector('#activateFunction');
const totalProcess = document.querySelector('#totalProcess');
const form = document.querySelector('#process-payment');

if (activateFunction) {
activateFunction.addEventListener('click', processOrder);
}

// When the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    showCart();

    if (activateFunction) {
      document.querySelector('#activateFunction').click(processOrder);
    } 
})

if (form) {
  form.addEventListener('submit', sendOrder);
}

if (emptyCart) {
  emptyCart.addEventListener('click', () => {
    cart.length = [];
    showCart();
})
}

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
          location.href = "purchase.html";
          processOrder();
        }
      });
}

stockOfProducts.forEach((product) => {
    const {id, name, quantity, description, price, img} = product;
    // console.log(name);
    if (container) {
    container.innerHTML +=  `  
    <div class="card  mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Price: ${price}</p>
      <p class="card-text">${description}</p>
      <p class="card-text">Quantity: ${quantity}</p>
      <button onclick = "addProduct(${id})" class="btn btn-primary btn-cart">Add to cart</button>
    </div>
  </div>
    ` 
    }
});


const addProduct = (id) => {
    // console.log(id);

    const exist = cart.some(product => product.id === id);
    if (exist) {
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
        const {id, name, quantity, price, img} = product;
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
        `;
    })
    }

    let amountCart = cart.length;
    
    if (amountCart === 0) {
        // console.log('There is nothing');
        modalBody.innerHTML = `
            <p class = "text-primary text-center paragraph">You haven't added anything yet!</p>
        `;
    } else {
        console.log('Something');
    }

    if (containerCart) {
      containerCart.textContent = amountCart;
      }
    

    if (totalPrice) {
      totalPrice.textContent = cart.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0); // The accumulator starts at zero
  }
      saveStorage();
    }

    function saveStorage() {
      localStorage.setItem('cart', JSON.stringify(cart));
  }

 
   
function deleteProduct(id) {
    // console.log(id);
    const gameId = id;
    cart = cart.filter((game) => game.id !== gameId);
    // console.log(cart);
    showCart();
}

function processOrder() {
    cart.forEach((product) => {
      const purchaseList = document.querySelector('#purchase-list tbody');
      const {name, quantity, price, img} = product;

      if (purchaseList) {
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
      }
    })
    totalProcess.innerText = cart.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0
    );
}

function sendOrder(event) {
  event.preventDefault();
  // console.log('Sending...');
  const name = document.querySelector('#name').value;
   const email = document.querySelector('#email').value;
  // console.log(client);
  // console.log(mail);

  if (name === '' || email == '') {
    Swal.fire({
      title: "¡Debes completar tu email y nombre!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
  })
} else {
  // console.log('You passed the validation');

  const btn = document.getElementById('button');

  // document.getElementById('form')
  // .addEventListener('submit', function(event) {
  //   event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_0n7p6y6';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  };

  const spinner = document.querySelector('#spinner');
  spinner.classList.add('d-flex');
  spinner.classList.remove('d-none');
 

  setTimeout(() => {
    spinner.classList.remove('d-flex');
    spinner.classList.add('d-none');
    form.reset();
  }, 3000);

  const successAlert = document.createElement('p');
  successAlert.classList.add('alert', 'alert', 'd-block', 'text-center', 'col-md-12', 'mt-2', 'alert-success');
  successAlert.textContent = 'Successful purchase';
  form.appendChild(successAlert);


  setTimeout(() => {
    successAlert.remove();
  }, 3000);

  localStorage.clear();
}




