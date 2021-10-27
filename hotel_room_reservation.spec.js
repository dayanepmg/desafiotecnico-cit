Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

context('Hotel Room Reservation', () => {
    beforeEach(() => {
      //1 - Acessar o site https://123milhas.com/  
      cy.visit("https://123milhas.com/")
    })
  
    it('Reserva quarto de hotel.', () => {
      // 2 - Acessar a aba Hotéis
      cy.get(':nth-child(4) > .nav-header-links__anchor').click()
      //3 - Em destino, adicionar um local de sua escolha
      cy.get('#txtHotelLocation').type('São')
      cy.wait(300)
      cy.contains('São Paulo, Brasil (todos os aeroportos)').click()
      //4 - Em Check-in/Check-out adicionar uma data de sua escolha.
      cy.get('#checkinDate').click()
      cy.contains('27').click()
      cy.contains('30').click()
      //5 - Em Quartos e hóspedes, adicionar 2 adultos e duas crianças, uma de 9 anos e outra de 10 anos.
      cy.get('#passengerSelectRooms').click()
      cy.get('#btnIdChildAdd-1').click().click()
      cy.xpath("//*[@id='rooms[0].children.ages[0]']").select('9 anos')
      cy.xpath("//*[@id='rooms[0].children.ages[1]']").select('10 anos')
      //6 - Clicar em Buscar
      cy.get('#searchHotelSubmit').click().click()
     })
  })
  