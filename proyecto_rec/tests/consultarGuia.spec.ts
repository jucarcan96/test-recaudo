import { describe, it } from '@serenity-js/playwright-test';
import { Usuario } from '../src/actors/Usuario';
import { ConsultarGuia } from '../src/tasks/ConsultarGuia';
import { Ensure, equals } from '@serenity-js/assertions';
import { LastResponse } from '../src/questions/LastResponse';

describe('Consultar Guía', () => {
    it('Debe permitir consultar una guía existente', async ({ actor }) => {
        const usuario = await Usuario.queBuscaConsultarUnaGuia(); // Esperar a que el actor esté listo

        await usuario.attemptsTo(
            ConsultarGuia.conNumero('99020276200'), // Consultar la guía
            Ensure.that(LastResponse.status(), equals(200)), // Verificar que la respuesta sea exitosa
            Ensure.that(LastResponse.body().guia, equals('99020276200')),
            Ensure.that(LastResponse.status(), equals(404)), // Verificar el número de guía en la respuesta
        );
    });
});