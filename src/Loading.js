import React from "react";
import Lottie from "react-lottie";
import * as loading from "./PresentLogo";
import * as done from "./done.json";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid",
  },
};

const Loading = ({ loading }) => {
  return (
    <Grid container justify="center">
      <Grid item container={true} xs={12}>
        <Lottie options={defaultOptions} height={"100vh"} width={"100vh"} />
      </Grid>
    </Grid>
  );
};

export default Loading;
