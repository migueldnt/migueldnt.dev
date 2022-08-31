---
layout: post
title: Administrador de gastos en django
date: 2021-08-01 10:00:00 -0600
categories: portafolio

permalink: /:categories/:title.html
author: "Miguel Ángel"
image: /assets/posts-images/2021-08-01-personal-expenses.jpg
#miestilo: nose #se pueden agregar las propiedades que quieras

#para que se puedan ordenar en cuanto al peso, mayor peso mas arriba aparecera
peso: 2
tags: 
    - backend
    - django
    - postgres
---

Se trata de un sistema que de manera muy simple lleva a la práctica  las *Cuentas T*  de contabilidad. En donde cada vez que hay un cargo en una cuenta debería haber un abono en otra. Bajo este concepto de contabilidad,  el usuario podría llevar registro de  sus gastos personales (o de su empresa) con mayor exactitud.


Sistema construido en **django**, conectado a una base de datos postgres. El frontend se renderiza a partir de los  *HTML forms* de django, también con un poco de js vanilla y vue.

Cualquier persona puede hacerse usuario. Enseguida se podrán agregar las cuentas que el usuario necesite, después podrán empezar a capturar los movimientos. 

### Links

[Personal Expenses](https://personal-expenses.migueldnt.dev/) registrate.

[Repositorio de github](https://github.com/migueldanto/personal-expenses)

### Tecnologías usadas
- Django *para construccion de modelos y servicios web de la aplicacion*.
- Vue *para renderizar dinámicamente algunos formularios*
- Bulma css *para dar estilo a formularios, botones, etc*.
- Postgres *como acompañamiento de los datos persistentes de django*
- Docker *para fácil despliegue y desarrollo*.
- Google cloud *para despliegue y publicación*
- Servicios REST *para comunicacion dinamica con el servidor*

