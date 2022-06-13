/* Sejauh ini kita sudah mengenal function. Ada satu hal lagi yang harus kita tahu mengenai dasar JavaScript, yakni scoping variable. Ada banyak keadaan di mana kita membutuhkan variabel untuk diakses di seluruh script yang kita buat. Tetapi ada juga keadaan di mana kita ingin variabel tersebut hanya dapat diakses pada cakupan fungsi dan fungsi turunannya saja.

Variabel yang dapat di akses dari seluruh script disebut dengan “globally scoped,” sementara variabel yang hanya dapat diakses hanya pada function tertentu disebut dengan “locally scoped.”

Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya, Jika variabel didefinisikan di luar fungsi, maka variabel akan bersifat global. Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut atau turunannya.

Untuk lebih jelasnya, berikut variabel yang dapat diakses dalam sebuah fungsi:

- Variabel argumen dari fungsinya.
- Lokal variabel yang didefinisikan pada fungsinya.
- Variabel dari induk fungsinya.
= Global variabel. */



// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

// NOTE: Perlu kita perhatikan bahwa, ketika kita lupa menuliskan keyword let, const atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.