import { describe, it, afterEach} from '@serenity-js/playwright-test';
import { Usuario } from '../src/actors/Usuario';
import { CrearGuia } from '../src/tasks/CrearGuia';
import { MensajeDeExito } from '../src/questions/MensajeDeExito';
import { Ensure, includes } from '@serenity-js/assertions';
import { actorInTheSpotlight } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';

describe('Crear Guía', () => {
    it('Debe permitir crear una guía con datos válidos', async ({ actor }) => {
        const usuario = await Usuario.queBuscaCrearUnaGuia(); // Esperar a que el actor esté listo

        await usuario.attemptsTo(
            CrearGuia.conLosDatos('RF-5432178', 450000),
            Ensure.that(MensajeDeExito.actual(), includes('Guía creada exitosamente')),
        );
    });

    afterEach(async () => {
        const usuario = actorInTheSpotlight();
        await usuario.abilityTo(BrowseTheWebWithPlaywright).page().context().browser().close();
    });
});