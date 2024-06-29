document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Lego Minecraft', price: '$60.00', image: 'img/lego.jpg' },
        { name: 'Game Boy Classic', price: '$60.00', image: 'img/gameboy.jpg' },
        { name: 'Gears of war', price: '$60.00', image: 'img/war.jpg' },
        { name: 'The last of us 1', price: '$60.00', image: 'img/last.jpg' },
        { name: 'Disco Kali Uchis', price: '$60.00', image: 'img/disco.jpg' },
        { name: 'Xbox 360', price: '$60.00', image: 'img/xbox.jpg' },
        { name: 'Playstation 5', price: '$60.00', image: 'img/play5.jpg' },
        { name: 'Days gone', price: '$60.00', image: 'img/days.jpg' },
    ];

    const productsContainer = document.getElementById('products');

    function renderProducts() {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>${product.price}</p>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    renderProducts();

    const addProductForm = document.getElementById('addProductForm');

    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const image = document.getElementById('image').value;

        if (name && price && image) {
            products.push({ name, price, image });
            renderProducts();
            addProductForm.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});
