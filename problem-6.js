//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generatePassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers="123456789";
    var specialChar="!@#$%&*()";
    var password="";
    // var passwordLength = 12;
    // var password = "";

 if(length<8){
    console.log("Password should be at least 8 characters.")
 }
 else{
    let i=0;
    while(i<length){
      password+=chars[Math.floor(Math.random()*chars.length)];
      password+=numbers[Math.floor(Math.random()*numbers.length)];
      password+=specialChar[Math.floor(Math.random()*specialChar.length)];
      i+=3;

    }
    password=password.substring(0,length);
    return password;
 }
}

const result=generatePassword(8);
console.log(result);