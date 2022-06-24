const controles = document.getElementById('controles');
const btn = document.querySelector('.btn');
const cssText = document.querySelector('.css');
controles.addEventListener('change', handleChange);

const styleList = {
    element: btn,
    text(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'px';
    },
}

function handleChange(event){
    styleName = event.target.name;
    styleValue = event.target.value;

    styleList[styleName](styleValue);
    saveChanges(styleName, styleValue);
    showCss();
}

function saveChanges(name, value){
    localStorage[name] = value;
}

function applySavedChanges(){
    const propriedades = Object.keys(localStorage);
    propriedades.forEach(propriedade => {
        styleList[propriedade](localStorage[propriedade]);
        controles.elements[propriedade].value = localStorage[propriedade];

    })
    showCss();
}
applySavedChanges();

 function showCss(){
     cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}


