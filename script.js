let password = document.getElementById("password")
let passwordLength = document.getElementById("password-length")
let passwordRange = document.getElementById("range-input")

const updateValue = (val) => {
   passwordLength.value = val
   passwordRange.value = val
}

const generate = (val, hasUpper, hasLower, hasNumber, hasSymbol) => {

   const upper = "ABCDEFGHIJKLMNOPRSTUVWXYZ"
   const lower = "abcdefghijklmnopqrstuvwxyz"
   const number = "1234567890"
   const symbol = "!@#$%^&*()<>?"

   const data = upper + lower + number + symbol
   let generatePassword = ''

   if (val < 0 || val > 50) {
      alert("Panjang password melebihi batas!")
      passwordRange.value = 0
      passwordLength.value = 0
      return generatePassword
   }

   if (val === null) return generatePassword

   for (let index = 0; index < val; index++) {
      generatePassword += data[~~(Math.random() * data.length)]
   }

   // console.log(generatePassword)
   return generatePassword
}

const getPassword = () => {
   const newPassword = generate(passwordLength.value)
   // console.log('new password : ', newPassword)
   password.value = newPassword
}

const savePassword = () => {
   if (password.value == '') return alert("Password masih kosong!")

   navigator.clipboard.writeText(password.value).then(() => {
      alert("Password berhasil di copy ke clipboard!")
   })
      .catch(err => {
         alert("Maaf password tidak tersimpan!")
      });
}