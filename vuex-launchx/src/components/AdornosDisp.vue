<template>
    <div class="nav-adornos-disp">
        <h2>Adornos Disponibles</h2>
        <ul>
            <li>{{$store.state.cubiertas.cCremaBat[0]}} <br>Cantidad restante: {{$store.state.cubiertas.cCremaBat[2]}}</li>
            <li>{{$store.state.cubiertas.cMermeFresa[0]}} <br>Cantidad restante: {{$store.state.cubiertas.cMermeFresa[2]}}</li>
            <li>{{$store.state.cubiertas.cMermePiña[0]}} <br>Cantidad restante: {{$store.state.cubiertas.cMermePiña[2]}}</li>
            <li>{{$store.state.cubiertas.cMermeZarza[0]}} <br>Cantidad restante: {{$store.state.cubiertas.cMermeZarza[2]}}</li>
            <li>{{$store.state.cubiertas.cHersheys[0]}} <br>Cantidad restante: {{$store.state.cubiertas.cHersheys[2]}}</li>
            <li>{{$store.state.cubiertas.cIrlandesa[0]}} <br>Cantidad restante: {{$store.state.cubiertas.cIrlandesa[2]}}</li>

            <li>{{$store.state.adornos.aFresas[0]}} <br>Cantidad restante: {{$store.state.adornos.aFresas[2]}}</li>
            <li>{{$store.state.adornos.aDurazno[0]}} <br>Cantidad restante: {{$store.state.adornos.aDurazno[2]}}</li>
            <li>{{$store.state.adornos.aFrutas[0]}} <br>Cantidad restante: {{$store.state.adornos.aFrutas[2]}}</li>
            <li>{{$store.state.adornos.aOreos[0]}} <br>Cantidad restante: {{$store.state.adornos.aOreos[2]}}</li>
            <li>{{$store.state.adornos.aTrufas[0]}} <br>Cantidad restante: {{$store.state.adornos.aTrufas[2]}}</li>
            <li>{{$store.state.adornos.aConejos[0]}} <br>Cantidad restante: {{$store.state.adornos.aConejos[2]}}</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'AdornosDisp'
}
</script>