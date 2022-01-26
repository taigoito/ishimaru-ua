/**
 * Tab Pannel
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 * @package Qwel
 */

export default class TabPannel {
  constructor(options = {}) {
    const elem = options.elem;
    const menu = options.menu;
    const template = options.template;
    const content = document.importNode(template.content, true);
    elem.appendChild(content);

    menu.addEventListener('mouseenter', ()=> {
      console.log('enter');
      menu.classList.add('--active')
    });

    menu.addEventListener('mouseleave', ()=> {
      console.log('leave');
      menu.classList.remove('--active')
    });

    const menuItems = menu.querySelectorAll('a');
    menuItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        menuItems.forEach((item) => item.classList.remove('--active')); 
        const target = event.currentTarget;
        target.classList.add('--active');
        const href = target.getAttribute('href');
        const id = href.slice(1);
        const template = document.getElementById(id);
        const content = document.importNode(template.content, true);
        elem.innerHTML = '';
        elem.appendChild(content);
      });
    });
  }
}
