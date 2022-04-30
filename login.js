function register() {

    const Email = document.getElementById("inputEmail").value;
    const Username = document.getElementById("inputUsername").value;
    const Password = document.getElementById("inputPassword").value;
    const CPassword = document.getElementById("inputCPassword").value;

    if (Password != CPassword) {
        alert('pwds not same')
    } else {
        alert('ok')
    }


}


//      /*var com = document.getElementById("com1").value;
//       if (com == 'open') {
//             }*/
//       var com = document.getElementById("com2").value;
//       if (com == 'google') {
//        window.open("http://google.ru");
//       } else if (com == 'mysecretdata'){
//       	var sdp = prompt("Password for access");
//         if (sdp == "230601") {
//         	alert('The data is correct')
//             window.location = "secretdata.html"
//         } else  {
//         	alert('The password for access is incorrect')
//         }
//       } else if (com == 'chempix_sd') {
//         	window.location = "secretdata_chempix.html"
//         } else {
//       	alert("Invalid keyword")
//       }

// }

// function password() {
// 	var log = document.getElementById("pass").value;
// 	if (log == "1") {
// 		alert("Login successful");
// 		window.location = "search.html";
// 	} else {
// 		alert("Wrong password")
// 	}
// }
