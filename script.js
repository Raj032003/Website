// Simple JavaScript to handle add to cart button clicks
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
        // Here you can add the logic to update the cart count and store the item in local storage or backend.
    });
});