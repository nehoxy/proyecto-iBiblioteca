import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ibiblioteca',
  templateUrl: './ibiblioteca.page.html',
  styleUrls: ['./ibiblioteca.page.scss'],
})
export class IbibliotecaPage implements OnInit {

  public arrayLibros=[
    {
      titulo:'Problemas de ajedrez para niños',
      portada:'https://www.lacasadelajedrez.com/media/img/portadas/9788492517541.jpg',
      descripcion:'Este súper-desafío ajedrecístico contiene 100 posiciones divertidas para resolver, que van desde las muy fáciles –y alentadoras– hasta las abrumadoramente difíciles. Usando un formato innovador, cada problema está precedido por un ejemplo instructivo, que ilustra un importante tema combinatorio.'
    },
    {
      titulo:'Aperturas de ajedrez para niños',
      portada:'https://www.lacasadelajedrez.com/media/img/portadas/9788492517336.jpg',
      descripcion:'Todos los jugadores, niños, jóvenes y adultos, deben conocer las jugadas fundamentales para un buen comienzo de partida. Aperturas de ajedrez para niños nos acerca las mejores ideas y consejos para estas primeras jugadas y analiza 50 potentes aperturas: las que practican Maestros y Grandes Maestros para superar a sus oponentes. '
    },
    {
      titulo:'Tácticas de ajedrez para niños',
      portada:'https://www.lacasadelajedrez.com/media/img/portadas/9788493384166.jpg',
      descripcion:'Los aficionados al ajedrez de todas las edades y niveles encontrarán delicioso este instructivo libro. En un formato sencillo y fácil de entender, explica cómo confundir al oponente explotando los temas tácticos.'
    },
    {
      titulo:'Cómo ganar a tu papá al ajedrez',
      portada:'https://www.lacasadelajedrez.com/media/img/portadas/9788493545437.jpg',
      descripcion:'En Cómo ganar a tu papá al ajedrez, Murray Chandler explica cuál es el mejor modo de vencer a un oponente más fuerte −sea este un amigo, un compañero de club o incluso, ¡tu papá!− forzando con ingenio el jaque mate. Fantásticas posiciones de partidas reales reflejan los 50 jaques mates más mortíferos que los maestros de ajedrez emplean para ganar.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
