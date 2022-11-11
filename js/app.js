document.addEventListener("DOMContentLoaded", () => {
  let numSlider = document.querySelector("#numChars")
  let numVal = document.querySelector("#numCh")
  let genBut = document.querySelector(".js-gen")
  let pwdBox = document.querySelector(".js-pwd")

  numVal.innerHTML = numSlider.value

  // Use slider to update the screen
  numSlider.addEventListener("input", () => {
    numVal.innerHTML = numSlider.value
  })

  genBut.addEventListener("click", () => {
    generatePassword(numSlider.value, pwdBox)
  })
})


generatePassword = (numChars, updateBox) => {
  let pwdGen = ""
  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  let numbers = "0123456789"
  let rndChoice = 0
  let chkBox = document.querySelectorAll(".js-check")

  let boxChecked = false
  chkBox.forEach(chk => {
    if (chk.checked)
      boxChecked = true
  })
  if (!boxChecked)
    chkBox[0].checked = true

  while (pwdGen.length < numChars) {
    rndChoice = Math.floor(Math.random() * 4)

    switch (rndChoice) {
      case 0:
        if (chkBox[0].checked)
          pwdGen = pwdGen + lowercase[Math.floor(Math.random() * lowercase.length)]
        break
      case 2:
        if (chkBox[2].checked)
          pwdGen = pwdGen + numbers[Math.floor(Math.random() * numbers.length)]
        break
    }
  }
  updateBox.value = pwdGen
}

// This is often called the “8 4 Rule” (Eight Four Rule): 8 = 8 characters minimum length. 4 = 1 lower case + 1 upper case + 1 number + 1 special character.
// CHARACTERISTICS OF STRONG PASSWORDS

//     At least 12 characters(required for your Muhlenberg password)—the more characters, the better
//     A mixture of both uppercase and lowercase letters
//     A mixture of letters and numbers 
//     Inclusion of at least one special character, e.g., ! @ # ? ]
// Note: do not use < or > in your password, as both can cause problems in Web browsers

// EXAMPLES OF WEAK PASSWORDS

//     Any word that can be found in a dictionary, in any language(e.g., airplane or aeroplano).
//     A dictionary word with some letters simply replaced by numbers(e.g., a1rplan3 or aer0plan0).
//     A repeated character or a series of characters(e.g., AAAAA or 12345).
//     A keyboard series of characters(e.g., qwerty or poiuy).
//     Personal information(e.g., birthdays, names of pets or friends, Social Security number, addresses).
