import React from "react";
import T from "i18n-react";
import { Link } from "react-router-dom";

import Error from "components/Error";
import routes from "routes";

export default () => (
  <Error>
    <div className="f4 pa3">{T.translate("cantFindPage")}</div>
    <Link to={routes.main.path} className="f6 no-underline pa3 blue-light">
      {T.translate("goToHomepage")}
    </Link>
  </Error>
);
