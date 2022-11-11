import React from "react"
import "./style.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ReceiptIcon from '@mui/icons-material/Receipt';

const Footer = () => {
  return (
    <>
      <footer>
      <div className='footerAlign'>
        <div className='footerLine' >
            <div className='socialMedia'>
                <IconButton>
                    <FacebookIcon sx={{ fontSize: 40 }}/>
                </IconButton>
            </div>
            <div className='socialMedia'>
                <IconButton>
                    <WhatsAppIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </div>
            <div className='socialMedia'>
                <IconButton  href='https://www.instagram.com/p/Ci5ipoZOVb6/?hl=es'>
                    <InstagramIcon sx={{ fontSize: 40 }}/>
                </IconButton>
            </div>
        </div>
        <div className='footerLine' >
            <div className='footerElement'>
                <IconButton edge="start" size='large' aria-label="menu" sx={{ mr: 2 }}>
                    <PersonIcon/>
                </IconButton>
                <h2>Servico al cliente</h2>
                <div>
                    <ul>
                        <li><a href='#'>Mis pedidos</a></li>
                        <li><a href='#'>Mis Favoritos</a></li>
                    </ul>
                </div>
            </div>
            <div className='footerElement'>
                <IconButton>
                    <ShoppingBagIcon/>
                </IconButton>
                <h2>Politicas de la tienda</h2>
                <div>
                    <ul>
                        <li><a href='#'>Sobre Nosotros</a></li>
                        <li><a href='#'>Aviso de Privacidad</a></li>
                        <li><a href='#'>Politicas de Venta en Linea</a></li>
                    </ul>
                </div>
            </div>
            <div className='footerElement'>
                <IconButton>
                    <SupportAgentIcon/>
                </IconButton>
                <h2>Soporte Tecnico</h2>
                <div>
                    <ul>
                        <li><a href='#'>Preguntas Frecuentes</a></li>
                        <li><a href='#'>Contactenos</a></li>
                    </ul>
                </div>
            </div>
            <div className='footerElement'>
                <IconButton>
                    <ReceiptIcon/>
                </IconButton>
                <h2>Facturacion</h2>
                <div>
                    <ul>
                        <li><a href='#'>Facturacion Electronica</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='txtCentrado' >
            <p>Librería El R S.A. de C.V. Todos los Derechos Reservados.<br/>
                Los precios de los productos están sujetos a cambio sin previo aviso.<br/>
                Los precios mostrados incluyen IVA.<br/>
                Profe ponganos 6 pa irnos de vacaciones desde ahorita
            </p>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer
