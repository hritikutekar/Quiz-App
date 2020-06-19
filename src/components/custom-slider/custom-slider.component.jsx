import withStyles from "@material-ui/core/styles/withStyles";
import { Slider } from "@material-ui/core";

const CustomSlider = withStyles({
  root: {
    padding: 0,
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  rail: {
    height: 4,
    borderRadius: 2,
  },
})(Slider);

export default CustomSlider;
