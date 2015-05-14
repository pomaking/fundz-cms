this.AdminConfig = AdminConfig = {
  collections: {
    Pages: {
      omitFields: ['ownerId'],
      tableColumns: [
        {label: 'Title', name: 'title'}
      ],
      selector: function(userId) {
        return {ownerId: userId}
      }
    },
    Posts: {
      omitFields: ['ownerId'],
      tableColumns: [
        {label: 'Title', name: 'title'},
        {label: 'Post Date', name: 'postDate'}
      ],
      selector: function(userId) {
        return {ownerId: userId}
      }
    },
  	Events: {
      omitFields: ['ownerId'],
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Event Date', name: 'showDate'},
        {label: 'Venue', name: 'venueId', collection: 'Venues', collection_property: 'name'}
      ],
      selector: function(userId) {
        return {ownerId: userId}
      }
  	}
  }
};