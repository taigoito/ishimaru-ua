/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 * @package Qwel
 */

import Preloader from './preloader.js';
new Preloader();

// Drawer Menu
import DrawerMenu from './drawerMenu.js';
new DrawerMenu();

// Scrolling
import Scrolling from './scrolling.js';
new Scrolling();

// Slider
import Slider from './slider.js';
const slider = document.querySelectorAll('.slider');
slider.forEach((elem) => {
  new Slider(elem);
});

import TabPannel from './tabPannel.js';
const pannel1 = new TabPannel({
  elem: document.getElementById('nailFootcarePannel'),
  menu: document.getElementById('nailFootcareMenu'),
  template: document.getElementById('nailFootcareMenu1')
});
const pannel2 = new TabPannel({
  elem: document.getElementById('relaxationPannel'),
  menu: document.getElementById('relaxationMenu'),
  template: document.getElementById('relaxationMenu1')
});

// Evil Icons
import EvilIcons from './evilIcons.js';
new EvilIcons();
