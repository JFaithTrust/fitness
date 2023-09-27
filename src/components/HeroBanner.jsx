import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import HeroBannerImage from "../assets/images/herobanner.avif"

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FFBE0B" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        color="#FBFAF3"
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography
        color="#FBFAF3"
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FFBE0B",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "black",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        color="#FFFF80"
        fontWeight={600}
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
        style={{ objectFit: 'cover', borderBottomLeftRadius: '45px', opacity: '0.8'}}
      />
    </Box>
  );
};

export default HeroBanner;
