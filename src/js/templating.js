import itemsTemplate from '../templates/menu-items.hbs';
import menuItems from '../menu.json';

const markup = itemsTemplate(menuItems);

export default markup;
