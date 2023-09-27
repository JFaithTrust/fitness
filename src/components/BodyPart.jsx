import { Stack, Typography } from '@mui/material';
import React from 'react'
import Icon from '../assets/icons/gym.png';

const BodyPart = ({bodyPart, item, setBodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    
    sx={bodyPart === item ? { borderTop: '4px solid #FFBE0B', background: 'black', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '35px' } : { background: 'black', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#FBFAF3" textTransform="capitalize"> {item}</Typography>
  </Stack>
  )
}

export default BodyPart