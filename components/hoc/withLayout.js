// react
import React from "react";

const withLayout = (WrappedComponent, Layout) => {
  const hocComponent = ({ ...props }) => {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };

  return hocComponent;
};
export default withLayout;
