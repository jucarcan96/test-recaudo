import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests', // Carpeta donde están las pruebas
    reporter: [
        ['html', { outputFolder: 'test-results' }], // Reporte HTML
        ['junit', { outputFile: 'test-results/results.xml' }], // Reporte JUnit
    ],
    use: {
        headless: false, // Ejecutar en modo no headless (con navegador visible)
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
});