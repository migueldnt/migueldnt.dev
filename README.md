# Mi pagina personal


algun contenido

### para instalar las dependencias de ruby

(teniendo Ruby previamente en la maquina)
```bash
bundle
```

### para correr el proyecto 

```bash
bundle exec jekyll server --livereload

```

## con docker

```bash
#para generar la carpeta _site
docker-compose up

#para desplegar el servidor de prueba de jekyl (reaccciona a los cambios que hagan en vivo)
docker-compose -f docker-compose-dev.yml up -d
```