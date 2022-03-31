<template>
    <div class="article-pedidos">
        <h2>Últimos pedidos</h2>
                <table>
                    <tr>
                        <th class="encabezado">ID</th>
                        <th class="encabezado">Cliente</th>
                        <th class="encabezado">Descripción</th>
                    </tr>
                    <tr>
                        <td>#369</td>
                        <td >Mariana Leyva</td>
                        <td>
                            <ul>
                                <li>Sabor 1: Pastel de Tres Leches</li>
                                <li>Sabor 2: Pastel de Capuchino</li>
                                <li>Cubierta: Chhocolate Hersheys</li>
                                <li>Adorno: Fresas, Conejitos de Chocolate</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>#368</td>
                        <td>Adrián Mireles</td>
                        <td>
                            <ul>
                                <li>Sabor 1: Pastel de Chocolate</li>
                                <li>Sabor 2: Mousse de Chocolate</li>
                                <li>Cubierta: Crema Irlandesa</li>
                                <li>Adorno: Crema batida en las orillas, Palitos de Chocolate, Nuez</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>#367</td>
                        <td>Gabriel Díaz</td>
                        <td>
                            <ul>
                                <li>Sabor 1: Pastel de Nuez</li>
                                <li>Sabor 2: Pay de Queso</li>
                                <li>Cubierta: Mermelada de Zarzamora</li>
                                <li>Adorno: Frutas Mixtas, Galletas en los laterales</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>#366</td>
                        <td>Ana Laura Martínez</td>
                        <td>
                            <ul>
                                <li>Sabor 1: Cheese Cake Oreo</li>
                                <li>Sabor 2: Mousse de Chocolate</li>
                                <li>Cubierta: Crema Batida</li>
                                <li>Adorno: Frutas Mixtas, Galletas Oreo</li>
                            </ul>
                        </td>
                    </tr>
                </table>
    </div>
</template>

<script>

export default {
  name: 'TablaPedidos'
}
</script>