Photos = new Meteor.Collection("photos");

if (Meteor.isClient) {
  var selectedMarkerId = new Blaze.ReactiveVar(null);

  Deps.autorun(function () {
    selectedMarkerId.set(Session.get("currentPhoto"));
  });

  Tracker.autorun(function () {
    if (Reload.isWaitingForResume()) {
      alert("Close and reopen this app to get the new version!");
    }
  });

  Template.map.helpers({
    markers: Photos.find(),
    selectedMarkerId: selectedMarkerId
  });

  var onSuccess = function (imageData) {
    var latLng = Geolocation.latLng();

    if (! latLng) {
      return;
    }

	Session.set('justTakenImage', imageData);
	Router.go('/add-caption');

	// Router.go("/list");
  };

  Template.layout.events({
    "click .photo-link": function () {
		console.log('taking a picture');
      MeteorCamera.getPicture(function (error, data) {
        // we have a picture
        if (! error) {
          onSuccess(data);
        }
      });
    }
  });

  Template.layout.helpers({
    onPage: function (pageName) {
      return Router.current().route.name === pageName;
    }
  });

  Template.list.helpers({
    photos: function () {
      return Photos.find({}, {sort: {"createdAt": -1}});
    }
  });

  Template.addCaption.events({
	  'click .submit': function (event, templateInstance) {
		  event.preventDefault();
		  var latLng = Geolocation.latLng();
		  var caption = templateInstance.$('.caption').val();
		  // TODO(ih) try wihtout Session, get from templateInstance
		  var imageData = Session.get('justTakenImage');
		  var photoId = Photos.insert({
			  image: imageData,
			  caption: caption,
			  createdAt: new Date(),
			  marker: {
				  lat: latLng.lat,
				  lng: latLng.lng,
          infoWindowContent: ""
			  }
		  });
      Photos.update({
        _id: photoId
      }, {
        $set: {'marker.infoWindowContent': "<div>" + caption + "</div>" + "<a href='/pictures/" + photoId + "'> <img width='100' src='" + imageData + "' /></a>"
      }});
		  Router.go('/map/' + photoId);
	  }
  });

  Template.picture.helpers({
    picture: function (id) {
      return Photos.find({_id: id});
    }
  });

  Template.picture.events({

  })
}