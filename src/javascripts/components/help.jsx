import React from 'react';

export default class Help extends React.Component {
  render() {
    return (
        <div>
            <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
                <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">
                    Help
                </h1>

                <div className="uk-container uk-container-expand">
                    <ul uk-accordion="multiple: true">
                        <li>
                            <h3 className="uk-accordion-title">01 &emsp; Habla con Alda como si fuese un amigo</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Alda es tu amiga y te ayudará a tomar el control de tu dinero. Chatea con ella en FB Messenger para obtener más información sobre tus finanzas.
                                    Puedes actualizarlo en todo momento, desde los controles de saldo hasta el presupuesto inteligente.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">02 &emsp; Verifica tu saldo</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Pídale a Alda tu "saldo", y ella lo actualizará con tu saldo, en todas las cuentas, al instante.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">03 &emsp; Establecer presupuestos
                            </h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Si quieres "establecer un presupuesto", te sugerirá una cifra basada en tus finanzas. Puedes editarla de acuerdo con sus objetivos de gasto. Alda también te dará un desglose diario y semanal y te ayudará a mantenerse en el camino, con actualizaciones periódicas durante todo el mes. Descubre más aquí.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">04 &emsp; Obtén un desglose detallado
                            </h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Alda automáticamente clasifica automáticamente sus transacciones, por lo que puede ver sus gastos por fecha, categoría o comerciante. Para hacer esto, haga clic en las pestañas en la parte superior de su lista de transacciones o diga "Categoría gastar" en FB messenger. Ella incluso te lo presentará de una manera hermosa y fácil de entender.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">05 &emsp; Reciba consejos inteligentes para el gasto</h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    Cuando Alda aprende lo suficiente sobre tus hábitos de gasto, te ayudará a identificar las áreas donde puede reducir los costes. Ya sea porque se trata de una factura molesta o de una suscripción demasiado cara, Alda utiliza la tecnología para ofrecerte el mejor trato.
                                </p>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <h3 className="uk-accordion-title">06 &emsp; Ahorre sin esfuerzo
                            </h3>
                            <div className="uk-accordion-content">
                                <p className="uk-dropcap">
                                    ¿Ahorrando sin estrés? En función de tu tasa de gasto, Alda calculará cuánto puedes ahorrar cada semana y lo transferirá a una billetera Alda por ti. Di "Iniciar ahorro automático" en su FB Messenger para comenzar.
                                </p>
                            </div>
                            <hr/>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
  }
}
