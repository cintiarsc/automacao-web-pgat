import cadastro from "../cadastro"

class Menu {
    menus = {
        PRODUTOS:'Products'
}

irparaProdutos() {
    cy.contains('Products').click()
}

irParaLoginCadastro(){ 
    cy.contains('Signup').click()

    return cadastro
}
    irParaMenu(menu) {
        cy.contains(menu).click()

    }
}

export default new Menu()