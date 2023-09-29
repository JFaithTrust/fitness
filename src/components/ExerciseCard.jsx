import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise, height, noneStyle }) => {
  return (
    <Link className="exercise-card" to={`/exercisedetail/${exercise.id}`} style={{ boxShadow: noneStyle, transform: noneStyle}}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ height: height }} />
      <Stack direction="row" mt={2}>
        <Button
          color="warning"
          variant="outlined"
          sx={{
            ml: "21px",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          color="primary"
          variant="outlined"
          sx={{
            ml: "21px",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#FBFAF3"
        fontWeight="bold"
        sx={{ fontSize: { lg: "20px", xs: "16px" } }}
        mt="11px"
        pb="20px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
