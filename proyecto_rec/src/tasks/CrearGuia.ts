import { Task } from '@serenity-js/core';
import { Enter, Click } from '@serenity-js/web';
import { FormularioGuiaPage } from '../pages/FormularioGuiaPage';

export const CrearGuia = {
    conLosDatos: (referencia: string, valor: number) =>
        Task.where('#actor crea una guia con referencia "${referencia}" y valor "${valor}"',
            Enter.theValue(referencia).into(FormularioGuiaPage.campoReferencia),
            Enter.theValue(valor.toString()).into(FormularioGuiaPage.campoValor),
            Click.on(FormularioGuiaPage.botonCrear),
        ),
};