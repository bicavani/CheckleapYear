function checkYear() {
    let year = parseInt(document.getElementById("year").value);
    let isLeapYear = false;
    let isDivisibleBy4 = year % 4 == 0;
    if (isDivisibleBy4){
        let isDivisibleBy100 = year & 100 == 0;
        if (isDivisibleBy100){
            let isDivisibleBy400 = year % 400 == 0;
            if (isDivisibleBy400){
                isLeapYear = true;
            }
            else
                isLeapYear = false;
        }
    }
    if (isLeapYear)
        alert(year + " la nam nhuan")
    else
        alert(year + " khong phai nam nhuan")

}