export class CreateElement {
    #element
    #classOrId
    constructor(classOrIdName, elementName, parentElement){
        this.#classOrId = classOrIdName.slice(0,1)
        classOrIdName = classOrIdName.slice(1)
        this.#element = document.createElement(elementName)

        if(this.#classOrId === '.'){
            this.#element.classList.add(classOrIdName)
        } else if (this.#classOrId === '#'){
            this.#element.id = classOrIdName
        } else {
            return console.log('Invalid class name or id, first char . for class or # for id') 
        }
        
        return parentElement?.insertBefore(this.#element, null) ?? 
            document.body.insertBefore(this.#element, null)

    }
}