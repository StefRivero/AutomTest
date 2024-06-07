# Proyecto con Playwright y Qase    

Este proyecto utiliza Playwright para automatizar pruebas de UI en navegadores web y está integrado con Qase para la gestión de casos de prueba.

## Instalación

1. Clona este repositorio: 
https://github.com/StefRivero/AutomTest

2. Instala las dependencias:
```
npm install
npm install playwright-qase-reporter
npx playwright install
```

## Uso

1. Ejecuta las pruebas:
```
npm run test
```

2. Ejecuta las pruebas y reporte en Qase (local):
```
QASE_MODE=testops npx playwright test
```

## Configuración de Qase

Para utilizar la integración con Qase, asegúrate de tener un proyecto creado en Qase y generar un token de API.

## Contribución

¡Contribuciones son bienvenidas! Por favor, sigue estas pautas:

1. Crea un fork del proyecto.
2. Crea una nueva rama para tu contribución: `git checkout -b mi-contribucion`.
3. Haz tus cambios y asegúrate de que las pruebas pasen.
4. Haz un commit de tus cambios: `git commit -m "Agrega una nueva funcionalidad"`.
5. Haz push a tu rama: `git push origin mi-contribucion`.
6. Crea un pull request.

## Licencia

Este proyecto está bajo la Licencia [MIT](https://opensource.org/licenses/MIT).
