import { Task } from '@serenity-js/core';
import { GetRequest, Send, LastResponse } from '@serenity-js/rest';
import { Ensure, equals } from '@serenity-js/assertions';


export const ConsultarGuia = {
    conNumero: (numeroGuia: string) =>
        Task.where(`#actor consulta la guía con número ${numeroGuia}`,
            Send.a(GetRequest.to('https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/${numeroGuia}')),
            Ensure.that(LastResponse.status(), equals(200)), // Verificar que la respuesta sea exitosa
        ),
};