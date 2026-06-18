document.addEventListener("DOMContentLoaded", function () {

    let cartCount = 0;

    const cartBtn = document.getElementById("cart-btn");
    const searchBox = document.getElementById("search-box");

    const products = document.querySelectorAll(".product");
    const categories = document.querySelectorAll(".category");
    const addButtons = document.querySelectorAll(".product button");

    // ================= CART =================
    addButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            cartBtn.textContent = `Cart (${cartCount})`;
        });
    });

    // ================= SEARCH =================
    searchBox.addEventListener("keyup", function () {
        const value = searchBox.value.toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector("h4").textContent.toLowerCase();

            if (productName.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // ================= CATEGORY FILTER =================
    categories.forEach(category => {
        category.addEventListener("click", function () {
            const selected = category.textContent.toLowerCase();

            products.forEach(product => {
                const name = product.querySelector("h4").textContent.toLowerCase();

                if (
                    (selected === "fruits" && name === "apple") ||
                    (selected === "vegetables" && name === "tomato") ||
                    (selected === "dairy" && (name === "milk" || name === "bread")) ||
                    (selected === "snacks" &&
                        (name === "chips" ||
                         name === "dairymilk" ||
                         name === "thums up" ||
                         name === "maggi"))
                ) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });

});