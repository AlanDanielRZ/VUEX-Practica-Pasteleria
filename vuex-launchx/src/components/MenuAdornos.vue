<template>
    <div class="nav-adornos">
        <h2>Cubiertas y Adornos</h2>
        <ul>
            <li>{{$store.state.cubiertas.cCremaBat[0]}} <br>$ {{$store.state.cubiertas.cCremaBat[1]}}.00</li>
            <li>{{$store.state.cubiertas.cMermeFresa[0]}} <br>$ {{$store.state.cubiertas.cMermeFresa[1]}}.00</li>
            <li>{{$store.state.cubiertas.cMermePiña[0]}} <br>$ {{$store.state.cubiertas.cMermePiña[1]}}.00</li>
            <li>{{$store.state.cubiertas.cMermeZarza[0]}} <br>$ {{$store.state.cubiertas.cMermeZarza[1]}}.00</li>
            <li>{{$store.state.cubiertas.cHersheys[0]}} <br>$ {{$store.state.cubiertas.cHersheys[1]}}.00</li>
            <li>{{$store.state.cubiertas.cIrlandesa[0]}} <br>$ {{$store.state.cubiertas.cIrlandesa[1]}}.00</li>

            <li>{{$store.state.adornos.aFresas[0]}} <br>$ {{$store.state.adornos.aFresas[1]}}.00</li>
            <li>{{$store.state.adornos.aDurazno[0]}} <br>$ {{$store.state.adornos.aDurazno[1]}}.00</li>
            <li>{{$store.state.adornos.aFrutas[0]}} <br>$ {{$store.state.adornos.aFrutas[1]}}.00</li>
            <li>{{$store.state.adornos.aOreos[0]}} <br>$ {{$store.state.adornos.aOreos[1]}}.00</li>
            <li>{{$store.state.adornos.aTrufas[0]}} <br>$ {{$store.state.adornos.aTrufas[1]}}.00</li>
            <li>{{$store.state.adornos.aConejos[0]}} <br>$ {{$store.state.adornos.aConejos[1]}}.00</li>
        </ul>
        <button class="hacer-pedido" @click="$store.dispatch('showForm')">Hacer pedido</button>
    </div>
</template>

<script>

export default {
  name: 'MenuAdornos'
}
</script>