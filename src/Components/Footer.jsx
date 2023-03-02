import React from 'react'
import Figure from 'react-bootstrap/Figure';



export const Footer = () => {


  return (
    <> 
    <h2>Footer</h2>
    <Figure>
    <Figure.Image
      width={254}
      height={154}
      alt="254x154"
      src= "../public/img/teamLogoBlanco.png"
    />
    <Figure.Caption>
        Nicolás Olmos | Sharon Monroy | Daniel Romero
        <section>
            <div>
                <a href="https://github.com/nicolasnos"><img src='../public/img/github.svg'></img></a>
                <a href="https://www.linkedin.com/in/nicolas-olmos-a7a1ba261/"><img src='../public/img/linkedin.svg'></img></a>
            </div>
            <div>
                <a href="https://github.com/Sharontatiana"><img src='../public/img/github.svg'></img></a>
                <a href="https://www.linkedin.com/in/sharon-manco"><img src='../public/img/linkedin.svg'></img></a>
            </div>
            <div>
                <a href="https://github.com/3lD4n1el"><img src='../public/img/github.svg'></img></a>
                <a href="https://www.linkedin.com/in/daniel-romero-programador/"><img src='../public/img/linkedin.svg'></img></a>
            </div>
        </section>
        <p>©️ TODOS LOS DERECHOS RESERVADOS 2023  DESARROLLADO POR TELE Y TRABAJO</p>
      </Figure.Caption>
    </Figure>   

    </>
    
    
  )
}
