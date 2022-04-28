import React from "react";
import ClientNavigation from "./ClientNavigation";
import ClientBanner from "./ClientBanner";
const ClientHeader = () => {
  return (
    <React.Fragment>
      <ClientNavigation />
      <ClientBanner />
    </React.Fragment>
  );
};
export default ClientHeader;
