import './vendor';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import swipers from "./components/swipers";

ieFix();
vhFix();
swipers.init();
