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

    $("#checkout").click(function() {
        $("#checkout-form").toggle(); // 顯示或隱藏結帳表單
    });

    $("#submit-order").click(function() {
        const name = $("#name").val();
        const phone = $("#phone").val();
        const paymentMethod = $("#payment-method").val();
        const address = $("#address").val();
        
        if (name && phone && address) {
            alert(`訂單已提交！\n姓名: ${name}\n電話: ${phone}\n支付方式: ${paymentMethod}\n地址: ${address}\n總金額: $${totalPrice}`);
            // 重置購物車和表單
            $("#cart-items").empty();
            $("#total-price").text(0);
            $("#checkout-form").hide();
            $("#name").val('');
            $("#phone").val('');
            $("#payment-method").val('cash-on-delivery');
            $("#address").val('');
            totalPrice = 0;
        } else {
            alert("請填寫所有欄位。");
        }
    });
});


