// VARIABEL ADALAH TEMPAT UNTUK MENYIMPAN DATA
// DENGAN MENYIMPAN DATA VARIABEL, KITA BISA MENGGUNAKAN LAGI DENGAN MENYEBUT NAMA VARIABELNYA

// UNTUK MEMBUAT VARIABEL DI JAVASCRIPT, KITA BISA MENGGUNAKAN KATA KUNCI VAR DIIKUTI DENGAN NAMA VARIABEL NYA

// JAVASCRIPT ADALAH DYNAMIC LANGUANGE. ARTINYA VARIABELNYA DI JAVASCRIPT TIDAK TERPAKUHARUS MENGGUNAKAN SATU TIPE DATA, KITA BISA MENGUBAH-UBAH TIPE DATA DI VARIABEL YANG SAMA

//NOTE: TIDAK BOLEH ADA SPASI DALAM VARIABEL

var fullName; //Deklarasi Variabel

fullName = "Muhammad Risky"; //Memberi Value
document.writeln(fullName);
document.writeln("</br>");
fullName = "Budi Sentosa"; //Merubah Value
document.writeln(fullName);

// deklarasi dan mengisi value secara langsung

var fullName = "Muhammad" + " " + "Risky";

console.log(fullName);

/* NOTE : melakukan improvisasi pada deklarasi variabel karena menggunakan var terdapat beberapa hal yang kontroversial, salah satunya hoisting. 

Apa itu hoisting? sesuai artinya “Mengangkat” variabel yang dideklarasikan menggunakan var ini dapat diberikan nilai terlebih dahulu sebelum dideklarasikan
*/ 
