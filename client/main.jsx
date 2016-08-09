import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { renderRoutes } from '../imports/routes';

Meteor.startup( ()=>{
    render(renderRoutes(), document.getElementById('react-mount'));
});
