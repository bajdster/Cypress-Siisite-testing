class offertDetails
{
    get firstJobDetails()
    {
        return cy.get(':nth-child(1) > .sii-o-card-internship > .sii-o-card-internship__left > .sii-o-card-internship__title > a')
    }

    openJobDetailsAndBack()
    {   

        this.firstJobDetails.click()
        cy.url().should('include', '/oferty-pracy/id/');
        cy.go("back")
    }
}

export default new offertDetails()