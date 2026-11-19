

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

  function numbers(length) {
  const numbers = "1234567890";  
  let result = "";
  for (let i = 0; i < length; i++) {
    const numbersIndex = Math.floor(Math.random() * numbers.length);
    result = result + numbers[numbersIndex];
  }

 return result
}

  function symbols(length) {
  const symbols = "~!@#$%^&*()-=+_[]{}\|;:'<>?,./";
  let result = "";
  for (let i = 0; i < length; i++) {
    const symbolsIndex = Math.floor(Math.random() * symbols.length);
    result = result + symbols[symbolsIndex];
  }

 return result
}

  function uppercaseAndLowercase(length) {
    const uppercase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
    const lowercase = "asdfghjklqwertyuiopzxcvbnm";

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * uppercase.length);
      const lowercaseIndex = Math.floor(Math.random() * lowercase.length);
    result = result + uppercase[randomIndex] + lowercase[lowercaseIndex];
  }
 return result.slice(0, length);

}

  function uppercaseAndNumbers(length) {
    const uppercase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
    const numbers = "1234567890";

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * uppercase.length);
      const numbersIndex = Math.floor(Math.random() * numbers.length);
    result = result + uppercase[randomIndex] + numbers[numbersIndex];
  }
 return result.slice(0, length);

}

  function uppercaseAndSymbols(length) {
    const uppercase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
    const symbols = "~!@#$%^&*()-=+_[]{}\|;:'<>?,./";

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * uppercase.length);
      const symbolsIndex = Math.floor(Math.random() * symbols.length);
    result = result + uppercase[randomIndex] + symbols[symbolsIndex];
  }
 return result.slice(0, length);

}

  function lowercaseAndNumbers(length) {
   const lowercase = "asdfghjklqwertyuiopzxcvbnm";
   const numbers = "1234567890";

    let result = "";
    for (let i = 0; i < length; i++) {
      const lowercaseIndex = Math.floor(Math.random() * lowercase.length);
      const numbersIndex = Math.floor(Math.random() * numbers.length);
    result = result + lowercase[lowercaseIndex] + numbers[numbersIndex];
  }
 return result.slice(0, length);

}

  function lowercaseAndSymbols(length) {
   const lowercase = "asdfghjklqwertyuiopzxcvbnm";
   const symbols = "~!@#$%^&*()-=+_[]{}\|;:'<>?,./";

   let result = "";
   for (let i = 0; i < length; i++) {
      const lowercaseIndex = Math.floor(Math.random() * lowercase.length);
      const symbolsIndex = Math.floor(Math.random() * symbols.length);
    result = result + lowercase[lowercaseIndex] + symbols[symbolsIndex];
  }
 return result.slice(0, length);

}

  function numbersAndSymbols(length) {
   const numbers = "1234567890";
   const symbols = "~!@#$%^&*()-=+_[]{}\|;:'<>?,./";

   let result = "";
   for (let i = 0; i < length; i++) {
      const numbersIndex = Math.floor(Math.random() * numbers.length);
      const symbolsIndex = Math.floor(Math.random() * symbols.length);
    result = result + numbers[numbersIndex] + symbols[symbolsIndex];
  }
 return result.slice(0, length);

}

  function uppercaseLowercaseNumbers(length) {
   const lowercase = "asdfghjklqwertyuiopzxcvbnm";
   const uppercase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
   const numbers = "1234567890";

   let result = "";
   for (let i = 0; i < length; i++) {
      const lowercaseIndex = Math.floor(Math.random() * lowercase.length);
      const uppercaseIndex = Math.floor(Math.random() * uppercase.length);

      const numbersIndex = Math.floor(Math.random() * numbers.length);
    result = result + lowercase[lowercaseIndex] + uppercase[uppercaseIndex] + numbers[numbersIndex] ;
  }
 return result.slice(0, length);

}

  function lowercaseNumbersSymbols(length) {
   const lowercase = "asdfghjklqwertyuiopzxcvbnm";
   const numbers = "1234567890";
   const symbols = "~!@#$%^&*()-=+_[]{}\|;:'<>?,./";

   let result = "";
   for (let i = 0; i < length; i++) {
      const lowercaseIndex = Math.floor(Math.random() * lowercase.length);
      const numbersIndex = Math.floor(Math.random() * numbers.length);
      const symbolsIndex = Math.floor(Math.random() * symbols.length);

    result = result + lowercase[lowercaseIndex] + numbers[numbersIndex] + symbols[symbolsIndex] ;
  }
 return result.slice(0, length);

}

function uppercaseLowercaseNumbersSymbols(length) {
 const lowercase = "asdfghjklqwertyuiopzxcvbnm";
 const uppercase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
 const numbers = "1234567890";
 const symbols = "~!@#$%^&*()-=+_[]{}\|;:'<>?,./";


 let result = "";
 
 for (let i = 0; i < length; i++) {
  const lowercaseIndex = Math.floor(Math.random() * lowercase.length);

  const uppercaseIndex = Math.floor(Math.random() * uppercase.length);

  const numbersIndex = Math.floor(Math.random() * numbers.length);

  const symbolsIndex = Math.floor(Math.random() * symbols.length)

  result = result + uppercase[uppercaseIndex] + lowercase[lowercaseIndex]+ numbers[numbersIndex] + symbols[symbolsIndex];
  // console.log (result);

 }
 return result.slice(0, length);

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
    
    if (btn_uppercase.checked && btn_lowercase.checked && btn_numbers.checked && btn_symbols.checked) {
     console.log("uppercase lowercase numbers symbols");
     password_code.innerHTML = uppercaseLowercaseNumbersSymbols(slider_length);
     password_code.style.color = "var(--grey-200-)";

    } else if (btn_lowercase.checked && btn_numbers.checked && btn_symbols.checked) {
     console.log("lowercase numbers symbols")
     password_code.innerHTML = lowercaseNumbersSymbols(slider_length);
     password_code.style.color = "var(--grey-200-)";
    }
    
    else if (btn_uppercase.checked && btn_lowercase.checked && btn_numbers.checked) {
     console.log("uppercase lowercase numbers")    
     password_code.innerHTML = uppercaseLowercaseNumbers(slider_length);
     password_code.style.color = "var(--grey-200-)";
    }

    else if (btn_uppercase.checked && btn_lowercase.checked) {
     console.log("Uppercase and lowercase are checked");
     password_code.innerHTML = uppercaseAndLowercase(slider_length);
     password_code.style.color = "var(--grey-200-)";

    } else if (btn_uppercase.checked && btn_numbers.checked) {
     console.log("uppercase and numbers are checked.")
     password_code.innerHTML = uppercaseAndNumbers(slider_length);
     password_code.style.color = "var(--grey-200-)";

    } else if (btn_uppercase.checked && btn_symbols.checked) {
     console.log("uppercase and symbols are checked.")
     password_code.innerHTML = uppercaseAndSymbols(slider_length);
     password_code.style.color = "var(--grey-200-)";
    
    } else if (btn_lowercase.checked && btn_numbers.checked) {
     console.log("lowercase and numbers are checked.")
     password_code.innerHTML = lowercaseAndNumbers(slider_length);
     password_code.style.color = "var(--grey-200-)";
    
    } else if (btn_lowercase.checked && btn_symbols.checked) {
     console.log("lowercase and symbols are checked.")
     password_code.innerHTML = lowercaseAndSymbols(slider_length);
     password_code.style.color = "var(--grey-200-)";
    
    } else if (btn_numbers.checked && btn_symbols.checked) {
     console.log("numbers and symbols are checked.")
     password_code.innerHTML = numbersAndSymbols(slider_length);
     password_code.style.color = "var(--grey-200-)";

    } else if (btn_uppercase.checked) {
     console.log("uppercase is checked");
     password_code.innerHTML = uppercase(slider_length);
     password_code.style.color = "var(--grey-200-)";
     
    } else if (btn_lowercase.checked) {
     console.log("lowercase is checked");
     password_code.innerHTML = lowercase(slider_length);
     console.log(lowercase(slider_length))
     console.log(slider_length)
     password_code.style.color = "var(--grey-200-)";
    
    } else if (btn_numbers.checked) {
     console.log("number is checked");
     password_code.innerHTML = numbers(slider_length)
     console.log(numbers(slider_length))
     console.log(slider_length)
     password_code.style.color = "var(--grey-200-)";

    } else if (btn_symbols.checked) {
     console.log("symbols is checked");
     password_code.innerHTML = symbols(slider_length)
     console.log(symbols(slider_length))
     console.log(slider_length)
     password_code.style.color = "var(--grey-200-)";

    } 

  })

  const icon_copy = document.querySelector(".icon-copy");

   icon_copy.addEventListener("click", () => {
    const password_code_array = password_code.innerHTML;
    navigator.clipboard.writeText(password_code_array);
    console.log("Copied.")
    console.log(password_code.innerHTML)

   })

  // make the generate button when uppercase is checked
  // make the generate button when lowercase is checked
  // make the generate button when numbers is checked
  // make the generate button when symbols is checked
  // generate result when under uppercase and lowercase are checked
  // generate result when under uppercase and numbers are checked
  // generate result when under uppercase and symbols are checked
    // generate result when under lowercase and numbers are checked
  // generate result when under lowercase and symbols are checked
    // generate result when under numbers and symbols are checked
  // generate result when under uppercase, lowercase and numbers are checked
  // generate result when under lowercase, numbers and symbols are checked
  // generate result when all four conditions are checked
  // copy the result



  })



});
