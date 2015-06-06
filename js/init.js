
window.onload = init();

// IKI EDIT-EDITEN MAS
function init() {
    //Inisialisasi Saw
    var saw = new Saw();
    
    //Tentukan Bobot
    var b1 = new Bobot('C1', 0.35);
    var b2 = new Bobot('C2', 0.25);
    var b3 = new Bobot('C3', 0.25);
    var b4 = new Bobot('C4', 0.15);
    
    //Tambahkan bobot ke Saw
    saw.addBobot(b1);
    saw.addBobot(b2);
    saw.addBobot(b3);
    saw.addBobot(b4);
    
    //Buat Alternative pertama
    var Indra = new Alternative('Indra');
    //Tentukan nilai kriteria untuk alternatif pertama
    var cIn1 = new Criteria('C1', 70);
    var cIn2 = new Criteria('C2', 50);
    var cIn3 = new Criteria('C3', 80);
    var cIn4 = new Criteria('C4', 60);
    //Masukkan nilai kriteria ke alternatif pertama
    Indra.addCriteria(cIn1);
    Indra.addCriteria(cIn2);
    Indra.addCriteria(cIn3);
    Indra.addCriteria(cIn4);
    //Masukkan alternatif pertama ke Saw
    saw.addAlternative(Indra);
    
    //Buat Alternative kedua
    var Roni = new Alternative('Roni');
    //Tentukan nilai kriteria untuk alternatif kedua
    var cr1 = new Criteria('C1', 50);
    var cr2 = new Criteria('C2', 60);
    var cr3 = new Criteria('C3', 82);
    var cr4 = new Criteria('C4', 70);
    //Masukkan nilai kriteria ke alternatif kedua
    Roni.addCriteria(cr1);
    Roni.addCriteria(cr2);
    Roni.addCriteria(cr3);
    Roni.addCriteria(cr4);
    //Masukkan alternatif kedua ke Saw
    saw.addAlternative(Roni);
    
    //Buat Alternative ketiga
    var Putri = new Alternative('Putri');
    //Tentukan nilai kriteria untuk alternatif ketiga
    var cp1 = new Criteria('C1', 85);
    var cp2 = new Criteria('C2', 55);
    var cp3 = new Criteria('C3', 80);
    var cp4 = new Criteria('C4', 75);
    //Masukkan nilai kriteria ke alternatif ketiga
    Putri.addCriteria(cp1);
    Putri.addCriteria(cp2);
    Putri.addCriteria(cp3);
    Putri.addCriteria(cp4);
    //Masukkan alternatif ketiga ke Saw
    saw.addAlternative(Putri);
    
    //Normalisasi kriteria
    saw.normalize();
    
    //Hitung perangkingan
    saw.calculateRank();
    
    var output = getId("hasil");
    
    var arrHasil = saw.getAlternativePriority();
    for(var i = 0; i<arrHasil.length; i++) {
        output.innerHTML += arrHasil[i].toString();
    }
}