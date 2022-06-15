// DOM SELECTION

/*  document.getElementById(); 
di gunakan untuk mengambil id yang di panggil. Menghasilkan -> elemen*/
const judul = document.getElementById('judul'); //argument judul ini di ambil dari id judul di html

// CSS x Js

// Menganti Warna pada elemen yg id nya judul  
judul.style.color = 'red';

// NOTE: PAKAI CAMEL CASE UNTUK PENAMAAN PROPERTY CSS YG MEMAKAI TANDA (-), DI KARENAKAN TANDA (-) DI JAVASCRIPT DI ANGGAP OPERASI MATEMATIKA
// judul.style.backround-color = 'yellow'; //Penulisan Yang salah
judul.style.backgroundColor = "yellow"; //Penulisan yang benar

// menganti value dari elemen html nya tanpa menyentuh htmlnya
judul.innerHTML = 'Muhammad Risky';


/* document.getElementsByTagName(); 
di gunakan untuk mengambil tag yg di panggil. Menghasilkan -> HTMLCOLECTION*/
const p = document.getElementsByTagName('p');
// NOTE: Berhubung HTMLCOLECTION Sama dengan array untuk memanipulasi element harus menggunakan index.
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';
// Menggunakan looping
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
} 

// semua yg di panggil dengan document.getElementsByTagName(); , akan di tampilkan menjadi HTMLCOLECTION Walaupun hanya terdapat 1 elemen saja.

// example
const h1 = document.getElementsByTagName('h1')[0];//ketika kalian panggil h1 di console, h1 akan termasuk dalam HTMLCOLECTION padahal dia hanya sendiri. Cara agar hanya menjadi elemen saja, kalian bisa menaruh index nya setelah elemen h1 ini di panggil.

h1.style.fontSize = "50px"; //di sini kita tidak perlu menuliskan indexnya lagi 


// document.getElementsByClassName Menghasilkan -> HTMLCOLECTION

//cara ke 1
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = "Ini di masukan dengan menggunakan Javascript";

// cara 2
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = "Ini di masukan dengan menggunakan Javascript";




