# qa-full-automation
# 🚀 QA Full Automation - Playwright

Proyecto de automatización de pruebas end-to-end utilizando Playwright.

## 📌 Descripción

Este proyecto contiene pruebas automatizadas para validar funcionalidades clave de una aplicación web (SauceDemo), incluyendo:

- Login de usuario
- Agregar productos al carrito
- Visualización del carrito
- Pruebas de API

## 🛠️ Tecnologías utilizadas

- Playwright
- JavaScript
- Node.js

## 📂 Estructura del proyecto
qa-full-automation/ │ ├── pages/               
 # Page Object Model │   └── LoginPage.js │ ├── tests/               
  # Tests automatizados │   ├── login.spec.js │   ├── addproduct.spec.js │   ├── cart.spec.js │   └── api.spec.js │ ├── playwright.config.js 
   # Configuración global ├── package.json └── README.md

## ▶️ Cómo ejecutar los tests

1. Instalar dependencias:

```bash
npm install
Ejecutar tests:
Bash
npx playwright test
Ver reporte:
Bash
npx playwright show-report
📸 Evidencias
El proyecto genera automáticamente:
Screenshots en fallos
Videos de ejecución
Reporte HTML interactivo
📊 Casos de prueba implementados
✅ Login exitoso
✅ Agregar producto al carrito
✅ Ver carrito
✅ Validación de API (GET)
🔧 Mejores prácticas aplicadas
Uso de Page Object Model (POM)
Separación de lógica y tests
Manejo de waits y sincronización
Configuración centralizada
📌 Autor
Maria Mercedes Galindo Castillo
QA Automation | Full Stack Developer

---


```bash
git add README.md
git commit -m "docs: add professional README"
git push