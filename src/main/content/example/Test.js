import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageSimple, DemoContent } from "@fuse";

const styles = theme => ({
  layoutRoot: {}
});

class Test extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>TEST</h2>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Test);
