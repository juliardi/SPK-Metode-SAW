
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