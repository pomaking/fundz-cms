this.Events = Events = new Mongo.Collection("events");

Events.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Event Title"
	},
	start: {
		type: Date,
		label: "Event Start"
	},
	end: {
		type: Date,
		label: "Event End"
	},
	slug: {
		type: String,
		label: "Slug"
	},
	content: {
		type: String,
		label: "Content",
		autoform: {
			afFieldInput: {
	      type: 'summernote',
	      //class: 'editor' // optional
	      // summernote options goes here
	    }
	  }
	},
	allDay: {
		type: Boolean,
		label: "All Day",
		optional: true
	},
	ownerId: {
		type: String,
		label: "Owner Id",
		autoValue: function(){
			if(this.isInsert){
				return Meteor.userId();
			}
		}
	}
}));