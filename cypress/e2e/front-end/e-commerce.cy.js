describe('My e-commerce', () => {
    /*it('clicking "type" navigates to a new url', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
      // Get an input, type into it
      cy.get('.action-email').type('fake@email.com')
      //  Verify that the value has been updated
      cy.get('.action-email').should('have.value', 'fake@email.com')
    })*/
    it('TestCase_001 | Inicio de sesion valido en My e-commerce', () => {
      cy.visit('http://www.testingyes.com/onlineshop/')
      cy.contains('Sign in').click()
      cy.get('.col-md-6 > .form-control').type('lolev46230@digdy.com')
      cy.get('.input-group > .form-control').type('Panama2024')
      cy.get('#submit-login').click()
      cy.contains('Omar Pinzon')
      })
    it('TestCase_002 | Inicio de sesion invalido en My e-commerce', () => {
      cy.visit('http://www.testingyes.com/onlineshop/')
      cy.contains('Sign in').click()
      cy.get('.col-md-6 > .form-control').type('invalid_login@digdy.com')
      cy.get('.input-group > .form-control').type('Panama2024')
      cy.get('#submit-login').click()
      cy.get('.alert')
    })
    it('TestCase_003 | Agregar producto al carrito de compras', () => {
      cy.visit('http://www.testingyes.com/onlineshop/')
      cy.contains('Sign in').click()
      cy.get('.col-md-6 > .form-control').type('lolev46230@digdy.com')
      cy.get('.input-group > .form-control').type('Panama2024')
      cy.get('#submit-login').click()
      cy.get('.logo').click()
      cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click()
      cy.get(':nth-child(2) > label > .input-color').click()
      cy.get('.add > .btn').click()
      cy.contains('Product successfully added to your shopping cart')
    })
    it('TestCase_004 | Eliminar producto al carrito de compras', () => {
      cy.visit('http://www.testingyes.com/onlineshop/')
      cy.contains('Sign in').click()
      cy.get('.col-md-6 > .form-control').type('lolev46230@digdy.com')
      cy.get('.input-group > .form-control').type('Panama2024')
      cy.get('#submit-login').click()
      cy.get('.logo').click()
      cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click()
      cy.get(':nth-child(2) > label > .input-color').click()
      cy.get('.add > .btn').click()
      cy.get('.cart-content-btn > .btn-primary').click()
      cy.get('.remove-from-cart > .material-icons').click()
      cy.contains('There are no more items in your cart')
    })
    it('TestCase_005 | Realizar la compra del producto', () => {
      cy.visit('http://www.testingyes.com/onlineshop/')
      cy.contains('Sign in').click()
      cy.get('.col-md-6 > .form-control').type('lolev46230@digdy.com')
      cy.get('.input-group > .form-control').type('Panama2024')
      cy.get('#submit-login').click()
      cy.get('.logo').click()
      cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click()
      cy.get(':nth-child(2) > label > .input-color').click()
      cy.get('.add > .btn').click()
      cy.contains('Product successfully added to your shopping cart')
      cy.get('.cart-content-btn > .btn-primary').click()
      cy.get('.text-sm-center > .btn').click()
      cy.get('.clearfix > .btn').click()
      cy.get('#delivery_message').type('Prueba automatizada por Omar')
      cy.get('#js-delivery > .continue').click()
      cy.get('#payment-option-2').click()
      cy.get('.js-terms').click()
      cy.get('.ps-shown-by-js > .btn').click()
      //cy.contains('YOUR ORDER IS CONFIRMED')
    })
  })
  