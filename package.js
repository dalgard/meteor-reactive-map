Package.describe({
  name: "dalgard:reactive-map",
  version: "0.1.0_3",
  summary: "ReactiveDict without the JSON",
  git: "https://github.com/dalgard/meteor-reactive-map",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2.0.2");

  api.use([
    "ecmascript",
    "check",
    "tracker",
    "stevezhu:lodash@3.10.1"
  ], "client");

  api.addFiles("lib/reactive-map.js", "client");

  api.export("ReactiveMap", "client");
});
