let penumpang = [];

let tambahPenumpang = function(namaPenumpang, Penumpang) {
    // ketika penumpang kosong
    if (penumpang.length == 0){
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        for( let i = 0; i < penumpang.length; i++){
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if(penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + "sudah berada di dalam angkot");
                return penumpang;
            } else if(i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

let hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log("Angkot Sedang kosong");
    }else{
        for (let i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            } else if(i == penumpang.length -1 ) {
                console.log(namaPenumpang + "tidak ada di dalam angkot");
                return penumpang;
            }
        }
    }
    return penumpang;
}