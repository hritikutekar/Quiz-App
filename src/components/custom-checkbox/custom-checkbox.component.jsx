import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

const CustomCheckbox = withStyles({
  root: {
    color: "#585A85",
    "&$checked": {
      color: "#2ABFC7",
    },
  },
  checked: {},
})((props) => (
  <Checkbox
    icon={<CircleUnchecked />}
    checkedIcon={<CircleChecked />}
    color='default'
    {...props}
  />
));

export default CustomCheckbox;
