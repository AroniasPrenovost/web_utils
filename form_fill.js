javascript: (() => {
	document.getElementById('checkout_email').value = 'aron.prenovost@radpowerbikes.com';
	document.getElementById('checkout_shipping_address_first_name').value = 'Aron (test)';
	document.getElementById('checkout_shipping_address_first_name').value = 'Prenovost (test)';
	document.getElementById('checkout_shipping_address_address1').value = '1127 North Oakes Street';
	document.getElementById('checkout_shipping_address_city').value = 'Tacoma';
	document.getElementById('checkout_shipping_address_province').value = 'WA';
	document.getElementById('checkout_shipping_address_zip').value = '98406';
	document.getElementById('checkout_shipping_address_phone').value = '2535798293';
	document.getElementById('checkout_reduction_code').value = 'DEV TESTING';
	document.getElementById('checkout_submit').disabled = false;
	document.getElementById('checkout_submit').click(); 
})();
