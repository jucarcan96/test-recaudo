import { Question } from "@serenity-js/core";
import { PageElement, Text } from "@serenity-js/web";
import { By } from "@serenity-js/web";

export const MensajeDeError = {
    actual: () =>
        Question.about('mensaje de error', actor =>
            Text.of(PageElement.located(By.id('mensaje-error')).describedAs('Mensaje de error')).answeredBy(actor),
        ),
};
