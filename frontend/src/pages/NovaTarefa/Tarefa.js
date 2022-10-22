import React from 'react';

import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call'
import DateRangeIcon from '@mui/icons-material/DateRange';
//import DefaultUser from '../../../assets/DefaultUser.png'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//import { useNavigate } from 'react-router-dom';

//import ImagePickModal from '../../../components/ImagePickModal/ImagePickModal';

import {
  Divider,
  PictureNameContainer,
  DataContainer,
  DataAlign,
  UserNameText,
  Avatar,
  Value,
  Label,
  ButtonAlign,
  ContractCreateForm
} from "./Styles"

//import InputMask from 'react-input-mask';

import {
  Container,
  Toolbar,
  Box,
  Paper,
  Button,
  TextField
} from '@mui/material';

//import PageHeader from '../../../components/PageHeader/PageHeader';
import PersonIcon from '@mui/icons-material/Person';
import { flexbox } from '@mui/system';
//import { useAuth } from '../../../services/AuthContext';


export default function Tarefa() {

  //const { handleContractCreate } = useAuth();

  // const [phone, setPhone] = React.useState(0);

  const [value, setValue] = React.useState<Date | null>(null);



  //const [value, setValue] = React.useState<Date | null>(
  //  new Date('2014-08-18'),
  //);

  //const handleChange = (newValue: Date | null) => {
  //  setValue(newValue);
  //};

  //const navigate = useNavigate();

  return (
    <Container>
      <Toolbar />
      <Container maxWidth="lg"

      >
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
          <Paper style={{
            paddingBottom: '40px',
          }}>


            <ContractCreateForm
              
            >



              <Divider style={{
                paddingLeft: 120,
                paddingRight: 120,
                margin: 30,
              }}>
              <DataContainer>
                <DataAlign>
                  <Label> Título </Label>
                  <Value>
                    <TextField
                      id="outlined-basic-title"
                      variant="outlined"
                      type="name"
                      name="title"
                      style={{
                        backgroundColor: 'var(--app-beige)',
                        borderRadius: 10,
                        width: 400,
                        //minWidth:230
                      }}
                    />
                  </Value>
                </DataAlign>
                <DataAlign>
                  <Label> Cliente </Label>
                  <Value>
                    <TextField
                      id="outlined-basic-clientName"
                      variant="outlined"
                      type="name"
                      name="clientName"
                      style={{
                        backgroundColor: 'var(--app-beige)',
                        borderRadius: 10,
                        width: 400,
                        //minWidth:230
                      }}
                    />
                  </Value>
                </DataAlign>
                <DataAlign>
                  <Label> Valor </Label>
                  <Value>
                    oi
                  </Value>
                </DataAlign>
                <DataAlign>
                  <Label> Data </Label>
                  <Value>
                  oi
                  </Value>
                </DataAlign>
                </DataContainer>
              </Divider>
              <ButtonAlign>
                <Button
                  component="label"
                  variant="outlined"
                  style={{ 
                    textTransform: 'none',
                    width: '18%',
                    fontWeight: 600,
                    borderRadius: 10,
                    height: 44,
                    fontSize: 18,
                    color: 'var(--app-rosa)',
                    margin: 10,
                    borderBlockColor: 'var(--app-rosa)',
                    borderColor: 'var(--app-rosa)'
                  }}
                  
                >
                  Enviar Arquivo
                  <input
                    type="file"
                    hidden
                  />
                  </Button>
              </ButtonAlign>
              <ButtonAlign>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    textTransform: 'none',
                    // paddingRight: 160,
                    // paddingLeft: 160,
                    alignSelf: 'center',
                    width: '35%',
                    fontWeight: 600,
                    borderRadius: 10,
                    height: 44,
                    fontSize: 18,
                    color: 'white',
                    margin: 10,
                  }}
                >Cadastrar</Button>
              </ButtonAlign>
            </ContractCreateForm>
          </Paper>
        </Box>
      </Container>
    </Container>
  );
}