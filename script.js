let password = document.getElementById("password")
let passwordLength = document.getElementById("password-length")

const updateValue = (val) => {
   document.getElementById("password-length").innerHTML = val
}

const generate = (val) => {
   const upper = "ABCDEFGHIJKLMNOPRSTUVWXYZ"
   const lower = "abcdefghijklmnopqrstuvwxyz"
   const number = "1234567890"
   const symbol = "!@#$%^&*()<>?"

   const data = upper + lower + number + symbol
   let generatePassword = ''
   for (let index = 0; index < val; index++) {
      generatePassword += data[~~(Math.random() * data.length)]
   }

   // console.log(generatePassword)
   return generatePassword
}

const getPassword = () => {
   const newPassword = generate(passwordLength.innerHTML)
   // console.log('new password : ', newPassword)
   password.value = newPassword
}

const savePassword = () => {
   navigator.clipboard.writeText(password.value).then(() => {
      alert("Password berhasil di copy ke clipboard!")
  })
  .catch(err => {
      alert("Maaf password tidak tersimpan!w")
  });
}