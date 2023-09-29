import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalCards from "./HorizontalCards";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        color="#FBFAF3"
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FFBE0B", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalCards data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        color="#FBFAF3"
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FFBE0B", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {equipmentExercises.length !== 0 ? (
          <HorizontalCards data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
