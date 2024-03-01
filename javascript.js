document.addEventListener('DOMContentLoaded', () => {
    const transparencyBtn = document.getElementById('transparencyBtn');
    const smallCoins = document.getElementById('smallCoins');
    const mediumCoins = document.getElementById('mediumCoins');
    const largeCoins = document.getElementById('largeCoins');
    const popup = document.getElementById('popup');
    
    let transparencyClicked = false;
    
// Toggle transparency of the button
transparencyBtn.addEventListener('click', () => {
    transparencyClicked = !transparencyClicked;
    transparencyBtn.style.opacity = transparencyClicked ? '0.5' : '1';
    });
    
// Popup when Small Coins is clicked as well as console log and OneSignal data tags
smallCoins.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action of the click event
    e.stopPropagation(); 
    smallCoins.classList.toggle('clicked');
    console.log("50,000 Coins Package clicked");
    popup.style.display = 'block'; 
    const tags = { 
        cart_update: Math.floor(Date.now() / 1000),
        product_name: "Starter Coin Package",
        product_price: "£0.99"
        };
    OneSignal.User.addTags(tags);
    console.log("Tags Sent: 'cart_update' : " + tags.cart_update + " 'product_name' : " + tags.product_name + " 'product_price' : " + tags.product_price );
    });
    
    
// Popup when Medium Coins is clicked as well as console log and OneSignal data tags
mediumCoins.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action of the click event
    e.stopPropagation();
    mediumCoins.classList.toggle('clicked');
    console.log("350,000 Coins Package clicked");
    popup.style.display = 'block'; 
    const tags = { 
        cart_update: Math.floor(Date.now() / 1000),
        product_name: "Advanced Coin Package",
        product_price: "£4.99"
        };
    OneSignal.User.addTags(tags);
    console.log("Tags Sent: 'cart_update' : " + tags.cart_update + " 'product_name' : " + tags.product_name + " 'product_price' : " + tags.product_price );
    });


    // Popup when Large Coins is clicked as well as console log and OneSignal data tags
largeCoins.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action of the click event
    e.stopPropagation();
    largeCoins.classList.toggle('clicked');
    console.log("1,250,000 Coins Package clicked");
    popup.style.display = 'block'; 
    const tags = { 
        cart_update: Math.floor(Date.now() / 1000),
        product_name: "Godly Coin Package",
        product_price: "£14.99"
        };
    OneSignal.User.addTags(tags);
    console.log("Tags Sent: 'cart_update' : " + tags.cart_update + " 'product_name' : " + tags.product_name + " 'product_price' : " + tags.product_price );
    });
    
    
// Close popup when clicked outside of it
document.addEventListener('click', (e) => {
        if (e.target !== popup) {
            popup.style.display = 'none'; // Hide the popup
        }
    });
});

// Add event listeners to handle clicks on Gold Pass Image and Extra Image buttons
document.addEventListener('DOMContentLoaded', () => {
    const smallCoins = document.getElementById('smallCoins');
    const mediumCoins = document.getElementById('mediumCoins');
    const largeCoins = document.getElementById('largeCoins');

    smallCoins.addEventListener('click', () => {
        // Store the URL of the Gold Pass Image in local storage
        localStorage.setItem('clickedImage', 'https://i.imgur.com/Ux5EjgS.png');
    });

    mediumCoins.addEventListener('click', () => {
        // Store the URL of the Extra Image in local storage
        localStorage.setItem('clickedImage', 'https://i.imgur.com/kPzY4eG.png');
    });

    largeCoins.addEventListener('click', () => {
        // Store the URL of the Extra Image in local storage
        localStorage.setItem('clickedImage', 'https://i.imgur.com/7bcEBLz.png');
    });
});


