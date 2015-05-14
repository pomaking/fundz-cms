Meteor.publish("singlePost", function(postId){
	check(postId, String);
	return Posts.find({_id: postId});
});

Meteor.publish("allPosts", function(shopOwnerId){
	check(shopOwnerId, String);
	return Posts.find({ownerId: shopOwnerId});
})

Meteor.publish("singlePage", function(pageId){
	check(pageId, String);
	return Pages.find({_id: pageId});
});

Meteor.publish("allPages", function(shopOwnerId){
	check(shopOwnerId, String);
	return Pages.find({ownerId: shopOwnerId});
})

Meteor.publish("singleEvent", function(eventId){
	check(eventId, String);
	return Events.find({_id: eventId});
});

Meteor.publish("allEvents", function(shopOwnerId){
	check(shopOwnerId, String);
	return Events.find({ownerId: shopOwnerId});
})