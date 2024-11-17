document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        document.getElementById('category-title').innerText = `Products in ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        loadProducts(category);
    } else {
        loadProducts();
    }

    document.getElementById('search-input')?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        searchProducts(query);
    });

    document.getElementById('order-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
    });

    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Logged in successfully!');
    });

    document.getElementById('contact-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
    });
});

function loadProducts(category = '') {
    const products = [
        { id: 1, name: 'Dosa', category: 'Dosa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksq_PzuImrnjQ36OKFujLffkTxQkUffzP0g&s' },
        { id: 2, name: 'idli', category: 'idli', image: 'https://t4.ftcdn.net/jpg/04/81/32/57/240_F_481325737_gZnjx0nzgxLrirgRUI3GpII7zvZdcSYu.jpg' },
        { id: 4, name: 'vada', category: 'vada', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/medu-vada-1-280x280.jpg' },
        { id: 5, name: 'Curd-vada', category: 'Curd-vada', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/chana-dal-vada-280x280.jpg' },
        { id: 6, name: 'Lemon-Rice', category: 'Lemon-Rice', image:'"https://static.toiimg.com/thumb/53870704.cms?width=800&height=800&imgsize=142559' },
        { id: 7, name: 'Dum-Biryani', category: 'Dum-Biryani', image:'https://thumbs.dreamstime.com/b/chicken-biryani-traditional-indian-rice-dish-served-clay-pot-top-view-image-one-meal-108805407.jpg?w=360' },
        { id: 8, name: 'Semya-upma', category: 'Semya-upma', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2013/06/semiya-upma-recipe-280x280.jpg' },
        
        { id: 9, name: 'Onion-Pakodi', category: 'Onion-Pakodi', image:'https://media.istockphoto.com/id/982314610/photo/moong-dal-vada-or-pakoda-also-known-as-moongode-served-with-green-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=MRNQhgd9kxyCbGgz3ptRg0HfKdyFxPeOPG8lyV3I9zY=' },
        { id: 10, name: 'Payasam', category: 'Payasam', image:'https://t3.ftcdn.net/jpg/00/14/64/34/360_F_14643443_IHziXtLvvxGOWguB7h1fVLuc2tR6tFH2.jpg' },
        { id: 11, name: 'Poori', category: 'Poori', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2015/06/poori-masala-recipe-280x280.jpg' },
        { id: 12, name: 'Spicy-Mushroom Biryani', category: 'Spicy-Mushroom Biryani', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/mushroom-biryani-recipe-1-280x280.jpg' },
        { id: 13, name: 'Aloo-Parata', category: 'Aloo-parata', image:'"https://i.ytimg.com/vi/ohrbhGYQ-1o/maxresdefault.jpg' },
        { id: 14, name: 'Mango-Rice', category: 'Mango-Rice', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/raw-mango-rice-recipe-280x280.jpg' },
        
    ];
    
    
    

    const filteredProducts = category ? products.filter(p => p.category === category) : products;
    const productList = document.getElementById('product-list');

    if (productList) {
        productList.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join('');
    }
}

function searchProducts(query) {
    const products = [
    
        { id: 1, name: 'Dosa', category: 'Dosa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksq_PzuImrnjQ36OKFujLffkTxQkUffzP0g&s' },
        { id: 2, name: 'idli', category: 'idli', image: 'https://t4.ftcdn.net/jpg/04/81/32/57/240_F_481325737_gZnjx0nzgxLrirgRUI3GpII7zvZdcSYu.jpg' },
        { id: 4, name: 'vada', category: 'vada', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/medu-vada-1-280x280.jpg' },
        { id: 5, name: 'Curd-vada', category: 'Curd-vada', image:'https://www.shutterstock.com/image-photo/dahi-bhalla-called-vada-bhalle-600nw-2264547813.jpg' },
        { id: 6, name: 'Lemon-Rice', category: 'Lemon-Rice', image:'"https://static.toiimg.com/thumb/53870704.cms?width=800&height=800&imgsize=142559' },
        { id: 7, name: 'Dum-Biryani', category: 'Dum-Biryani', image:'https://thumbs.dreamstime.com/b/chicken-biryani-traditional-indian-rice-dish-served-clay-pot-top-view-image-one-meal-108805407.jpg?w=360' },
        { id: 8, name: 'Semya-upma', category: 'Semya-upma', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2013/06/semiya-upma-recipe-280x280.jpg' },
            
        { id: 9, name: 'Onion-Pakodi', category: 'Onion-Pakodi', image:'https://media.istockphoto.com/id/982314610/photo/moong-dal-vada-or-pakoda-also-known-as-moongode-served-with-green-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=MRNQhgd9kxyCbGgz3ptRg0HfKdyFxPeOPG8lyV3I9zY=' },
        { id: 10, name: 'Payasam', category: 'Payasam', image:'https://t3.ftcdn.net/jpg/00/14/64/34/360_F_14643443_IHziXtLvvxGOWguB7h1fVLuc2tR6tFH2.jpg' },
        { id: 11, name: 'Poori', category: 'Poori', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2015/06/poori-masala-recipe-280x280.jpg' },
        { id: 12, name: 'Spicy-Mushroom Biryani', category: 'Spicy-Mushroom Biryani', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/mushroom-biryani-recipe-1-280x280.jpg' },
        { id: 13, name: 'Aloo-Parata', category: 'Aloo-parata', image:'"https://i.ytimg.com/vi/ohrbhGYQ-1o/maxresdefault.jpg' },
        { id: 14, name: 'Mango-Rice', category: 'Mango-Rice', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/raw-mango-rice-recipe-280x280.jpg' },
            
        ];
    

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    const searchResults = document.getElementById('search-results');

    if (searchResults) {
        searchResults.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join('');
    }
}

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
