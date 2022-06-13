/* INFO : Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dari tipe data lain dengan menempatkannya pada satu variabel. 

Nilai - nilai yang berada pada array disusun dan diakses secara indexing. Untuk mengakses nilai di dalam array kita gunakan tanda kurung siku [] yang di dalamnya berupa angka yang merupakan posisi nilai yang ingin diakses
*/

// ARRAY METHOD
// METHOD ADALAH FUNCTION DI DALAM OBJECT
/* - .length
   - .join
   - push, pop, shift, unshift 
   - slice, splice
   -foreach, map
   -sort
   -filter , find*/

let mahaSiswa = ["Muhammad Risky","Adi Cahya Saputra","Muhammad Fatih Alvahri"];
// Mengubah Nilai array
mahaSiswa[0] = undefined;
console.log(mahaSiswa);
// Pengambilan Nilai di ambil dari index ke 0 
console.log(mahaSiswa[0]);
console.log(mahaSiswa[1]);
console.log(mahaSiswa[2]);


// Mmembuat Data siswa dengan looping
let siswa = ["Muhammad Risky","Adi Cahya Saputra", "Muhammad Fatih Alvahri"];
for(let i = 0; i < siswa.length; i++){ // Mencoba Length
    console.log('Siswa Ke-' + (i+1) + ' :' + ' ' + siswa[i]);
}

// METHOD .JOIN 
let orang = ['Budi','tono','tini'];
console.log(orang.join()); //argumennya bisa di isi untuk menggubah pemisah arraynya (,)
// Push & pop
orang.push('Herlambang') //Menambahkan nilai array baru di akhir
console.log(orang.join()); 
orang.pop(); //menghilangkan nilai terakhir dari array yg kita punya
console.log(orang.join());
// unshift & shift
orang.unshift('Herlambang') //Menambahkan nilai array baru di awal
console.log(orang.join()); 
orang.shift(); //menghilangkan nilai awal dari array yg kita punya
console.log(orang.join());


// splice & slice
// rumus : splice(index awal, mau di hapus berapa, elemen baru)
orang.splice(2,0 , "Muhammad Risky");
console.log(orang.join());
// rumus : slice(awal,akhir)
let orang2 = orang.slice(0,2);
console.log(orang2.join("  "));

// foreach (tidak mengembalikan array)
let angka = [2,4,7,6,3,5];
let nama = ["muhammad","risky","samsudin"];
angka.forEach(function(e){
    console.log(e);
});
nama.forEach(function(e, i){
    console.log("Siswa ke-" + (i + 1) + ' ' + "adalah :" + ' ' +e);
});
    
//map (mengembalikan array)
let angka2 = angka.map(function(e){
    return e * 2;
});

console.log(angka2.join('-'));

// sort (menggurutkan  array)
angka.sort();
console.log(angka.join('-'))

// filter (mencari banyak array dan menggembalikan array)
let num = [2,5,6,8,9,20];
let num2 = num.filter(function(x){
    return x > 5; //jika angka yg di cari tidak ada. filter secara otomatis memberikan array kosong
});
console.log(num2);

// find (mencari satu nilai yg di cari dan menggembalikan nilai aslinya *TANPA ARRAY)
let num3 = num.find(function(x){
    return x > 5; //jika sepsifik mengarah ke satu nilai find ini sangat cocok cuman dengan menngunakan tanda (>) find scerara otomatis menggambil nilai yg ketemu pertama saja
});
console.log(num3);