import {run} from "./app/app"
import { AlertService } from "./app/alert.service.js";
import {ComponentService} from "./app/component.service.js"
import "./main.css"

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService,componentService);


