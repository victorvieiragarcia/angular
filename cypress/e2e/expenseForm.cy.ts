class RegisterForm {
  elements = {
    nameInput: () => cy.get('#name'),
    nameFeedback: () => cy.get('#nameFeedback'),
    valueInput: () => cy.get('#value'),
    valueFeedback: () => cy.get('#valueFeedback'),
    addAccoutPayableBtn: () => cy.get('#addAccoutPayable')
  };

  typeName(text: string) {
    if (!text) return;
    this.elements.nameInput().type(text);
  }

  typeValue(text: string) {
    if (!text) return;
    this.elements.valueInput().type(text);
  }

  clickAddAccoutPayable() {
    this.elements.addAccoutPayableBtn().click();
  }
}

const register = new RegisterForm();
describe('Inputs invalidas', () => {
  const input = {
    name: '',
    value: '',
  };

  it('Visitar', () => {
    cy.visit('http://localhost:4200/expenses/register');
  });

  it(`Quando eu não digitar "${input.name}" o nome é invalido`, () => {
    register.typeName(input.name);
  });

  it(`Quando eu não digitar "${input.value}" o valor é invalido`, () => {
    register.typeValue(input.value);
  });

  it(`Então eu clico no botão`, () => {
    register.clickAddAccoutPayable();
  });

  it(`Então eu deveria ver "Nome obrigatório"`, () => {
    register.elements.nameFeedback().should('have.text', 'Nome obrigatório');
  });

  it(`Então eu deveria ver "Valor obrigatório"`, () => {
    register.elements.valueFeedback().should('have.text', 'Valor obrigatório');
  });

});

describe('Inputs validas', () => {
  const input = {
    name: 'Test cypress',
    value: '100',
  };

  it('Visitar', () => {
    cy.visit('http://localhost:4200/expenses/register');
  });

  it(`Quando eu não digitar "${input.name}" nome valido`, () => {
    register.typeName(input.name);
  });

  it(`Quando eu não digitar "${input.value}" valor valido`, () => {
    register.typeValue(input.value);
  });

  it(`Então eu clico no botão`, () => {
    register.clickAddAccoutPayable();
  });

  it(`Então eu deveria ver "Test cypress e R$1.00"`, () => {
    cy.get('#table-accounts-payable').find('tr').eq(1).find('td').eq(0).should('have.text', 'Test cypress');
    cy.get('#table-accounts-payable').find('tr').eq(1).find('td').eq(1).should('have.text', 'R$1.00');
  });

  

  
});
