import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';

svg4everybody();
objectFitImages();

window.objectFitImages = objectFitImages;

require('ninelines-ua-parser');
