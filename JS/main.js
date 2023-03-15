const stockOfProducts = [
  {
    id: 1,
    name: "eFootball 2022",
    quantity: 1,
    description: "eFootball is an association football simulation video game developed by Konami.",
    price: 130,
    img: "img/pes-2023.jpg",
  },
  {
    id: 2,
    name: "Fifa 2022",
    quantity: 1,
    description: "FIFA 22 is a football simulation video game published by Electronic Arts.",
    price: 260,
    img: "img/fifa-2022.jpg",
  },
  {
    id: 3,
    name: "Battlefield V",
    quantity: 1,
    description: "Battlefield V is a first-person shooter game developed by DICE.",
    price: 150,
    img: "img/battlefield.jpg",
  },
  {
    id: 4,
    name: "Grand Theft Auto V",
    quantity: 1,
    description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North.",
    price: 450,
    img: "img/gta-v.jpg",
  },
  {
    id: 5,
    name: "God of War",
    quantity: 1,
    description: "God of War is an action-adventure game franchise created by David Jaffe.",
    price: 600,
    img: "img/god-of-war.jpg",
  },
  {
    id: 6,
    name: "Uncharted 4",
    quantity: 1,
    description: "Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog.",
    price: 999,
    img: "img/uncharted.jpg",
  },
  {
    id: 7,
    name: "Fortnite",
    quantity: 1,
    description: "Fortnite is an online video game developed by Epic Games and released in 2017.",
    price: 126,
    img: "img/fortnite.jpg",
  },
  {
    id: 8,
    name: "Call Of Duty Warzone",
    quantity: 1,
    description: "Call of Duty: Warzone is a free-to-play battle royale video game released on March 10, 2020.",
    price: 110,
    img: "img/callduty.jpg",
  },
  {
    id: 9,
    name: "Apex Legends",
    quantity: 1,
    description: "Apex Legends is a free-to-play battle royale-hero shooter game.",
    price: 130,
    img: "img/apex.jpg",
  },
  {
    id: 10,
    name: "Minecraft",
    quantity: 1,
    description: "Minecraft is a sandbox video game developed by Mojang Studios.",
    price: 230,
    img: "img/minecraft.jpg",
  },
  {
    id: 11,
    name: "Gran Turismo 7",
    quantity: 1,
    description: "Gran Turismo 7 is a 2022 sim racing video game developed by Polyphony Digital.",
    price: 800,
    img: "img/gran-turismo.jpg",
  },
  {
    id: 12,
    name: "Elder Ring",
    quantity: 1,
    description: "Elden Ring is a 2022 action role-playing game developed by FromSoftware.",
    price: 130,
    img: "img/elder-ring.jpeg",
  },
  {
    id: 13,
    name: "Gta Vice City",
    quantity: 1,
    description: "Grand Theft Auto: Vice City is a 2002 action-adventure game developed by Rockstar North.",
    price: 245,
    img: "https://avatars.mds.yandex.net/i?id=e1df35f08eb64a6c89f03fbbeb530361c76794ba-6383766-images-thumbs&n=13",
  },
  {
    id: 14,
    name: "CS GO",
    quantity: 1,
    description: "Counter-Strike: Global Offensive is a 2012 multiplayer tactical first-person shooter.",
    price: 130,
    img: "https://avatars.mds.yandex.net/i?id=63107a1a014c7ef25b2ebb5ba22a38f0df2a56a7-6367247-images-thumbs&n=13",
  },
  {
    id: 15,
    name: "Pes 6",
    quantity: 1,
    description: "PES 6 is a soccer video game developed and published by Konami.",
    price: 111,
    img: "https://1.bp.blogspot.com/-YMU1hUxFXcw/XWFyUcAAmZI/AAAAAAAABD8/Ki4MKBm5FZQW7RZo83wj_5P7EC-DPCvUACK4BGAYYCw/w1200-h630-p-k-no-nu/Pro_Evolution_Soccer_6_Logo.jpg",
  },
  {
    id: 16,
    name: "Roblox",
    quantity: 1,
    description: "Roblox is an online game platform and game creation system.",
    price: 125,
    img: "https://cutewallpaper.org/21/2560x1440-roblox/173419722.jpg",
  },
  {
    id: 17,
    name: "Sims 4",
    quantity: 1,
    description: "The Sims 4 is a social simulation game developed by Maxis .",
    price: 410,
    img: "https://avatars.mds.yandex.net/i?id=44be030571bb15841efb0a002480863118d9096b-7716430-images-thumbs&n=13",
  },
  {
    id: 18,
    name: "Valorant",
    quantity: 1,
    description: "Valorant is a free-to-play first-person tactical hero shooter .",
    price: 350,
    img: "https://images.ecency.com/p/7b4bio5hobgtGQKeTeQ5JNjSU3Frvf7Drq4NwrGdFhvJcA5LuyjDbmWNmiKzfQytzyKkMR2kRrsiEZ4BTRhfCpsFuzNJdU26KrGZkGX2cKiZWC15gKyuTdVVzsZbPHvqG6zeyH2j6W1M2sqishpqXpMEB2xn.png?format=match&amp;mode=fit&amp;width=600&amp;height=500",
  },
  {
    id: 19,
    name: "Fifa 2001",
    quantity: 1,
    description: "FIFA 2001 is a football simulation video game.",
    price: 120,
    img: "https://avatars.mds.yandex.net/i?id=bedef42a5085eadbe0d81952d247ca909a2c54f1-8819521-images-thumbs&n=13",
  },
  {
    id: 20,
    name: "Final Fantasy XV",
    quantity: 1,
    description: "Final Fantasy XV is an action role-playing game.",
    price: 510,
    img: "https://avatars.mds.yandex.net/i?id=2b1a770370e4cf1494685c5296beccd2713e8bc2-8552726-images-thumbs&n=13",
  },
  {
    id: 21,
    name: "League of legends",
    quantity: 1,
    description: "League of Legends is a 2009 multiplayer online battle arena video game.",
    price: 555,
    img: "https://avatars.mds.yandex.net/i?id=3be7c0a84bfeca2e975ef11d217bf828ca433617-8497208-images-thumbs&n=13",
  },
  {
    id: 22,
    name: "Slender",
    quantity: 1,
    description: "Slender is a free-to-play indie-developed first-person survival horror video game.",
    price: 130,
    img: "https://avatars.mds.yandex.net/i?id=fcb79d85d74873207e5e02408765b1d4e5f77407-8239440-images-thumbs&n=13",
  },
  {
    id: 23,
    name: "Rocket League",
    quantity: 1,
    description: "Rocket League is a vehicular soccer video game developed and published by Psyonix.",
    price: 105,
    img: "https://avatars.mds.yandex.net/i?id=0df45341b2143a6d24b69036df0b79f107a9d910-5208953-images-thumbs&n=13",
  },
  {
    id: 24,
    name: "Among us",
    quantity: 1,
    description: "Among Us is a 2018 online multiplayer social deduction game.",
    price: 45,
    img: "https://gameriv.com/wp-content/uploads/2020/12/Wallpaper-Among-Us-1.jpg",
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
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');

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

function showProducts() {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = stockOfProducts.slice(startIndex, endIndex);

  container.innerHTML = "";

  productsToShow.forEach((product) => {
    const { id, name, quantity, description, price, img } = product;

    container.innerHTML += `
      <div class="card mt-3" style="width: 18rem;">
        <img class="card-img-top mt-2" src="${img}" alt="Card image...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <p class = "card-text">Quantity: ${quantity}</p>
          <p class="card-text">${price} USD</p>
          <button class="btn btn-primary" onclick="addProduct(${id})">Add to cart</button>
        </div>
      </div>
    `;
  });
}

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
  cart.forEach((product) => {
      const {id, name, quantity, price, img} = product;
      modalBody.innerHTML += `
          <div class = "modal-container">
              <div>
                  <img class = "img-fluid img-cart" src = "${img}"/>
              </div>

              <div>
              <p>Product: ${name}</p>
              <p>Price: ${price}</p>
              <p>Quantity ${quantity}</p>

              <button onclick = "deleteProduct(${id}) " class = "btn btn-danger fw-bold">Delete product</button>
              </div>
          </div>
      `;
  })
  }

  let amountCart = cart.length;
  
  if (amountCart === 0) {
      // console.log('There is nothing');
      modalBody.innerHTML = `
          <p class = "text-primary text-center paragraph fs-2">You haven't added anything yet!</p>
      `;
  } else {
      // console.log('Something');
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
  const gameId = id;
  cart = cart.filter((game) => game.id !== gameId);
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

if (name === '' || email == '') {
  Swal.fire({
    title: "¡You must fill in your email and name!",
    text: "Fill in the form",
    icon: "error",
    confirmButtonText: "Accept",
})
} else {
// console.log('You passed the validation');

const btn = document.getElementById('button');

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

if (searchButton) {
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = stockOfProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
    const sortedProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    container.innerHTML = '';
    sortedProducts.forEach(product => {
      const {id, name, quantity, description, price, img} = product;
      container.innerHTML +=  `  
        <div class="card mt-3" style="width: 18rem;">
          <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Price: ${price}</p>
            <p class="card-text">Description: ${description}</p>
            <button type="button" class="btn btn-primary" onclick="addProduct(${id})">Add to cart</button>
          </div>
        </div>`;
    });
  });
}

const productsPerPage = 8; // shows 8 products per page
let currentPage = 1; // current page

const container2 = document.querySelector('.container-2');

function showPagination() {
  const totalPages = Math.ceil(stockOfProducts.length / productsPerPage);

  container2.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.classList.add("btn", "btn-primary", "mx-1");

    if (i === currentPage) {
      button.classList.add("active");
    } else {
      button.addEventListener("click", () => {
        currentPage = i;
        showProducts();
        showPagination();
      });
    }
    container2.appendChild(button);
  }

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.innerText = "Prev";
    prevButton.classList.add("btn", "btn-secondary", "mx-1");
    prevButton.addEventListener("click", () => {
      currentPage--;
      showProducts();
      showPagination();
    });
    container2.insertBefore(prevButton, container2.firstChild);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.classList.add("btn", "btn-secondary", "mx-1");
    nextButton.addEventListener("click", () => {
      currentPage++;
      showProducts();
      showPagination();
    });
    container2.appendChild(nextButton);
  }
}
// calls these functions in the DOMContentLoaded event
showProducts();
showPagination();
