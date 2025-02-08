import { Actor, actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { chromium } from 'playwright';
import { CallAnApi } from '@serenity-js/rest';

export class Usuario {
    static async queBuscaCrearUnaGuia() {
        // Lanzar el navegador Chromium
        const browser = await chromium.launch({ headless: false });

        // Crear un nuevo contexto y una nueva página
        const context = await browser.newContext();
        const page = await context.newPage();

        // Retornar el actor con la capacidad de navegar usando Playwright
        return actorCalled('Usuario')
            .whoCan(BrowseTheWebWithPlaywright.using(page));
    }

    static async queBuscaConsultarUnaGuia() {
        return actorCalled('Usuario')
            .whoCan(CallAnApi.at('https://apiv2-test.coordinadora.com'));
    }
}