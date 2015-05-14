Package.describe({
  summary: "Fundeeze cms",
  name: "fundz:cms",
  version: "0.0.1",
  git: "https://github.com/ongoworks/reaction-helloworld.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.0');
  api.use("meteor-platform");
  api.use("templating");
  api.use("coffeescript");
  api.use("less");
  api.use("reactioncommerce:core");
  api.use("yogiben:admin");
  api.use("mpowaga:autoform-summernote");
  
  api.addFiles("common/Events.js", ["client", "server"]);
  api.addFiles("common/Pages.js", ["client", "server"]);
  api.addFiles("common/posts.js", ["client", "server"]);
  api.addFiles("common/adminConfig.js", ["client", "server"]);
  
  /*api.addFiles("lib/neo4j.js", ["client", "server"]);
  api.addFiles("lib/neo4j.js", ["client", "server"]);*/

});