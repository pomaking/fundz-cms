Router.route("/pages", {
	name: "pages",
	controller: ShopController,
	onAfterAction: function(){
		if(Shops.findOne()){
			Meteor.subscribe("allPages", Shops.findOne({}).ownerId);
		}
	},
	data: function(){
		return {
			pages: function(){
				return Pages.find({ownerId: Shops.findOne({}).ownerId});
			}
		}
	}
});
Router.route("/posts", {
	name: "posts",
	controller: ShopController,
	onAfterAction: function(){
		if(Shops.findOne()){
			Meteor.subscribe("allPosts", Shops.findOne({}).ownerId);
		}
	},
	data: function(){
		return {
			posts: function(){
				return Posts.find({ownerId: Shops.findOne({}).ownerId});
			}
		}
	}
});
Router.route("/events", {
	name: "events",
	controller: ShopController,
	onAfterAction: function(){
		if(Shops.findOne()){
			Meteor.subscribe("allEvents", Shops.findOne({}).ownerId);
		}
	},
	data: function(){
		var self = this;
		return {
			allEvents: function(){
				return Events.find({_id: self.params._id});
			}
		}
	}
});
Router.route("/post/:_id", {
	name: "singlePost",
	controller: ShopController,
	waitOn: function(){
		return Meteor.subscribe("singlePost", this.params._id);
	},
	data: function(){
		var self = this;
		return {
			post: function(){
				return Posts.findOne({_id: self.params._id});
			}
		}
	}
});
Router.route("/page/:_id", {
	name: "singlePage",
	controller: ShopController,
	waitOn: function(){
		return Meteor.subscribe("singlePage", this.params._id);
	},
	data: function(){
		var self = this;
		return {
			page: function(){
				return Pages.findOne({_id: self.params._id});
			}
		}
	}
});
Router.route("/event/:_id", {
	name: "singleEvent",
	controller: ShopController,
	waitOn: function(){
		return Meteor.subscribe('singelEvent', this.params._id);
	},
	data: function(){
		var self = this;
		return {
			singleEvent: function(){
				return Events.findOne({_id: self.params._id});
			}
		}
	}
});