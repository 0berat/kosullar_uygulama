
function login(){
    var eposta = document.getElementById("eposta").value;
    var sifre = document.getElementById("sifre").value;

    if(eposta =="berat@outlook.com" && sifre =="1234" ){
        document.getElementById("container").innerHTML ="Giris başarılı";
    }else {
        document.getElementById("container").innerHTML ="Lütfen eposta ve şifrenizi kontrol ediniz.";
    }


}