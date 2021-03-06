import {SystemReducer} from "./ducks/System";
import {LayoutReducer} from "./ducks/Layout";
import {ProjectReducer} from "./ducks/Project";
import {ConsignReducer} from "./ducks/Consign";
import {ContractReducer/*,ContractCheckReducer*/} from "./ducks/Contract";
import {TestProblemReducer} from "./ducks/TestProblem";
import {TestPlanReducer} from "./ducks/TestPlan";
import {TestCaseReducer} from "./ducks/TestCase";
import {TestRecordReducer} from "./ducks/TestRecord";
import {TestReportReducer/*,TestReportCheckReducer*/} from "./ducks/TestReport";
import {TestReportCheckReducer} from "./ducks/TestReportCheck";
import {TestWorkCheckReducer} from "./ducks/TestWorkCheck";
import {SatisfactionReducer} from "./ducks/Satisfaction";

export const moduleReducers = {
    System: SystemReducer,
    Layout: LayoutReducer,
    Project: ProjectReducer,
    Consign: ConsignReducer,
    Contract: ContractReducer,
    //ContractCheck: ContractCheckReducer,
    TestPlan: TestPlanReducer,
    TestCase: TestCaseReducer,
    TestRecord: TestRecordReducer,
    TestProblem: TestProblemReducer,
    TestReport: TestReportReducer,
    TestReportCheck: TestReportCheckReducer,
    TestWorkCheck: TestWorkCheckReducer,
    Satisfaction: SatisfactionReducer,
};