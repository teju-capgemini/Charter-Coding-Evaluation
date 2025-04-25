import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { LINKS } from '../../constant/linkConstant';

const Error = () => {
  const navigate = useNavigate();

 return(
  <>
  <title>
    Error: Not Found
  </title>
<Box
  sx={{
    backgroundColor: 'background.paper',
    flexGrow: 1
  }}
>
  <Container
    sx={{
      px: 5,
      py: 14,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh'
    }}
  >
    <Box
      sx={{
        '& img': {
          maxWidth: '100%'
        }
      }}
    >
    </Box>
    <Typography
      align="center"
      sx={{ mb: 0 }}
      variant="h3"
    >
      Nothing here!
    </Typography>
    <Typography
      align="center"
      color="text.secondary"
      variant="body2"
    >
      The requested page does not exist.
    </Typography>
    <Button
      onClick={()=>{navigate(LINKS.DASHBOARD)}}
      sx={{ mt: 2 }}
    >
      Goto Dashboard
    </Button>
  </Container>
</Box>
</>
 )
}

export default Error;