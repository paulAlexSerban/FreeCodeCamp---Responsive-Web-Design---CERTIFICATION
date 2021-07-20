require('normalize.css/normalize.css');
import './tribute_page.styles.scss';

// import STRUCTURE
import headerStructure from '../../ui_ux/structure/header/header';
import navigationStructure from '../../ui_ux/structure/navigation/navigation';

// init STRUCTURE
new headerStructure;
new navigationStructure;

console.log('hello tribute page');