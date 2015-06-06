
/**
 * Shortcut to document.getElementById()
 * @param string id
 * @returns {Element}
 */
function getId(id) {
    var element = document.getElementById(id);

    return element;
}

/**
 * Shortcut to document.getElementsByName()
 * @param string name
 * @returns {NodeList} 
 */
function getName(name) {
    var elements = document.getElementsByName(name);
    
    return elements;
}

/**
 * 
 * @param string jsName Nama file javascript
 */
function require(jsName) {
    var jsPath = "js/";
    
    var fileref = document.createElement("script");
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", jsPath + jsName);
    
    document.body.appendChild(fileref);
    
}