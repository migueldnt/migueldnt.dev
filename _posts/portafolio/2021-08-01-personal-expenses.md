---
layout: post
title: Administrador de gastos en django
date: 2021-08-01 10:00:00 -0600
categories: portafolio

permalink: /:categories/:title.html
author: "Miguel Ángel"
image: /assets/posts-images/2021-08-01-personal-expenses.png
#miestilo: nose #se pueden agregar las propiedades que quieras

#para que se puedan ordenar en cuanto al peso, mayor peso mas arriba aparecera
peso: 2
tags: 
    - backend
    - django
    - postgres
---

Sistema construido en **django**, conectado a una base de datos de tipo postgres. El frontend se renderiza a partir de los  *HTML forms* de django, tambien con un poco de js vanilla y vue. 

Se trata de un sistema que de manera muy simple lleva a la practica  las *Cuentas T*  de contabilidad. En donde cada vez que hay un cargo en una cuenta deberia haber un abono en otra. Bajo este concepto de contabilidad,  el usuario podria llevar registro de  sus gastos personales (o de su empresa) con mayor exactitud.

Cualquier usuario puede registrarse. Enseguida se podran agregar las cuentas que el usuario necesite, despues podran empezar a capturarse los movimientos. 

### Links

[Personal Expenses](https://personal-expenses.migueldnt.dev/) registrate.

[Repositorio de github](https://github.com/migueldanto/personal-expenses)

### Tecnologias usadas
- Django *para construccion de modelos y servicios web de la aplicacion*.
- Vue *para renderizar dinamicamente algunos formularios*
- Bulma css *para dar estilo a formularios, botones, etc*.
- Postgres *como acompañamiento de los datos persistentes de django*
- Docker *para facil despliegue y desarrollo*.
- Google cloud *para despliegue y publicación*

