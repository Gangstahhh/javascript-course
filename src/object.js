/* Objek serupa dengan array yang dapat menampung banyak nilai dengan tipe data yang beragam. Untuk mengelola data menggunakan objek, bedanya objek diakses tidak melalui indexing,  melainkan menggunakan pendekatan key-value. Untuk mengakses nilainya kita gunakan key. Key juga biasa disebut dengan properti. */

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


