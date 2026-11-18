

// make 4 button events 
// when the button is checked, change color of the div meter to yellow
// when three button is checked, display the word medium 


document.addEventListener('DOMContentLoaded', () => {
  const btn_uppercase = document.getElementById("uppercase-letter");
  const meter_1 = document.querySelector(".meter-1");

  const btn_lowercase = document.getElementById("lowercase-letter");
  const meter_2 = document.querySelector(".meter-2");

  const btn_numbers = document.getElementById("numbers");
  const meter_3 = document.querySelector(".meter-3"); 

  const btn_symbols = document.getElementById("symbols");
  const meter_4 = document.querySelector(".meter-4");

  const medium = document.querySelector(".medium");

  function uppercase(length) {
  const uppercase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * uppercase.length);
    result = result + uppercase[randomIndex];
  }

 return result
}

  function lowercase(length) {
  const lowercase = "asdfghjklqwertyuiopzxcvbnm";
  let result = "";
  for (let i = 0; i < length; i++) {
    const lowercaseIndex = Math.floor(Math.random() * lowercase.length);
    result = result + lowercase[lowercaseIndex];
  }

 return result
}


function generaterandomletters(length) {
 const words = "asdfghjklqwertyuiopzxcvbnm";
 const uppercase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
 const numbers = "1234567890";
 const symbols = "~!@#$%^&*()-=+_[]{}\|;:'<>?,./";


 let result = "";
 
 for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * words.length);
  // result = result + words[randomIndex];
  // console.log(result);

  const second = Math.floor(Math.random() * uppercase.length);

  const third = Math.floor(Math.random() * numbers.length);

  const fourth = Math.floor(Math.random() * symbols.length)

  result = result + words[randomIndex] + uppercase[second] + numbers[third] + symbols[fourth];
  // console.log (result);

 }

 console.log(result.slice(0, 9));

 return result


}

// generaterandomletters(5);


  btn_uppercase.addEventListener("change" , (event) => {

   if (btn_uppercase.checked) {
    console.log("You checked the box")
    meter_1.style.background = "var(--yellow-300-)"
   } else {
    console.log("box off")
    meter_1.style.background = ""
   }
  })

  btn_lowercase.addEventListener("change" , (event) => {

   if (btn_lowercase.checked) {
    console.log("You checked the box")
    meter_2.style.background = "var(--yellow-300-)"
   } else {
    console.log("box off")
    meter_2.style.background = ""
   }
  })

  btn_numbers.addEventListener("change" , (event) => {

   if (btn_numbers.checked) {
    console.log("You checked the box")
    meter_3.style.background = "var(--yellow-300-)"
   } else {
    console.log("box off")
    meter_3.style.background = ""
   }

    if (btn_lowercase.checked && btn_uppercase.checked && btn_numbers.checked ) {
      console.log("medium");
      medium.style.display = "unset";
    } else {
     medium.style.display = "none";
    }

  })

  btn_symbols.addEventListener("change" , (event) => {

   if (btn_symbols.checked) {
    console.log("You checked the box")
    meter_4.style.background = "var(--yellow-300-)"
   } else {
    console.log("box off")
    meter_4.style.background = ""
   }


  })

  const btn_generate = document.querySelector(".generate-btn");
  const password_code = document.querySelector(".password-code");

  // get the slider value for the password
  const slider_value = document.querySelector("#character-length");

  slider_value.addEventListener("click", (event) => {
   const zero = document.querySelector(".zero");
   zero.innerHTML = slider_value.value;
   const slider_length = zero.innerHTML;

  btn_generate.addEventListener("click", (event) => {

    if (btn_uppercase.checked) {
     console.log("uppercase is checked");
     password_code.innerHTML = uppercase(slider_length);
     password_code.style.color = "var(--grey-200-)";
     
    } else if (btn_lowercase.checked) {
     console.log("lowercase is checked");
     password_code.innerHTML = lowercase(slider_length);
     console.log(lowercase(slider_length))
     console.log(slider_length)
     password_code.style.color = "var(--grey-200-)";
    }

  })

  // make the generate button when first list is checked
  // make the generate button when second list is checked
  // make the generate button when third list is checked


  })



});
