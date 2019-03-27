function checkYear() {
    let year = parseInt(document.getElementById("year").value);
    if (year % 4 == 0){
        if (year & 100 == 0){
            if (year % 400 == 0){
                alert(year + " la nam nhuan");
            }
            else
                alert(year + " khong phai la nam nhuan")
        }
        else
            alert(year + " la nam nhuan")
    }
    else
        alert(year + " khong phai la nam nhuan")
}