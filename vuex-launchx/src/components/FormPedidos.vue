<template>
    <div :style={visibility:$store.state.visibility} class="form-pedidos">
        <h2>Crea tu pastel y llena el formulario</h2>
        <form action="">
          <CrearPastel/>
          <label for="Nombre">Nombre de quien recogerá el pedido</label><br>
          <input type="text" name="Nombre" id="Nombre" placeholder="Nombre" class="input-form">
          <br><br>
        
          <label for="Telefono">Número de teléfono</label><br>
          <input type="tel" name="Telefono" id="Telefono" placeholder="Télefono" maxlength="10" class="input-form">
          <br><br>
        
          <label for="e-mail">Correo electrónico</label><br>
          <input type="email" name="e-mail" id="e-mail" placeholder="Correo electrónico" class="input-form">
          <br><br>
          <input type="reset" class="boton-form">
          <input type="button" class="boton-form" @click="$store.dispatch('enviarSabor1 enviarSabor2')" value="Enviar">
          <a href=""><input type="button" value="Regresar" class="boton-form" @click="$store.dispatch('hiddenForm')"></a>
          <p id="etiqueta">Tu pastel es de: {{$store.state.pedido.sabor1}} con {{$store.state.pedido.sabor2}}</p>
        </form>
    </div>
</template>

<script>
import CrearPastel from '../components/CrearPastel.vue';

export default {
  name: 'Pedidos',
  components: {
    CrearPastel
  }
}
</script>