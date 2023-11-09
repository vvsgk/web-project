/*
	We start our code with an ajax request to fetch the data
	from the json file.
*/
// First i create a new xmlhttp-request object.
let http = new XMLHttpRequest();
// the variable http holds now all methods and properties of the objct.

//  next i prepare the request with the open() method.
http.open('get', 'products.json', true);
// the first argument sets the http method.
// in the second argument we pass the file where our data lives.
// and last the keyword true, sets the request to be async.

// next i will send the request.
http.send();

// Now i have to catch the response.
// i will check the onload eventlistener.
http.onload = function(){
	// Inside the function i need to check the readystate and status properties.
	if(this.readyState == 4 && this.status == 200){
		// if we have a successful response, i have to parse the json data
		// and convert them to a javascript array.
		let products = JSON.parse(this.responseText);

		// next i need an empty variable to add the incoming data.
		let output = "";

		// now i have to loop trough the products, and in every iteration
		// i add an html template to the output variable.
		for(let item of products){
			output += `
				<div class="product">
					<img src="${"pu_png/man.png"}" alt="${item.StudentName}">
					<p class="name">${item.StudentName}</p>
					<p class="sm1">${item.PhoneStudent1}</p>
					<p class="sm2">${item.PhoneStudent2}</p>
					<p class="fm">${item.FatherMobile}</p>
					<p class="mail">${item.Email}</p>
					<p class="division">${item.DivisionCode}</p>
					<p class="gender">${item.Gender}</p>
					</div>
			`;
		}
		/* and last i target the products container and add the data that the
		output variable holds. */
		document.querySelector(".products").innerHTML = output;
	}
}

/*<img src="${item.image}" alt="${item.RollNo}">
               <p class="EnrollmentNo">${item.EnrollmentNo}</p>
               <P class="StudentName">${item.StudentName}</p>
               <p class="PhoneStudent1">${item.PhoneStudent1}</p>
               <p class="PhoneStudent2">${item.PhoneStudent2}</p>
               <p class="FatherMobile">${item.FatherMobile}</p>
               <p class="MotherMobile">${item.MotherMobile}</p>
               <p class="Email">${item.Email}</p>
               <p class="EmailAlternate">${item.EmailAlternate}</p>
               <p class="DivisionCode">${item.DivisionCode}</p>
               <p class="gender">${item.gender}</p>*/