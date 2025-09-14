'use strict';

let productsList = [
    {
        name: 'Сок',
        quantity: 2,
        unit_price: 28,
        total_price: 56,
        bought: false
    },
    {
        name: 'Рис',
        quantity: 2,
        unit_price: 40,
        total_price: 80,
        bought: true
    },
    {
        name: 'Лук',
        quantity: 3,
        unit_price: 15,
        total_price: 45,
        bought: false
    },
    {
        name: 'Мед',
        quantity: 1,
        unit_price: 300,
        total_price: 300,
        bought: true
    }
];


const btn = document.querySelector('.btn');


function renderListItems() {
    const list = document.querySelector('.list');
    list.innerHTML = '';

    const unboughtItems = productsList.filter(product => !product.bought);
    const boughtItems = productsList.filter(product => product.bought);

    function addProduct(items) {
        items.forEach((product) => {
            const item = document.createElement('li');
            item.className = 'item';
            item.setAttribute('data-name', product.name);

            item.innerHTML = `
                <input type="checkbox" class="bought-checkbox" ${product.bought ? 'checked' : ''}>
                <span class="name">${product.name}</span>
                <span class="quantity">${product.quantity}</span> ×
                <span class="unit-price">${product.unit_price}</span> =
                <strong class="total-price">${(product.quantity * product.unit_price).toFixed(2)}</strong>
                <button class="delete-btn">Delete</button>
            `;
            list.appendChild(item);
        });
    }

    addProduct(unboughtItems);
    addProduct(boughtItems);
}


document.querySelector('.list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.closest('li');
        const name = li.getAttribute('data-name');

        const indexToDelete = productsList.findIndex(product => product.name === name);
        if (indexToDelete !== -1) {
            productsList.splice(indexToDelete, 1);
            renderListItems();
            addTotalPrice();
        }
    }
});


document.querySelector('.list').addEventListener('change', function(event) {
    if (event.target.classList.contains('bought-checkbox')) {
        const li = event.target.closest('li');
        const name = li.getAttribute('data-name');

        const product = productsList.find(product => product.name === name);
        if (product) {
            product.bought = event.target.checked;
            renderListItems();
            addTotalPrice();
        }
    }
});


btn.addEventListener('click', function () {
    const productInput = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const unitPriceInput = document.getElementById('unit_price');

    const newProduct = productInput.value.trim();
    const newQuantity = Number(quantityInput.value);
    const newUnitPrice = Number(unitPriceInput.value);
    const newTotalPrice = (newQuantity * newUnitPrice).toFixed(2);

    if (newProduct !== '') {
        productsList.push({
            name: newProduct,
            quantity: newQuantity,
            unit_price: newUnitPrice,
            total_price: newTotalPrice,
            bought: false
        });
        renderListItems();
        addTotalPrice();

        productInput.value = '';
        quantityInput.value = '1';
        unitPriceInput.value = '0';
    }
});

function addTotalPrice() {
    const totalPriceElement = document.querySelector('.list__total-price');
    const totalSum = getTotalSum();
    totalPriceElement.textContent = `Total price: ${totalSum.toFixed(2)}`;
};

function getTotalSum() {
    let Sum = 0;
    productsList.forEach(product => {
        Sum += Number(product.total_price);
    });
    return Sum;
}


addTotalPrice();

renderListItems();

getTotalSum();

