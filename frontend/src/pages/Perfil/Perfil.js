import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call'
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import InterestsIcon from '@mui/icons-material/Interests';
import SchoolIcon from '@mui/icons-material/School';
import { LogoutSubmit } from '../../services/usercrud';


import {
    DataContainer,
    DataAlign,
    Value,
    Label,
    Divider,
    PictureNameContainer,
    UserNameText,
  } from "./Styles"

const theme = createTheme();

export default function Perfil() {
  const navigate = useNavigate();
  const handleLogout = (jwtIsSet = true) => {
      if (jwtIsSet)
        LogoutSubmit()

      setUser(undefined);
      forgetUser();
      navigate("/");

    } 


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" >
      <Grid container spacing={80}>
      <Grid item xs={12} sm={6}>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Home
            </Button>
      </Grid>
      </Grid>
      <Container maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "100%",
              height: "200%",
            },
          }}
        >
        <Paper>
            <Divider style={{
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: '#e0c4df',
            }}
            >
              <PictureNameContainer>
                  <AccountCircleIcon style={{
                    fontSize: 100,
                  }}>
                  </AccountCircleIcon>
                  <UserNameText>
                  {userData.name}
                </UserNameText>
              </PictureNameContainer>
              <DataContainer>
                <DataAlign>
                  <MailIcon />
                  <Label> Email: </Label>
                  <Value> {userData.email} </Value>
                </DataAlign>
                <DataAlign>
                  <InterestsIcon />
                  <Label> Interesses/Hobbies: </Label>
                  <Value> {userData.interesses} </Value>
                </DataAlign>
                <DataAlign>
                  <SchoolIcon />
                  <Label> Período: </Label>
                  <Value> {userData.periodo} </Value>
                </DataAlign>
                <DataAlign>
                  <BookIcon />
                  <Label> Matérias: </Label>
                  <Value> {userData.materias} </Value>
                </DataAlign>
              </DataContainer>
              </Divider>
          </Paper>
        </Box>
      </Container>
      </Container>
    </ThemeProvider>
  );
}