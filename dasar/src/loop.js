// =======================================================================
/*  CONTOH PENULISAN LOOPING 
    for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
        // do something
}*/

for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4*/
// ============================================================================

// =============================================================================
/* Yang pertama adalah for(), kita memanggil for statement di mana kita memerintahkan JavaScript seperti ini: “Hai JavaScript! Lakukan perulangan jika kondisi ini benar”, selanjutnya tentu kita membutuhkan sebuah kondisi untuk dievaluasi. */

const myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* output
Harry
Ron
Hermione
Tom
*/

// =============================================================================


// =============================================================================
/* For of loop
Cara lain dalam melakukan looping adalah menggunakan for..of. For of mulai hadir pada ECMAScript 2015 (ES6). Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. Struktur dasar dari for of loop nampak seperti ini:
    
for(arrayItem of myArray) {
    // do something
}

*/

let myArray2 = ["Harry", "Ron", "Hermione", "Tom"];

for(const arrayItem of myArray2) {
    console.log(arrayItem)
}
/* or of tidak membutuhkan banyak statement untuk melakukan proses looping pada array. Dengan for..of, nilai tiap array akan diinisialisasi pada variabel baru yang kita tentukan pada tiap proses looping-nya. Jumlah proses looping nya pun akan menyesuaikan dengan ukuran dari array. Sederhananya seperti kita melakukan perintah “Hei JavaScript! Lakukan perulangan pada myArray, akses tiap nilainya dan simpan pada variabel arrayItem”. Pada proses looping kita gunakan variabel arrayItem untuk mengakses tiap nilai dari item myArray. */
/* output
Harry
Ron
Hermione
Tom
*/
// ====================================================================================