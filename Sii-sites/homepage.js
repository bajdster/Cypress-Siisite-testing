class HomePage
{
    get carierMenu()
    {
        return cy.get('a[data-menu="20392"]');
    }

    get jobOffertMenu()
    {
        return cy.get('a[href="https://sii.pl/oferty-pracy/"]').parents(".sii-m-icons-menu__item ").eq(0)
    }

    openJobSearch()
    {
        cy.visit("www.sii.pl");
        this.carierMenu.click();
        this.jobOffertMenu.click()
    }
}

export default new HomePage();