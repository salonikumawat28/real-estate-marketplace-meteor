import { Meteor } from 'meteor/meteor';
import { prePopulate } from './db/db_initializer';
import './api/userProfileMethods';
import './api/realestateMethods';

Meteor.startup(() => {
  prePopulate();
});