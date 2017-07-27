import _ from 'lodash';
import './site.css';
import me from './img/sandy.jpg';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myImg = new Image();
  myImg.src = me;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());