
/**
 * Class untuk mendefinisikan bobot
 * @param string criteriaName Nama criteria yang dibobot
 * @param float value Nilai bobot
 * @returns {Bobot}
 */
function Bobot(criteriaName, value) {
    this.criteriaName = criteriaName;
    this.value = value;
}

Bobot.prototype.print = function() {
    var str = 'bName : '+this.criteriaName + ' | ';
    str += 'bValue : '+this.value;
    console.log(str);
};
