import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";

addDecorator(withKnobs);

const req = require.context("../app", true, /^\.\/[^\/]+\/((?!node_modules).)*\.stories\.ts(x)?$/);

function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => req(filename));
}

configure(loadStories, module);
