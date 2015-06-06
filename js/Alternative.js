
/**
 * Constructor class Alternative
 * @param string name Nama Alternatif
 */
function Alternative(name) {
    this.name = name;
    this.criteria = new Array();
    this.normalizedCriteria = new Array();
}

/**
 * Method untuk menambahkan kriteria ke alternatif
 * @param Criteria criteria
 */
Alternative.prototype.addCriteria = function(criteria) {
    if(criteria instanceof Criteria) {
        this.criteria.push(criteria);
    }
};

/**
 * Method untuk menambahkan kriteria ternormalisasi ke alternatif
 * @param Criteria criteria
 */
Alternative.prototype.addNormalizedCriteria = function(criteria) {
    if(criteria instanceof Criteria) {
        if(criteria.isNormalized()) {
            this.normalizedCriteria.push(criteria);
        }
    }
};

/**
 * Method untuk menghitung nilai perangkingan alternatif
 * @param Bobot bobot
 */
Alternative.prototype.calculateRank = function(bobot) {
    var result = 0;
    for(var i = 0; i<bobot.length; i++) {
        var cr = this.getNormalizedCriteria(bobot[i].criteriaName);
        result += parseFloat(cr.value) * parseFloat(bobot[i].value);
    }
    
    this.setRank(result);
};

/**
 * Method untuk mengeset nilai perangkingan alternatif
 * @param float rank
 */
Alternative.prototype.setRank = function(rank) {
    this.rank = rank;
};

/**
 * Method untuk mengambil nilai perangkingan alternatif
 * @returns float
 */
Alternative.prototype.getRank = function() {
    return this.rank;
};

/**
 * Method untuk mengambil kriteria Alternatif berdasar nama kriteria
 * @param string criteriaName
 * @returns Criteria
 */
Alternative.prototype.getCriteria = function(criteriaName) {
    for(var i = 0; i<this.criteria.length; i++) {
        if(this.criteria[i].name === criteriaName) {
            return this.criteria[i];
        }
    }
};

/**
 * Method untuk mengambil kriteria ternormalisasi Alternatif berdasar nama kriteria
 * @param string criteriaName
 * @returns Criteria
 */
Alternative.prototype.getNormalizedCriteria = function(criteriaName) {
    for(var i = 0; i<this.normalizedCriteria.length; i++) {
        if(this.normalizedCriteria[i].name === criteriaName) {
            return this.normalizedCriteria[i];
        }
    }
};

Alternative.prototype.print = function() {
    var str = 'aName : '+this.name + ' | ';
    str += 'aRank : '+this.getRank();
    console.log(str);
};

Alternative.prototype.printCriteria = function() {
    for(var i = 0; i<this.criteria.length; i++) {
        this.criteria[i].print();
    }
};

Alternative.prototype.printNormalizedCriteria = function() {
    for(var i = 0; i<this.normalizedCriteria.length; i++) {
        this.normalizedCriteria[i].print();
    }
};

Alternative.prototype.toString = function() {
    var str = 'Nama : '+this.name + '<br>';
    str += 'Nilai Peringkat : '+this.getRank() + '<br><br>';
    
    return str;
};