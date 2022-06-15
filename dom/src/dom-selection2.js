/* document.querySelector(); Menghasilkan -> elemen*/
// Sama halnya dengan Selector Css argument yang di isi adalah selector css yg ingin di tuju
const p4 = document.querySelector('#b p');
p4.style.color = "green"
p4.style.fontSize ='30px';

const ls2 = document.querySelector('section#b ul li:nth-child(2)');
ls2.style.backgroundColor = 'orange';

// NOTE: DI KARENAKAN document.querySelector(); INI HANYA MENGEMBALIKAN ELEMEN SAJA JADI KETIKA KALIAN MENGISI SELECTOR 1 ELEMEN DENGAN ALASAN UNTUK MENGSELECT SEMUA ELEMEN YG DI PILIH. document.querySelector(); AKAN SECARA OTOMATIS MENGGAMBIL ELEMEN YG PERTAMA KALI DI DAPAT. TIDAK KESELERUHAN

// example
// const p = document.querySelector('p');
// p.innerHTML = "AFAKAH RILL DEK?"


/* document.querySelectorAll(); Mengembalikan -> NodeLIst */
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}