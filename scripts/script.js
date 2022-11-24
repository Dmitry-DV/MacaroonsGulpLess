$(document).ready(function () {
    // Меню адаптив
    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    }

    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    })

    // Валидация формы
    let product = $('#product');
    let name = $('#name');
    let number = $('#number');
    let loader = $('#loader');

    $('#button-forms').click(() => {

        $('.input').css('border-color', 'rgb(130, 19, 40)');
        $('.err-input').hide();
        let err = false;

        if (!product.val()) {
            err = true;
            product.next().show();
            product.css('border-color', 'red');
        }
        if (!name.val()) {
            err = true;
            name.next().show();
            name.css('border-color', 'red');
        }
        if (!number.val()) {
            err = true;
            number.next().show();
            number.css('border-color', 'red');
        }

        console.log(name.val());

        if (!err) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "http://testologia.site/checkout",
                data: {product: product.val(), name: name.val(), number: number.val()}
            })
                .done(function (msg) {
                    console.log(msg)
                    loader.css('display', 'none');
                    if (msg.success === 1) {
                        $('.container-order').hide();
                        $('.success').css('display', 'flex');
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    }
                });
        }
    })
})