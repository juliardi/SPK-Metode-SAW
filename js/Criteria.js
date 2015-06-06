
/**
 * Constructor class Criteria
 * @param string name Nama Kriteria
 * @param float value Nilai Kriteria
 * @param boolean benefit Default true
 */
function Criteria(name, value, benefit, normalized) {
    this.name = name;
    this.value = value;
    this.benefit = (benefit === undefined) ? true : benefit;
    this.normalized = (normalized === undefined) ? false : normalized;
}

Criteria.prototype.isNormalized = function() {
    return (this.normalized) ? true : false;
};

Criteria.prototype.isBenefit = function() {
    return (this.benefit) ? true : false;
};

Criteria.prototype.print = function() {
    var str = 'cName : '+this.name + ' | ';
    str += 'cValue : ' + this.value + ' | ';
    str += 'cBenefit : ' + this.benefit + ' | ';
    str += 'cNormalized : ' + this.normalized;
    console.log(str);
};
