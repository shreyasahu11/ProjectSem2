// Select elements
const products = document.querySelectorAll(".product");
const cartButton = document.querySelector(".nav-actions button:last-child");
const searchInput = document.querySelector(".search-box input");
const categoryButtons = document.querySelectorAll(".category");

let cartCount = 0;

// ==================== ADD TO CART ====================
const addButtons = document.querySelectorAll(".product button");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartButton.textContent = `Cart (${cartCount})`;
    });
});


// ==================== SEARCH FUNCTION ====================
searchInput.addEventListener("keyup", () => {
    let searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {
        let productName = product.querySelector("h4").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});


// ==================== CATEGORY FILTER ====================
categoryButtons.forEach(category => {
    category.addEventListener("click", () => {
        let selectedCategory = category.textContent.toLowerCase();

        products.forEach(product => {
            let productName = product.querySelector("h4").textContent.toLowerCase();

            if (
                selectedCategory === "fruits" &&
                productName.includes("apple")
            ) {
                product.style.display = "block";
            }
            else if (
                selectedCategory === "vegetables" &&
                productName.includes("tomato")
            ) {
                product.style.display = "block";
            }
            else if (
                selectedCategory === "dairy" &&
                (productName.includes("milk") || productName.includes("bread"))
            ) {
                product.style.display = "block";
            }
            else if (
                selectedCategory === "snacks" &&
                (
                    productName.includes("chips") ||
                    productName.includes("maggi") ||
                    productName.includes("dairymilk") ||
                    productName.includes("thums up")
                )
            ) {
                product.style.display = "block";
            }
            else {
                product.style.display = "none";
            }
        });
    });
});


// ==================== SHOW ALL PRODUCTS ON DOUBLE CLICK ====================
document.querySelector(".products h2").addEventListener("dblclick", () => {
    products.forEach(product => {
        product.style.display = "block";
    });
});