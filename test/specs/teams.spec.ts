import TeamsPage from "../pageobjects/teams.po";
import * as chai from "chai";
const assert = chai.assert;

describe('Validate RCB team submission for an upcoming match', function () {
  it("Test to validate that team should have only 4 foreign players", () => {
    assert.equal(TeamsPage.getForeignPlayers.length, 4, "foreign players count should be four");
  })
  it("Test to validate that team should have at least 1 Wicket Keeper", () => {
    assert.isAtLeast(TeamsPage.getWicketKeepers.length, 1, "There should at least 1 Wicker Keeper")
  })
});
