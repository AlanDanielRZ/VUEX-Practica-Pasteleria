<template>
    <div class="nav-sabores">
        <h2>Sabores de pasteles</h2>
        <ul>
            <li>{{$store.state.sabores.s3Leches[0]}} <br>$ {{$store.state.sabores.s3Leches[1]}}.00</li>
            <li>{{$store.state.sabores.sChoco[0]}} <br>$ {{$store.state.sabores.sChoco[1]}}.00</li>
            <li>{{$store.state.sabores.sFresa[0]}} <br> $ {{$store.state.sabores.sFresa[1]}}.00</li>
            <li>{{$store.state.sabores.sCapu[0]}} <br> $ {{$store.state.sabores.sCapu[1]}}.00</li>
            <li>{{$store.state.sabores.sNuez[0]}} <br> $ {{$store.state.sabores.sNuez[1]}}.00</li>
            <li>{{$store.state.sabores.sPinon[0]}} <br> $ {{$store.state.sabores.sPinon[1]}}.00</li>
            <li>{{$store.state.sabores.sEnvinado[0]}} <br> $ {{$store.state.sabores.sEnvinado[1]}}.00</li>
            <li>{{$store.state.sabores.sMousseChoco[0]}} <br> ${{$store.state.sabores.sMousseChoco[1]}}.00</li>
            <li>{{$store.state.sabores.sMousseFresa[0]}} <br> ${{$store.state.sabores.sMousseFresa[1]}}.00</li>
            <li>{{$store.state.sabores.sPayQueso[0]}} <br> ${{$store.state.sabores.sPayQueso[1]}}.00</li>
            <li>{{$store.state.sabores.sImposible[0]}} <br> ${{$store.state.sabores.sImposible[1]}}.00</li>
            <li>{{$store.state.sabores.sOreo[0]}} <br> ${{$store.state.sabores.sOreo[1]}}.00</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'MenuSabores'
}
</script>