'use strict'

const productInput = document.getElementById('product');
const addButton = document.querySelector('.btn');
const list = document.querySelector('.list');
const quantityInput = document.getElementById('quantity');
const spanQuantity = document.querySelector('.quantity');
const bought = document.getElementById('bought');
const unitPriceInput = document.getElementById('unit_price'); // unit price

let productsList = [];


    addButton.addEventListener('click', () => {
        console.log(productInput.value);
        addProduct()
                productInput.value = '';
                quantityInput.value = '1';
                unitPriceInput.value = '0';
    });

    function addProduct() {
        productsList.push({name: productInput.value, quantity: quantityInput.value, bought: false, unit_price: 0});
        console.log(productsList);
        console.log(productsList.length);

        list.innerHTML += `<li class="item"> <input type="checkbox" class="bought-checkbox">
 ${productInput.value}</li>
        <span class="quantity"> ${quantityInput.value} </span>
        <span class="unit-price"> ${unitPriceInput.value * quantityInput.value} </span>
        <label>Total Price:</label>

        <button class="delete-btn">Delete</button>`;

    const allQuantities = document.querySelectorAll('.quantity');
    const lastQuantity = allQuantities[allQuantities.length - 1];
    const boughtCheckbox = document.querySelector('.bought-checkbox');
console.log(boughtCheckbox);


    };

    if (boughtCheckbox === checked) {
        console.log('checked');
            spanQuantity.style.textDecoration = 'line-through';
        } else {
            spanQuantity.style.textDecoration = 'none';
        }







