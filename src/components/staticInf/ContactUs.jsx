import React from "react"
import './staticStyle.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';


const ContactUsInf = ( ) => {
  return (
    <>
      <section className='shop background'>
        <h1 className="title">Contactanos</h1>
          <div className="infBox">
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Nombre"
                />
                 <TextField
                  required
                  id="outlined-required"
                  label="Correo Electronico"
                  
                />
                <TextField
                  id="outlined-number"
                  label="Numero de Celular"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              
            </Box>
          </div>
          <h2 className="title">Deja tu comentario</h2>
          <div className="commentBox">
            <textarea rows="20" cols="70" ></textarea>
            <br></br>
            <Button variant="contained" >Enviar Comentario</Button>
          </div>
          <div className='title'>
          <div >
                <IconButton>
                    <FacebookIcon sx={{ fontSize: 40 }}/> Nuestra Pagina de Facebook
                </IconButton>
            </div>
            <div>
                <IconButton>
                    <WhatsAppIcon sx={{ fontSize: 40 }} /> Nuestro WhatsApp
                </IconButton>
            </div>
            <div >
                <IconButton  href='https://www.instagram.com/p/Ci5ipoZOVb6/?hl=es'>
                    <InstagramIcon sx={{ fontSize: 40 }}/> Nuestra Pagina de Instagram
                </IconButton>
            </div> 
          </div>       
      </section>
    </>
  )
}

export default ContactUsInf