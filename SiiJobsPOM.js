import HomePage from "../support/Sii-sites/homepage"
import carierPageCheckBox from "../support/Sii-sites/cariersite-checkbox"
import offertDetails from "../support/Sii-sites/offert-details"
import cariersiteInput from "../support/Sii-sites/cariersite-input"

describe("Tests E2E - Sii Kariera", ()=>
{
    before(()=>
    {
        HomePage.openJobSearch()
    })

    it("Find tester's job offers from Lublin - checkboxes", ()=>
    {
        carierPageCheckBox.chooseCityAndCategory()
        carierPageCheckBox.checkSearching()
        cy.wait(3000)
        carierPageCheckBox.checkNumberOfOfferts()
        carierPageCheckBox.saveJobOfferts()
    })

    it("Verify opening first job offert details page", ()=>
    {
        offertDetails.openJobDetailsAndBack();
    })

    it("Clear searching results",()=>
    {
        cy.clearResults();
        carierPageCheckBox.searchTagLink.should("not.be.visible");
    })

    it("Find tester's job offers from Lublin - search input", ()=>
    {
        cariersiteInput.typeCityAndCategory()
        cariersiteInput.checkSearching()
        cy.wait(3000)
        cariersiteInput.checkNumberOfOfferts()
    })

    it("Clear searching results",()=>
    {
        cy.clearResults();
        carierPageCheckBox.searchTagLink.should("not.be.visible");
    })

    it("Verify incorrect typing sequence",()=>
    {
        cariersiteInput.verifyIncorrectSequence();
    })
})
