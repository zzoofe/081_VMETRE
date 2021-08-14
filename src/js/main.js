import './vendor';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import swipers from "./components/swipers";
import filter from './components/filter'
import map from './components/map';

ieFix();
vhFix();
swipers.init();
filter.init();
map.init();
