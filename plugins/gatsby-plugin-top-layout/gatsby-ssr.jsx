/* eslint-disable import/prefer-default-export */
import * as React from "react";
import TopLayout from "./TopLayoutComponent";

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <TopLayout {...props}>{element}</TopLayout>
};