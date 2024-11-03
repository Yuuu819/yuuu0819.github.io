$(document).ready(function() {
    let totalPrice = 0;

    $(".add-to-cart").click(function() {
        const product = $(this).closest(".product");
        const name = product.data("name");
        const price = product.data("price");

        // 將商品添加到購物車
        $("#cart-items").append(`<li>${name} - $${price}</li>`);
        totalPrice += price;
        $("#total-price").text(totalPrice);
    });
});
