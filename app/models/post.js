import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  createdDate: DS.attr('date'),
  text: DS.attr()
});
