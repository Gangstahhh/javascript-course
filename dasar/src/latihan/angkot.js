// Membuat Object angkot
function Angkot(sopir, track, penumpang, kas){
    this.sopir = sopir;
    this.track = track;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function(namaPenumpang, uang){
        if(this.penumpang.length === 0){
            console.log('Belum ada PNP');
            return false;
        } 
        for( let i = 0; i < penumpang.length; i++ ){
            if (namaPenumpang === penumpang[i]){
                this.kas +=  uang;
                this.penumpang.splice(i,1);
                return this.kas;
            }
        }
    }
}

var angkot1 = new Angkot('Muhammad Risky',['Tanjung Siang','Ci salak','ci panas'],[],0);
var angkot2 = new Angkot('Samsudin',['cikopo','merak','jakarta'],[],0);


