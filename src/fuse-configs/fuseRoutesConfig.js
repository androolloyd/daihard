import React from "react";
import { Redirect } from "react-router-dom";
import { FuseUtils } from "@fuse/index";
import { ExampleConfig } from "main/content/example/ExampleConfig";

const routeConfigs = [ExampleConfig];

export const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/example",
    component: () => <Redirect to="/example" />
  },
  {
    path: "/test",
    component: () => <Redirect to="/test" />
  },
];
