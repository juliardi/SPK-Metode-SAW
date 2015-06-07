
/**
 * Constructor class Saw
 */
function Saw() {
    this.alternative = new Array();
    this.bobot = new Array();
}

/**
 * Method untuk menambahkan alternatif
 * @param Alternative alternative
 */
Saw.prototype.addAlternative = function(alternative) {
    if (alternative instanceof Alternative) {
        this.alternative.push(alternative);
    }
};

/**
 * Method untuk menambahkan bobot
 * @param Bobot bobot
 */
Saw.prototype.addBobot = function(bobot) {
    if (bobot instanceof Bobot) {
        this.bobot.push(bobot);
    }
};

Saw.prototype.removeBobot = function(bobotName) {
    for (var i = 0; i < this.bobot.length; i++) {
        if(this.bobot[i].criteriaName === bobotName) {
            this.bobot.splice(i, 1);
            return;
        }
    }
};

/**
 * Method untuk melakukan normalisasi nilai kriteria pada semua alternatif
 */
Saw.prototype.normalize = function() {
    for (var i = 0; i < this.alternative.length; i++) {
        this.normalizeAlternative(this.alternative[i]);
    }
};

/**
 * Method untuk melakukan normalisasi nilai kriteria pada satu alternatif
 * @param Alternative alternative
 */
Saw.prototype.normalizeAlternative = function(alternative) {
    for (var i = 0; i < alternative.criteria.length; i++) {
        if (alternative.criteria[i].isBenefit()) {
            this.normalizeBenefit(alternative, alternative.criteria[i].name);
        } else {
            this.normalizeCost(alternative, alternative.criteria[i].name);
        }
    }
};

/**
 * Method untuk melakukan normalisasi kriteria yang bertipe Benefit
 * @param Alternative alternative
 * @param string criteriaName
 */
Saw.prototype.normalizeBenefit = function(alternative, criteriaName) {
    var criteria = alternative.getCriteria(criteriaName);
    var maxValue = this.getMaxCriteriaValue(criteriaName);
    var normalizedValue = parseFloat(criteria.value) / parseFloat(maxValue);
    var normalizedCriteria = new Criteria(criteriaName, normalizedValue, criteria.isBenefit(), true);

    alternative.addNormalizedCriteria(normalizedCriteria);
};

/**
 * Method untuk melakukan normalisasi kriteria yang bertipe Cost
 * @param Alternative alternative
 * @param string criteriaName
 */
Saw.prototype.normalizeCost = function(alternative, criteriaName) {
    var criteria = alternative.getCriteria(criteriaName);
    var minValue = this.getMinCriteriaValue(criteriaName);
    var normalizedValue = parseFloat(minValue) / parseFloat(criteria.value);
    var normalizedCriteria = new Criteria(criteriaName, normalizedValue, criteria.isBenefit(), true);

    alternative.addNormalizedCriteria(normalizedCriteria);
};

/**
 * Method untuk menentukan nilai maksimal suatu kriteria
 * @param string criteriaName
 * @returns {Number}
 */
Saw.prototype.getMaxCriteriaValue = function(criteriaName) {
    var temp = new Array();
    for (var i = 0; i < this.alternative.length; i++) {
        temp.push(this.alternative[i].getCriteria(criteriaName).value);
    }

    return this.max(temp);
};

/**
 * Method untuk menentukan nilai minimal suatu kriteria
 * @param string criteriaName
 * @returns {Number}
 */
Saw.prototype.getMinCriteriaValue = function(criteriaName) {
    var temp = new Array();
    for (var i = 0; i < this.alternative.length; i++) {
        temp.push(this.alternative[i].getCriteria(criteriaName).value);
    }

    return this.min(temp);
};

/**
 * Method untuk menentukan nilai terbesar dalam array
 * @param Array arrNumber
 * @returns {Number} Nilai terbesar dalam arrNumber
 */
Saw.prototype.max = function(arrNumber) {
    var result = -65535;

    for (var i = 0; i < arrNumber.length; i++) {
        result = Math.max(arrNumber[i], result);
    }

    return result;
};

/**
 * Method untuk menentukan nilai terkecil dalam array
 * @param Array arrNumber
 * @returns {Number} Nilai terkecil dalam arrNumber
 */
Saw.prototype.min = function(arrNumber) {
    var result = 65535;

    for (var i = 0; i < arrNumber.length; i++) {
        result = Math.min(arrNumber[i], result);
    }

    return result;
};

/**
 * Method untuk menghitung nilai perangkingan semua alternatif
 * @returns {undefined}
 */
Saw.prototype.calculateRank = function() {
    for (var i = 0; i < this.alternative.length; i++) {
        this.alternative[i].calculateRank(this.bobot);
    }
};

/**
 * Method untuk mengambil semua alternatif berdasar urutan prioritasnya
 * @returns {Array} Array yang berisi alternatif yang telah diurutkan
 * berdasar nilai perangkingannya dari terbesar hingga terkecil
 */
Saw.prototype.getAlternativePriority = function() {
    this.sortAlternativeByRank();
    return this.alternative;
};

/**
 * Method untuk mengurutkan alternatif berdasar nilai perangkingannya
 */
Saw.prototype.sortAlternativeByRank = function() {
    for (var i = 0; i < this.alternative.length; i++) {
        for (var j = i; j < this.alternative.length; j++) {
            if(this.alternative[j].getRank() > this.alternative[i].getRank()) {
                var temp = this.alternative[j];
                this.alternative[j] = this.alternative[i];
                this.alternative[i] = temp;
            }
        }
    }
};

Saw.prototype.printRanks = function() {
    for (var i = 0; i < this.alternative.length; i++) {
        this.alternative[i].print();
    }
};

Saw.prototype.printBobot = function() {
    for (var i = 0; i < this.bobot.length; i++) {
        this.bobot[i].print();
    }
};

Saw.prototype.printCriteriasValue = function() {
    for (var i = 0; i < this.alternative.length; i++) {
        this.alternative[i].printCriteria();
    }
};

Saw.prototype.printNormalizedCriteriasValue = function() {
    for (var i = 0; i < this.alternative.length; i++) {
        this.alternative[i].printNormalizedCriteria();
    }
};
