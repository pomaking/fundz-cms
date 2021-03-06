this.Posts = Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title"
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
	slug: {
		type: String,
		label: "Slug"
	},
	ownerId: {
		type: String,
		label: "Owner Id",
		autoValue: function(){
			if(this.isInsert){
				return Meteor.userId();
			}
		}
	},
	/*postDate: {
		type: Date,
	}*/
}));