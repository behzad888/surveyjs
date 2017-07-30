import { Survey } from "../../src/aurelia/aureliasurvey";
import { Page } from "../../src/aurelia/page";

export default QUnit.module("auTests");

QUnit.test("Survey.auCurrentPage", function (assert) {
    var survey = new Survey();
    survey.addPage(createPageWithQuestion("Page 1"));
    survey.addPage(createPageWithQuestion("Page 2"));
    survey.addPage(createPageWithQuestion("Page 3"));
    assert.equal(survey.currentPage, survey.pages[0], "the first page is current");
    assert.equal(survey.auCurrentPage(), survey.currentPage, "au current page is equal");
    // assert.equal(survey.auIsFirstPage(), true, "is first page");
    // assert.equal(survey.auIsLastPage(), false, "is first page");
    // survey.nextPage();
    // assert.equal(survey.auCurrentPage(), survey.pages[1], "au current page is equal");
    // assert.equal(survey.auIsFirstPage(), false, "is second page");
    // assert.equal(survey.auIsLastPage(), false, "is second page");
    // survey.nextPage();
    // assert.equal(survey.auCurrentPage(), survey.pages[2], "au current page is equal");
    // assert.equal(survey.auIsFirstPage(), false, "is last page");
    // assert.equal(survey.auIsLastPage(), true, "is last page");
});

function createPageWithQuestion(name: string): Page {
    var page = new Page(name);
    page.addNewQuestion("text", "q1");
    return page;
}