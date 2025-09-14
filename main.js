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

        <button class="delete-btn">Delete</button>`;

    const allQuantities = document.querySelectorAll('.quantity');
    const lastQuantity = allQuantities[allQuantities.length - 1];
    const boughtCheckbox = document.querySelector('.bought-checkbox');
console.log(boughtCheckbox);


    };

    // if (boughtCheckbox === checked) {
    //     console.log('checked');
    //         spanQuantity.style.textDecoration = 'line-through';
    //     } else {
    //         spanQuantity.style.textDecoration = 'none';
    //     }


        // function deleteProduct(name) {
        //     productsList = productsList.filter(product => product.name !== name);
        //     renderList();
        // }

    const deleteButtons = document.querySelectorAll('.delete-btn');
    console.log(deleteButtons);
    // deleteButtons.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         const index = btn.getAttribute('data-index');
    //         productsList.splice(index, 1);
    //         renderList();
    //     })
    // })
deleteButtons.addEventListener('click', () => {
    console.log('click');
});




// 🔹 Початкова структура даних
// 1. Створити масив shoppingList — список покупок.
// 2. Кожен елемент у масиві має бути об’єктом з такими властивостями:

// name — назва продукту (рядок)
// quantity — кількість (число)
// isBought — чи куплений товар (булеве значення)
// price — ціна за одиницю товару (число)
// total — сума (price × quantity)

// 🔹 Функціонал НОРМА (базовий рівень)
// 3. Функція: Вивід списку покупок

// Назвати функцію, наприклад, printShoppingList().

// Виводити продукти у двох блоках:

// Спочатку ті, які не куплені (isBought === false)

// Потім ті, що вже куплені (isBought === true)

// 4. Функція: Позначити товар як куплений

// Назвати функцію, наприклад, markAsBought(productName)

// Приймає назву товару (name)

// Шукає товар у списку

// Встановлює isBought = true

// 🔹 Функціонал НОРМА: Додаткове
// 5. Функція: Видалити товар зі списку

// Назвати функцію, наприклад, removeProduct(productName)

// Приймає назву продукту

// Створює новий масив, без цього продукту

// Замінює оригінальний масив новим

// 6. Функція: Додати товар у список

// Назвати функцію, наприклад, addProduct(productName, quantity, price)

// Якщо такий продукт вже існує:

// Збільшує quantity

// Перераховує total

// Якщо продукту ще немає:

// Додає новий об’єкт до масиву з розрахунком total

// 🔹 Функціонал МАКСИМУМ (поглиблений рівень)
// 7. Функція: Підрахунок повної суми всіх покупок

// Назвати функцію, наприклад, getTotalSum()

// Перебрати всі продукти, підсумувати total

// 8. Функція: Підрахунок суми лише куплених товарів

// Назвати, наприклад, getBoughtSum()

// Фільтрувати ті, у кого isBought === true

// Підсумувати total

// 9. Функція: Підрахунок суми лише не куплених товарів

// Назвати, наприклад, getUnboughtSum()

// Фільтрувати ті, у кого isBought === false

// Підсумувати total

// 10. Функція: Сортування товарів за сумою

// Назвати функцію, наприклад, sortByTotal(order)

// Приймає параметр order: 'asc' або 'desc'

// Сортує масив за полем total у відповідному порядку

// Повертає або виводить відсортований список

// 🔹 Додаткові підзадачі для кращої структури коду
// 11. Функція: Знайти індекс або об'єкт продукту по назві

// Винести пошук продукту в окрему функцію findProduct(name)

// Це допоможе уникнути дублювання коду

// 12. Функція: Перерахунок total

// Створити утиліту calculateTotal(quantity, price)

// Або метод, який автоматично оновлює total при зміні кількості чи ціни

// 📌 Підсумковий список найдрібніших підзадач
// №	Підзадача
// 1	Створити порожній масив shoppingList
// 2	Додати у масив кілька початкових товарів
// 3	Створити функцію printShoppingList()
// 4	Виводити спочатку не куплені, потім куплені
// 5	Створити функцію markAsBought(name)
// 6	Створити функцію removeProduct(name)
// 7	Створити функцію addProduct(name, quantity, price)
// 8	Реалізувати перевірку на наявність продукту
// 9	Оновлювати quantity та total, якщо товар вже є
// 10	Створити функцію getTotalSum()
// 11	Створити функцію getBoughtSum()
// 12	Створити функцію getUnboughtSum()
// 13	Створити функцію sortByTotal(order)
// 14	Створити допоміжну функцію findProduct(name)
// 15	Створити допоміжну функцію calculateTotal(quantity, price)






