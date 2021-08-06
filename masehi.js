// Link URL
var tahun = new Date().getFullYear();
var bulan = parseInt(new Date().getMonth())+1;
var url = "https://kalenderindonesia.com/api/APIhVyHsnCGAe/kalender/masehi/"+tahun+"/"+bulan;
var link = "https://kalenderindonesia.com/api/APIhVyHsnCGAe/kalender/masehi/"+tahun+"/"+bulan;

document.getElementById("linkk").href = link;

// AJAX
var http = new XMLHttpRequest();
http.open("GET", url);
http.send();
http.addEventListener("load", () => {
    
    //VARIABEL
    var respond = JSON.parse(http.responseText);
    var hari = respond.data.monthly.daily;
    var batasHari = respond.data.monthly.daysCount;
    var hariAwal = respond.data.monthly.firstDate.text.M;
    var hariAkhir = respond.data.monthly.lastDate.text.M;
    var libur = respond.data.monthly.holiday.data;
    var batasMinggu = respond.data.monthly.weeksCount;
    var tahun = respond.data.year;
    var namaTahun = respond.data.name;

    //CAPTION BULAN
    document.getElementById("bulan").innerHTML = waktu(bulan) + " " + tahun;

    //HAPUS MINGGU KE-6 JIKA HANYA ADA 5 MINGGU
    if (batasMinggu == 5) {
        document.getElementById("tabel").deleteRow(-1);
    }

    //ISI TANGGAL
    for (i=0; i < hari.length; i++) {
        //JIKA HARI INI MINGGU, ISI MINGGU
        if (hari[i].text.W == "Ahad") {
            if (document.getElementById('ahad1').textContent == "") {
                document.getElementById("ahad1").innerHTML += hari[i].day.M;
                sekarang("ahad1");
            } else
            if (document.getElementById('ahad2').textContent == "") {
                document.getElementById("ahad2").innerHTML += hari[i].day.M;
                sekarang("ahad2");
            } else
            if (document.getElementById('ahad3').textContent == "") {
                document.getElementById("ahad3").innerHTML += hari[i].day.M;
                sekarang("ahad3");
            } else
            if (document.getElementById('ahad4').textContent == "") {
                document.getElementById("ahad4").innerHTML += hari[i].day.M;
                sekarang("ahad4");
            } else
            if (document.getElementById('ahad5').textContent == "") {
                document.getElementById("ahad5").innerHTML += hari[i].day.M;
                sekarang("ahad5");
            } else
            if (document.getElementById('ahad6').textContent == "") {
                document.getElementById("ahad6").innerHTML += hari[i].day.M;
                sekarang("ahad6");
            } else {
                console.log("Ahad");
            }
        } else 
        //JIKA HARI INI SENIN, ISI SENIN
        if (hari[i].text.W == "Senin") {
            if (document.getElementById('senin1').textContent == "") {
                document.getElementById("senin1").innerHTML += hari[i].day.M;
                sekarang("senin1");
            } else
            if (document.getElementById('senin2').textContent == "") {
                document.getElementById("senin2").innerHTML += hari[i].day.M;
                sekarang("senin2");
            } else
            if (document.getElementById('senin3').textContent == "") {
                document.getElementById("senin3").innerHTML += hari[i].day.M ;
                sekarang("senin3");
            } else
            if (document.getElementById('senin4').textContent == "") {
                document.getElementById("senin4").innerHTML += hari[i].day.M;
                sekarang("senin4");
            } else
            if (document.getElementById('senin5').textContent == "") {
                document.getElementById("senin5").innerHTML += hari[i].day.M;
                sekarang("senin5");
            } else
            if (document.getElementById('senin6').textContent == "") {
                document.getElementById("senin6").innerHTML += hari[i].day.M;
                sekarang("senin6");
            } else {
                console.log("Senin");
            }
        } else 
        //JIKA HARI INI SELASA, ISI SELASA
        if (hari[i].text.W == "Selasa") {
            if (document.getElementById('selasa1').textContent == "") {
                document.getElementById("selasa1").innerHTML += hari[i].day.M;
                sekarang("selasa1");
            } else
            if (document.getElementById('selasa2').textContent == "") {
                document.getElementById("selasa2").innerHTML += hari[i].day.M;
                sekarang("selasa2");
            } else
            if (document.getElementById('selasa3').textContent == "") {
                document.getElementById("selasa3").innerHTML += hari[i].day.M;
                sekarang("selasa3");
            } else
            if (document.getElementById('selasa4').textContent == "") {
                document.getElementById("selasa4").innerHTML += hari[i].day.M;
                sekarang("selasa4");
            } else
            if (document.getElementById('selasa5').textContent == "") {
                document.getElementById("selasa5").innerHTML += hari[i].day.M;
                sekarang("selasa5");
            } else
            if (document.getElementById('selasa6').textContent == "") {
                document.getElementById("selasa6").innerHTML += hari[i].day.M;
                sekarang("selasa6");
            } else {
                console.log("Selasa");
            }
        } else 
        //JIKA HARI INI RABU, ISI RABU
        if (hari[i].text.W == "Rabu") {
            if (document.getElementById('rabu1').textContent == "") {
                document.getElementById("rabu1").innerHTML += hari[i].day.M;
                sekarang("rabu1");
            } else
            if (document.getElementById('rabu2').textContent == "") {
                document.getElementById("rabu2").innerHTML += hari[i].day.M;
                sekarang("rabu2");
            } else
            if (document.getElementById('rabu3').textContent == "") {
                document.getElementById("rabu3").innerHTML += hari[i].day.M;
                sekarang("rabu3");
            } else
            if (document.getElementById('rabu4').textContent == "") {
                document.getElementById("rabu4").innerHTML += hari[i].day.M;
                sekarang("rabu4");
            } else
            if (document.getElementById('rabu5').textContent == "") {
                document.getElementById("rabu5").innerHTML += hari[i].day.M;
                sekarang("rabu5");
            } else
            if (document.getElementById('rabu6').textContent == "") {
                document.getElementById("rabu6").innerHTML += hari[i].day.M;
                sekarang("rabu6");
            } else {
                console.log("Rabu");
            }
        } else 
        //JIKA HARI INI KAMIS, ISI KAMIS
        if (hari[i].text.W == "Kamis") {
            if (document.getElementById('kamis1').textContent == "") {
                document.getElementById("kamis1").innerHTML += hari[i].day.M;
                sekarang("kamis1");
            } else
            if (document.getElementById('kamis2').textContent == "") {
                document.getElementById("kamis2").innerHTML += hari[i].day.M;
                sekarang("kamis2");
            } else
            if (document.getElementById('kamis3').textContent == "") {
                document.getElementById("kamis3").innerHTML += hari[i].day.M;
                sekarang("kamis3");
            } else
            if (document.getElementById('kamis4').textContent == "") {
                document.getElementById("kamis4").innerHTML += hari[i].day.M;
                sekarang("kamis4");
            } else
            if (document.getElementById('kamis5').textContent == "") {
                document.getElementById("kamis5").innerHTML += hari[i].day.M;
                sekarang("kamis5");
            } else
            if (document.getElementById('kamis6').textContent == "") {
                document.getElementById("kamis6").innerHTML += hari[i].day.M;
                sekarang("kamis6");
            } else {
                console.log("Kamis");
            }
        } else 
        //JIKA HARI INI JUMAT, ISI JUMAT
        if (hari[i].text.W == "Jumat") {
            if (document.getElementById('jumat1').textContent == "") {
                document.getElementById("jumat1").innerHTML += hari[i].day.M;
                sekarang("jumat1");
            } else
            if (document.getElementById('jumat2').textContent == "") {
                document.getElementById("jumat2").innerHTML += hari[i].day.M;
                sekarang("jumat2");
            } else
            if (document.getElementById('jumat3').textContent == "") {
                document.getElementById("jumat3").innerHTML += hari[i].day.M;
                sekarang("jumat3");
            } else
            if (document.getElementById('jumat4').textContent == "") {
                document.getElementById("jumat4").innerHTML += hari[i].day.M;
                sekarang("jumat4");
            } else
            if (document.getElementById('jumat5').textContent == "") {
                document.getElementById("jumat5").innerHTML += hari[i].day.M;
                sekarang("jumat5");
            } else
            if (document.getElementById('jumat6').textContent == "") {
                document.getElementById("jumat6").innerHTML += hari[i].day.M;
                sekarang("jumat6");
            } else {
                console.log("Jum'at");
            }
        } else 
        //JIKA HARI INI SABTU, ISI SABTU
        if (hari[i].text.W == "Sabtu") {
            if (document.getElementById('sabtu1').textContent == "") {
                document.getElementById("sabtu1").innerHTML += hari[i].day.M;
                sekarang("sabtu1");
            } else
            if (document.getElementById('sabtu2').textContent == "") {
                document.getElementById("sabtu2").innerHTML += hari[i].day.M;
                sekarang("sabtu2");
            } else
            if (document.getElementById('sabtu3').textContent == "") {
                document.getElementById("sabtu3").innerHTML += hari[i].day.M;
                sekarang("sabtu3");
            } else
            if (document.getElementById('sabtu4').textContent == "") {
                document.getElementById("sabtu4").innerHTML += hari[i].day.M;
                sekarang("sabtu4");
            } else
            if (document.getElementById('sabtu5').textContent == "") {
                document.getElementById("sabtu5").innerHTML += hari[i].day.M;
                sekarang("sabtu5");
            } else
            if (document.getElementById('sabtu6').textContent == "") {
                document.getElementById("sabtu6").innerHTML += hari[i].day.M;
                sekarang("sabtu6");
            } else {
                console.log("Sabtu");
            }
            
        }
    }
    
    //HARI SEKARANG ABU_ABU
    function sekarang(pesan) {
            if (new Date().getDate() == hari[i].day.M) {
                document.getElementById(pesan).style.color = 'grey';
            }
    }

    //KETERANGAN
    document.getElementById("wakttu").innerHTML += konversiDt(new Date(), "waktu");
    document.getElementById("waktus").innerHTML += konversiDt(new Date(), "jam");
    document.getElementById("tanggals").innerHTML += konversiDt(new Date(), "tanggal");
    document.getElementById("haris").innerHTML += konversiDt(new Date(), "hari");
    document.getElementById("awal").innerHTML += hariAwal;
    document.getElementById("akhir").innerHTML += hariAkhir;
    document.getElementById("hariBanyak").innerHTML += batasHari  + " Hari";
    document.getElementById("minggubanyak").innerHTML += batasMinggu  + " Minggu";
    document.getElementById("bulans").innerHTML += konversiDt(new Date(), "bulan");
    document.getElementById("namaTahun").innerHTML += namaTahun;
    document.getElementById("tahuns").innerHTML += tahun;

    //LIBURAN
    if (respond.data.monthly.holiday.count == 0) {
        return document.getElementById("liburan").innerHTML += "Tidak ada data libur";
    }

    for (i = 0; i < libur.length; i++) {
        var tanggal = libur[i].date;
        document.getElementById("liburan").innerHTML += waktun(tanggal) + " : " + libur[i].name + "<br>";
    }
});


//Pengubah Waktu
function waktu(waktu) {
    var waktu = waktu - 1;
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return bulan[waktu];
}

//Pengubah Waktu
function waktun(waktu) {
    var waktun = new Date(waktu);
    var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var tahun = waktun.getFullYear();
    var tanggal = waktun.getDate();
    return hari[waktun.getDay()] + ", " + tanggal + " " + bulan[waktun.getMonth()] + " " + tahun
}

function konversiDt(waktu, mana) {
    var hari = waktu.getDay();
    var tanggal = waktu.getDate(); 
    var jam = "0" + waktu.getHours();
    var menit = "0" +waktu.getMinutes();
    var detik = "0" +waktu.getSeconds();
    var tahun = waktu.getFullYear();
    var bulan = waktu.getMonth();

    var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    var namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "Oktober", "November", "Desember"];

    var waktuHasilTanggal = namaHari[hari] + ", " + tanggal + " " + namaBulan[bulan] + " " + tahun;
    var waktuHasilTanggals = tanggal + " " + namaBulan[bulan] + " " + tahun;
    var waktuHasilJam = jam.substr(-2) + ":" + menit.substr(-2) + ":" + detik.substr(-2);
    var jadiWaktunya =  waktuHasilJam + " | " + waktuHasilTanggal;

    if (mana == "hari") {
        return namaHari[hari];
    } else if (mana == "bulan") {
        return namaBulan[bulan];
    } else if (mana == "waktu") {
        return jadiWaktunya;
    } else if (mana == "jam") {
        return waktuHasilJam;
    } else if (mana == "tanggal") {
        return waktuHasilTanggals;
    } else {
        console.log("pilih apa");
    }
}
