import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests', // Carpeta donde están las pruebas
    reporter: [
        ['html', { outputFolder: 'test-results' }], // Reporte HTML
        ['junit', { outputFile: 'test-results/results.xml' }], // Reporte JUnit
    ],
    use: {
        browserName: 'chromium', // Usar Chromium como navegador predeterminado
        headless: false, // Ver el navegador durante las pruebas
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
});