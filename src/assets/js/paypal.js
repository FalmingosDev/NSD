paypal.Buttons({
    style : {
        color: 'blue',
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: 1
                    // value: $("#holding_amt").html()
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            console.log(details)
			/*$.ajax({
				type: 'POST',
				url: '../handler/dashboard.php',
				data: {actionType:'submit_transaction', transId: details.id},
				dataType: 'json',
				encode: true,
				async:true   		
			})
			.done(function(data){
				if(data.status){
					//window.location.replace("http://54.179.91.151/PayPal/PayPal_Integration_PHP-main/success.php")
                     jQuery("#paypalsuccessmodal").modal('show');
					 holdingdata();
				}
				else {
					//window.location.replace("http://54.179.91.151/PayPal/PayPal_Integration_PHP-main/Oncancel.php")
					jQuery("#paypalcancelmodal").modal('show');
					holdingdata();
				}
			})*/ 
        })
    },
    onCancel: function (data) {
        //window.location.replace("http://54.179.91.151/PayPal/PayPal_Integration_PHP-main/Oncancel.php")
		jQuery("#paypalcancelmodal").modal('show');
		holdingdata();
    }
}).render('#paypal-payment-button');