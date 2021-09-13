import AvailableDishes from "./AvailableDishes";
import DishesSummary from "./DishesSummary";
import { Fragment } from "react/cjs/react.production.min";

const Menu = (props) => {
  return (
    <Fragment>
      <DishesSummary />
      <AvailableDishes />
    </Fragment>
  );
};

export default Menu;
