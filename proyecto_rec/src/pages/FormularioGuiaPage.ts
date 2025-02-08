import { PageElement } from '@serenity-js/web';
import { By } from '@serenity-js/web';

export class FormularioGuiaPage {
    static campoReferencia = PageElement.located(By.id('referencia')).describedAs('Campo de referencia');
    static campoValor = PageElement.located(By.id('valor')).describedAs('Campo de valor');
    static botonCrear = PageElement.located(By.id('crear')).describedAs('Botón de crear');
}