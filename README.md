# courseCypress

_____________________________
## courseCypress --> iniciar proyecto en carperta local"
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/edwca/courseCypress.git
git push -u origin main
________________________________
## Crear nueva rama para mis cambios
git branch greg
________________________________________________
## Subir cambios a mi rama
git checkout greg
git add .
git commit -m "Detalle de commit"
git push origin head
_______________________________________________
## Actualizar mi rama
git pull origin greg
__________________________________________
## Merge con cambios de main estando en mi rama
git merge main

