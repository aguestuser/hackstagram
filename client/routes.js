Router.map(function() {
  this.route('map', {
    path: '/',
    data: function () {
      Session.set("currentPhoto", null);
    }
  });
  this.route('addCaption', {
	template: 'addCaption',
	path: '/add-caption',
	data: function () {
		return {
			// TODO(ih) try to do this wihout using Session
			imageData: Session.get('justTakenImage')
		};
	}
  });
  this.route("mapWithPhoto", {
    template: "map",
    path: 'map/:_id',
    data: function () {
      Session.set("currentPhoto", this.params._id);
    }
  });
  this.route('camera-page');
  this.route("list");
});

Router.configure({
  layoutTemplate: "layout"
});
