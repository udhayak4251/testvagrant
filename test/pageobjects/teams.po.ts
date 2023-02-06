import * as dataOfRcbTeam from "../../testdata/teamRCB.json";
import { Page } from "./page.po";
class TeamsPage extends Page {
    public get getForeignPlayers() {
        return dataOfRcbTeam.player.filter((player) => player.country != 'India');
    }

    public get getWicketKeepers() {
        return dataOfRcbTeam.player.filter((player) => player.role == 'Wicket-keeper');
    }
}
export default new TeamsPage();