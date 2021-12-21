$(document).ready(function(){

	$("#encrypt").submit(function(event){
		
		var message = $("#message").val();
		var secret = $("#secret").val();
		var encrypted = CryptoJS.AES.encrypt(message, secret).toString();
		
		$("#ciphertext").val(encrypted);
		event.preventDefault();
		
	});

	$("#decrypt").submit(function(event){
		
		var cipher = $("#cipher2").val();
		var secret = $("#secret2").val();

		var decrypted = CryptoJS.AES.decrypt(cipher, secret).toString(CryptoJS.enc.Utf8);
	

		if ($("#message").val() != decrypted){
			$("#result").val("Did not decrypt.  Check your secret key!");
			$("#result").toggleClass("bg-danger text-white")
		} else {
			$("#result").val(decrypted);
		}

		event.preventDefault();
		
	});

});