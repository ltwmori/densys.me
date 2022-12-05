import React from "react";
import { createStyles, SegmentedControl } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing.md,
    color: `${theme.black} !important`,
  },

  active: {
    backgroundImage: `${theme.blue} !important`,
  },

  control: {
    border: "0 !important",
  },

  labelActive: {
    color: `${theme.black} !important`,
  },
}));

const RadioButton = () => {
  const { classes } = useStyles();
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={["Administrator", "Doctor", "Patient"]}
      classNames={classes}
    />
  );
};

export default RadioButton;
