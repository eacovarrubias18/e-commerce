import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Precios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Los precios y la disponibilidad de productos están sujetos a cambio sin previo aviso.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Formas de pago</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se acepta como formas de pago las siguientes: <br></br>
            <br></br>
            -Tarjeta de Crédito y/o débito.<br></br>
            Para pagar con tarjeta de crédito y/o débito es necesario ser el titular de la tarjeta, 
            los 16 dígitos de la tarjeta, fecha de vencimiento y la clave de seguridad 
            (3 dígitos) ubicada al reverso de la tarjeta.
            <br></br>
            <br></br>
            -Comprapago <br></br>
            Al seleccionar Compra Pago como forma de pago, vía electrónica se le 
            proporcionará una orden de pago que contiene los siguientes datos:
            <br></br>
            1-Fecha límite de pago – Vigencia 48 hrs.<br></br>
            2-Instrucciones y referencia de pago. <br></br>
            3-Establecimientos de pago seleccionada, entre las cuales contamos con: <br></br>
            -7-Eleven<br></br>
            -Oxxo<br></br>
            -Coppel<br></br>
            -Santander<br></br>
            -Banorte<br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Facturación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Es importante proporcionar sus datos fiscales al momento de generar su 
          pedido para la emisión de su comprobante fiscal en tiempo y forma, de lo 
          contrario una vez enviado el pedido a su destino la factura no será emitida.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4-content" id="panel4d-header">
          <Typography>Protección de la información</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          La información proporcionada por el usuario, está asegurada por un número de identificación 
          personal al cual sólo el usuario podrá acceder y de la cual sólo él tiene conocimiento. <br></br><br></br>
          Le recomendamos que no revele su contraseña a nadie. <br></br><br></br>
          En todo momento, el usuario es el responsable único y final de mantener en secreto 
          su número de usuario / socio, contraseña personal, clave de acceso y número confidencial 
          con los cuales tenga acceso a los servicios y contenidos de nuestro sitio.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}