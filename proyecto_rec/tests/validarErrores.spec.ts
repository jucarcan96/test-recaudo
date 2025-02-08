import { describe, it } from "@serenity-js/playwright-test";
import { Usuario } from "../src/actors/Usuario";
import { CrearGuia } from "../src/tasks/CrearGuia";
import { ValidarErroresReferencia } from "../src/tasks/ValidarErroresReferencia";
import { MensajeDeError } from '../src/questions/MensajeDeError';
import { Ensure, includes } from "@serenity-js/assertions";

describe('Validaciones de Guia', () => {
    it('Debe mostrar un error si la referencia de recaudo esta vacia', async ({ actor }) => {
        const usuario = await Usuario.queBuscaCrearUnaGuia(); // Esperar a que el actor esté listo

        await usuario.attemptsTo(
            CrearGuia.conLosDatos('', 450000),
            Ensure.that(MensajeDeError.actual(), includes('Se presento un Error')),
            ValidarErroresReferencia.conMensaje('La referencia de recaudo es requerida'),
        );
    });
});