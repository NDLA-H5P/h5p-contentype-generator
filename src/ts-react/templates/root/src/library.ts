import type { Library } from "h5p-types";

export const library: Library = {
  title: "<%= title %>",
  machineName: "H5P.<%= titlePascalCase %>",
  majorVersion: 1,
  minorVersion: 0,
  patchVersion: 0,
  runnable: 1,
  preloadedJs: [
    {
      path: "src/<%= titleKebabCase %>.js",
    },
  ],
  preloadedDependencies: [
    <% if (hasEditor) { %>{
      machineName: "H5PEditor.<%= titlePascalCase %>",
      majorVersion: 1,
      minorVersion: 0
    }<% } %>],
};
