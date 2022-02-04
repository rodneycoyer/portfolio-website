/* eslint-disable import/prefer-default-export */
import * as React from "react";
import TopLayout from "./TopLayoutComponent";

// Wraps every page in a component
export const wrapRootElement = ({ element, props }) => {
  return <TopLayout {...props}>{element}</TopLayout>
};