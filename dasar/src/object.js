/* Objek serupa dengan array yang dapat menampung banyak nilai dengan tipe data yang beragam. Untuk mengelola data menggunakan objek, bedanya objek diakses tidak melalui indexing,  melainkan menggunakan pendekatan key-value. Untuk mengakses nilainya kita gunakan key. Key juga biasa disebut dengan properti. */
/* PERBEDAAN: - ARRAY adalah kumpulan nilai , yang memiliki index
              - OBJECT adalah kumpulan nilai, yang memiliki nama*/

// Untuk menetapkan objek pada variabel gunakan tanda kurung kurawal { } dalam menginisialisasinya. Kemudian di dalamnya kita tetapkan key: value.
// let object = {key1: "value1", key2: "value2", key3: "value3"}



// let user = {firstName: "Harry", lastName: "Potter",  age: 20, isMuggle: false, stuff: ["Wand", "Flying Car", "Owl"]};
//  Dalam menuliskan objek, baris baru tidaklah penting dan tidak akan berpengaruh apa pun. Sehingga lebih baik setiap kita menetapkan key-value buatlah baris baru untuk memisahkan antar nilainya, hal ini akan memudahkan kita dalam memahami struktur data yang berada pada objek.

let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");


let mahaSiswa = {
    nama : "Muhammad Risky",
    lulus : true,
    IPSemester : [2.96, 3.10, 3.25, 2.88, 3.04],
    IPKumulatif : function (){
        var total = 0;
        var ips = this.IPSemester;
        for(var i = 0; i < ips.length; i++){
            total += ips.length;
        }
        return total/ips.length;
    }
}

let orang = {
    nama : 'Muhammad Risky', // key / variabel yang berada di dalam object di sebut property
    umur : 17,
    pekerjaan : 'Pelajar',
    sapa : function () {  // function yang ada di dalam object di sebut dengan method
        return 'Hi, Nama Saya' + this.nama + 
        'Usia saya ' + this.umur + 
        'Pekerjaan Saya' + this.pekerjaan;
    }
}

/* Penulisan Object di javascript terbagi menjadi beberapa cara, yaitu:
    - Object Literal
    - Function Declaration
    - Constructor Function (keywoard new)
    - object.create() */


// Object Literal

let siswa = {
    nama : "Muhammad Risky",
    NIK : '20381031030183810',
    email : 'awokawok33.gmail.com',
    jurusan : 'Rekayasa Perangkat Lunak'
}

// Function Declaration
function buatObjectSiswa(nama,nik,email,jurusan){
    var siswa = {};
    siswa.nama = nama;
    siswa.nik = nik;
    siswa.email = email;
    siswa.jurusan = jurusan;
    return siswa;
}
var siswa2 =buatObjectSiswa('Muhammad Risky','0031831038100','awokawoka36645.gmail.com', 'RPL');

// Consturctor Function (Khusus untuk object)
function Siswa(nama, nik, email, jurusan){ //Yang jadi pembeda antara function declaration dan constructor function adalah nama function di mulai dengan huruf besar, tidak di mulai dengan var tapi dengan keyword (this), dan tidak ada return
    this.nama = nama;
    this.nik = nik;
    this.email = email;
    this.jurusan = jurusan;
};

var siswa3 = new Siswa ('Muhammad Risky','20392039232','mamang234.gmail.com', 'RPL'); //wajib menggunakan keyword new untuk memberitahu javascript kalau kita menggunakan Consturctor Function



// This 
console.log(window === this); //windows === this

// cara ke 1 function declaration
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object global

// Cara ke 2 Object Literal
// var obj = {};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }

// obj.halo();
// this mengemalikan object yang bersangkutan

// Cara ke 3 Constructor Function
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru di buat