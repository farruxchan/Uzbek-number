let number = prompt('Введите номер телефона')
let number_codes = [33, 55, 71, 77, 88, 90, 91, 93, 94, 95, 97, 98, 99]
function uzbekCodes(num) {
    for(i=0;i < number_codes.length; i++){
      let code_part = num[4] + num[5]
      if(code_part == number_codes[i]){
        return true
      }
    }
}

function checkUzbNumbers(uzb_num) {
  let uzb_part = uzb_num[0] + uzb_num[1] + uzb_num[2] + uzb_num[3]
  if(uzb_num.length == 13 && uzb_part == '+998' && uzbekCodes(uzb_num) == true) {
    alert(`+998 (${uzb_num[4] + uzb_num[5]}) ${uzb_num[6]+uzb_num[7]+$uzb_num[8]}-${uzb_num[9]+uzb_num[10]}-${uzb_num[11]+uzb_num[12]}`)
  } else {
    alert('Error')
  }
}
checkUzbNumbers(number)