import { Task } from '@serenity-js/core';
import { Ensure, includes } from '@serenity-js/assertions';
import { MensajeDeError } from '../questions/MensajeDeError';

export const ValidarErroresReferencia = {
    conMensaje: (mensaje: string) =>
        Task.where('#actor debería ver el mensaje de error "${mensaje}"',
            Ensure.that(MensajeDeError.actual(), includes(mensaje)),
        ),
};