import { Question } from "@serenity-js/core";
import { PageElement, Text } from "@serenity-js/web";
import { By } from "@serenity-js/web";

export const MensajeDeExito = {
    actual: () =>
        Question.about('mensaje de éxito', actor =>
            Text.of(PageElement.located(By.id('mensaje-exito')).describedAs('Mensaje de éxito')).answeredBy(actor).toString(),
        ),
};