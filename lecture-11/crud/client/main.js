import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/admin/users.html';

Router.route('/admin', {
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.redirect('/');
    } else {
      this.render('admin');
    }
    this.next();
  }
  
});

Router.route('/admin/users', {
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.redirect('/');
    } else {
      this.render('adminUsers');
    }
    this.next();
  }
  
});

Router.route('/', function () {
  if (!Meteor.userId()) {
    this.render('login');
  }
  else{
    this.render('loggedIn');
    this.next();
  }
});
