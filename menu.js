const  navToggle  =  document . querySelector ( ".bt-menu" ) ;
const  navMenu  =  document . querySelector ( ".lista" ) ;

navToggle.addEventListener ( "click" ,  ( )  =>  {
  navMenu.classList.toggle ( "lista-menu_visible" ) ;

  if  ( navMenu.classList.contains ( "lista-menu_visible" ) )  {
    navToggle.setAttribute ( "aria-label" ,  "Cerrar menú" ) ;
  } 
   else  {
    navToggle.setAttribute ( "aria-label" ,  "Abrir menú" ) ;
  }
} ) ;