import React from "react";
import T from "i18n-react";

import { ReactComponent as Logo } from "images/acme-logo.svg";
import { ReactComponent as Whoops } from "images/whoops.svg";

export default ({ children }) => (
  <div className="tc">
    <Logo className="w4 pa3" alt={T.translate("companyName")} />
    <div className="f1 pa4">{T.translate("whoops")}</div>
    <Whoops alt={T.translate("whoops")} />
    {children}
  </div>
);
