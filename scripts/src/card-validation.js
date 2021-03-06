window.onload = function () {
    Payment.formatCardNumber(document.querySelector('input#card-number'));
    Payment.formatCardNumber(document.querySelector('input#card-number2'));

    Payment.formatCardExpiry(document.querySelector('input#card-expiry'));
    Payment.formatCardExpiry(document.querySelector('input#card-expiry2'));

    Payment.formatCardCVC(document.querySelector('input#card-cvv'));
    Payment.formatCardCVC(document.querySelector('input#card-cvv2'));


    $(document).ready(function(){
        $('input#card-number').keyup(function(){
            if(this.value.length == $(this).attr("maxlength")){
                $('input#card-holder').focus();
            }
        });

        $('input#card-expiry').keyup(function(){
            if(this.value.length == $(this).attr("maxlength")){
                $('input#card-cvv').focus();
            }
        });

        $('input#card-number2').keyup(function(){
            if(this.value.length == $(this).attr("maxlength")){
                $('input#card-cvv2').focus();
            }
        });
    });
};
