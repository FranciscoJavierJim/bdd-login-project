# 🔐 BDD Login Project

Proyecto de automatización de pruebas para un flujo de **login** usando **BDD (Behavior Driven Development)** con **Cypress** y **Cucumber**.

Este proyecto valida diferentes escenarios de inicio de sesión mediante archivos `.feature`, mapeo de pasos y pruebas automatizadas legibles y estructuradas.

---

## 🚀 Tecnologías

- 🧪 Cypress  
- 🧩 Cucumber / Gherkin  
- 📐 Page Object Model (POM)  
- 🔧 TypeScript / Node.js  

---

## 📁 Estructura del proyecto

```text
cypress/
├── e2e/ # Archivos .feature (Gherkin)
├── pages/ # Page Objects (POM)
├── steps/ # Step definitions de Cucumber
└── support/ # Soporte / configuración de Cypress
cypress.config.ts # Configuración de Cypress
package.json # Dependencias y scripts

---

## 📦 Instalación

Clona el repositorio y prepara el entorno:

```bash
git clone https://github.com/FranciscoJavierJim/bdd-login-project.git
cd bdd-login-project
npm install

▶️ Cómo ejecutar las pruebas

🛠 Modo interactivo

npx cypress open

🧪 ¿Qué pruebas incluye?

Este proyecto utiliza BDD con Gherkin para describir escenarios de login como:

    Login exitoso con credenciales válidas

    Login fallido con datos inválidos

(Los escenarios están definidos en los archivos .feature dentro de cypress/e2e.)

📈 ¿Qué se aprende con este proyecto?

Uso de BDD con Cucumber / Gherkin para describir comportamiento de usuario. 
HackMD

Integración de Cypress con BDD

Organización de código con Page Object Model (POM) para facilitar mantenimiento.

Estructura de pruebas automatizadas claras y legibles.

🤝 Contribuciones

Las contribuciones son bienvenidas.
Abre un issue o pull request para sugerir nuevas pruebas, mejorar escenarios o añadir documentación.

👤 Autor

Francisco Javier Jiménez
GitHub: https://github.com/FranciscoJavierJim
