'use script';

    const productInput = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const unitPriceInput = document.getElementById('unit_price');
    const addButton = document.querySelector('.btn');
    const list = document.querySelector('.list');

    let productsList = [];

    addButton.addEventListener('click', () => {
        const name = productInput.value.trim();
        const quantity = parseInt(quantityInput.value);
        const unit_price = parseFloat(unitPriceInput.value);

        if (name === '' || isNaN(quantity) || isNaN(unit_price)) {
            alert('Please enter valid product information.');
            return;
        }

        const total_price = quantity * unit_price;

        // Добавляем новый товар в массив
        productsList.push({
            name,
            quantity,
            unit_price,
            total_price,
            bought: false
        });

        // Очищаем поля формы
        productInput.value = '';
        quantityInput.value = '1';
        unitPriceInput.value = '0';

        // Перерисовываем список
        renderList();
    });

    // Функция для отображения списка
    function renderList() {
        list.innerHTML = '';

        // Сортировка: сначала некупленные, потом купленные
        const sortedList = [...productsList].sort((a, b) => a.bought - b.bought);

        sortedList.forEach((product, index) => {
            const item = document.createElement('li');
            item.className = 'item';

            // Отображение
            item.innerHTML = `
                <input type="checkbox" class="bought-checkbox" ${product.bought ? 'checked' : ''} data-index="${index}">
                <span class="name" style="${product.bought ? 'text-decoration: line-through;' : ''}">${product.name}</span> - 
                <span>${product.quantity}</span>  ×
                <span>${product.unit_price}</span> =
                <strong>${product.total_price.toFixed(2)}</strong>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            list.appendChild(item);
        });

        addCheckboxListeners();
        addDeleteListeners();
    }

    // Функция для обработки покупки
    function addCheckboxListeners() {
        const checkboxes = document.querySelectorAll('.bought-checkbox');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                const index = checkbox.getAttribute('data-index');
                productsList[index].bought = checkbox.checked;
                renderList(); // Обновляем отображение
            });
        });
    }

    // Удаление товара
    function addDeleteListeners() {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const index = btn.getAttribute('data-index');
                productsList.splice(index, 1);
                renderList();
            });
        });
    }

    // ////////////////////////////////////////////////////////////////////
    function deleteProduct(productName) {
    productsList = productsList.filter(product => product.name.toLowerCase() !== productName.toLowerCase());
    renderList();
}


btn.addEventListener('click', () => {
    const index = btn.getAttribute('data-index');
    const nameToDelete = productsList[index].name;
    deleteProduct(nameToDelete);
});



addButton.addEventListener('click', () => {
    const name = productInput.value.trim();
    const quantity = parseInt(quantityInput.value);
    const unit_price = parseFloat(unitPriceInput.value);

    if (name === '' || isNaN(quantity) || isNaN(unit_price)) {
        alert('Please enter valid product information.');
        return;
    }

    const existingProduct = productsList.find(product => product.name.toLowerCase() === name.toLowerCase());

    if (existingProduct) {
        // Обновляем количество и сумму
        existingProduct.quantity += quantity;
        existingProduct.total_price = existingProduct.quantity * existingProduct.unit_price;
    } else {
        productsList.push({
            name,
            quantity,
            unit_price,
            total_price: quantity * unit_price,
            bought: false
        });
    }

    productInput.value = '';
    quantityInput.value = '1';
    unitPriceInput.value = '0';

    renderList();
});



function getTotalSum() {
    return productsList.reduce((sum, product) => sum + product.total_price, 0);
}

console.log("Загальна сума:", getTotalSum());



function getSumByBoughtStatus(isBought) {
    return productsList
        .filter(product => product.bought === isBought)
        .reduce((sum, product) => sum + product.total_price, 0);
}

console.log("Сума куплених:", getSumByBoughtStatus(true));
console.log("Сума некуплених:", getSumByBoughtStatus(false));



function sortByTotalPrice(order = 'asc') {
    const sorted = [...productsList].sort((a, b) => {
        return order === 'asc'
            ? a.total_price - b.total_price
            : b.total_price - a.total_price;
    });

    return sorted;
}



const sortedAsc = sortByTotalPrice('asc');
console.log("Сортування за зростанням:", sortedAsc);

const sortedDesc = sortByTotalPrice('desc');
console.log("Сортування за спаданням:", sortedDesc);