const React = require("react")
const TopLayout = require("./gastby-theme-material-ui-top-layout/components/top-layout")

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <TopLayout {...props}>{element}</TopLayout>
}