<template>
    <div class="nav-sabores-disp">
        <h2>Sabores disponibles</h2>
        <ul>
            <li>{{$store.state.sabores.s3Leches[0]}} <br>Cantidad restante: {{$store.state.sabores.s3Leches[2]}}</li>
            <li>{{$store.state.sabores.sChoco[0]}} <br>Cantidad restante: {{$store.state.sabores.sChoco[2]}}</li>
            <li>{{$store.state.sabores.sFresa[0]}} <br>Cantidad restante: {{$store.state.sabores.sFresa[2]}}</li>
            <li>{{$store.state.sabores.sCapu[0]}} <br>Cantidad restante: {{$store.state.sabores.sCapu[2]}}</li>
            <li>{{$store.state.sabores.sNuez[0]}} <br>Cantidad restante: {{$store.state.sabores.sNuez[2]}}</li>
            <li>{{$store.state.sabores.sPinon[0]}} <br>Cantidad restante: {{$store.state.sabores.sPinon[2]}}</li>
            <li>{{$store.state.sabores.sEnvinado[0]}} <br>Cantidad restante: {{$store.state.sabores.sEnvinado[2]}}</li>
            <li>{{$store.state.sabores.sMousseChoco[0]}} <br>Cantidad restante: {{$store.state.sabores.sMousseChoco[2]}}</li>
            <li>{{$store.state.sabores.sMousseFresa[0]}} <br>Cantidad restante: {{$store.state.sabores.sMousseFresa[2]}}</li>
            <li>{{$store.state.sabores.sPayQueso[0]}} <br>Cantidad restante: {{$store.state.sabores.sPayQueso[2]}}</li>
            <li>{{$store.state.sabores.sImposible[0]}} <br>Cantidad restante: {{$store.state.sabores.sImposible[2]}}</li>
            <li>{{$store.state.sabores.sOreo[0]}} <br>Cantidad restante: {{$store.state.sabores.sOreo[2]}}</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'SaboresDisp'
}
</script>