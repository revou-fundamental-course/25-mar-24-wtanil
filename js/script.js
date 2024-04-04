function isNumeric(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function isDecimal(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57)))
        return false;
    return true;
}

function submit1() {

    // declare dan init variables
    let jenisKelamin = document.querySelector("input[type=radio]:checked").value;
    let berat = document.getElementById("berat").value;
    let usia = document.getElementById("usia").value;
    let tinggi = document.getElementById("tinggi").value;
    

    // validasi empty field
    if (berat == 0 || berat == null) {
        alert("Isi berat Anda")
        return false;
    }

    if (usia == 0 || usia == null) {
        alert("Isi usia Anda")
        return false;
    }

    if (tinggi == 0 || tinggi == null) {
        alert("Isi tinggi Anda.")
        return false;
    }

    // hitung bmi
    var bmi = (berat / ((tinggi / 100) * (tinggi / 100))).toFixed(1);

    // string builder untuk kategori
    var string = "Anda masuk dalam kategori: "
    if (bmi < 18.5) {
        string += "kekurangan berat badan!"
    } else if (bmi < 24.9) {
        string += "ideal!"
    } else if (bmi < 29.9) {
        string += "kelebihan berat badan!"
    } else {
        string += "obesitas!"
    }
    
    // assign string and show result div
    var result = document.getElementById("result");
    result.innerHTML = "BMI Anda adalah: " + bmi + "<br>" + string;
    result.style.visibility = "visible"

    return false;
}
