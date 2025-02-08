import { Question } from '@serenity-js/core';


export const LastResponse = {
    status: () =>
        Question.about('el estado de la última respuesta', actor =>
            LastResponse.status().answeredBy(actor),
        ),
    body: () =>
        Question.about('el cuerpo de la última respuesta', actor =>
            LastResponse.body<Record<string, any>>().answeredBy(actor),
        ),
};