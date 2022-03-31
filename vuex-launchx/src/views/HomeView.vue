<template>
  <div class="home">
    <Header/>
    <section>
      <MenuSabores/>
      <MenuAdornos/>
      <DivImagenes/>
      <FormPedidos/>
    </section>
    <Info/>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from '../components/Info.vue';
import Header from '../components/Header.vue';
import MenuSabores from '../components/MenuSabores.vue';
import MenuAdornos from '../components/MenuAdornos.vue';
import DivImagenes from '../components/DivImagenes.vue';
import FormPedidos from '../components/FormPedidos.vue';

export default {
  name: 'HomeView',
  components: {
    Info,
    Header,
    MenuSabores,
    DivImagenes,
    MenuAdornos,
    FormPedidos
  }
}
</script>

<style>
* {
    box-sizing: border-box;
}
body {
font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* Estilo de header */
header {
  font-family: Georgia, 'Times New Roman', Times, serif;
  width: 100%;
  height: 220px;
  background-color: black;
  padding: 15px;
  text-align: center;
  font-size: 25px;
  color: #DA82AB;
}

/* Crear 2 columnas con la misma posición en la fila */
.nav-sabores {
  font-family: Georgia, 'Times New Roman', Times, serif;
  float: left;
  width: 25%;
  height: 1000px;
  /* only for demonstration, should be removed */
  background: rgb(223, 170, 170);
  padding: 20px;
  color: rgb(34, 22, 11);
}

.nav-adornos {
  font-family: Georgia, 'Times New Roman', Times, serif;
  float: left;
  width: 25%;
  height: 1000px;
  /* only for demonstration, should be removed */
  background: rgb(223, 170, 170);
  padding: 20px;
  color: rgb(34, 22, 11);;
}

.nav ul {
list-style-type: disc;
padding: 30;
}

.article {
  float: left;
  padding: 30px;
  width: 50%;
  background-color: #f1f1f1;
  height: 1000px;
  align-items: center;
}

.form-pedidos{
  position: absolute;
  z-index: 100;
  margin-left: 664px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  float: left;
  width: 49.4%;
  height: 900px;
  background-color: #f1f1f1;
  color: rgb(34, 22, 11);
  padding: 20px 20px;
}

li{
  font-size: 20px;
  color: rgb(34, 22, 11);
  padding-bottom: 6px;
}

/* Responsive layout */
@media (max-width: 600px) {

nav{
    width: 100%;
    height: auto;
}
}

table{
border-collapse: separate;
}

tr, td, th{ 
border: 1px solid grey;
padding-left: 20px;
padding-right: 15px;
}

.logo{
  float: left;
}

div{
  margin-bottom: 10px;
}

.counter{
  font-size: 80px;
}

.hacer-pedido{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  width: 150px;
  height: 50px;
  margin: 20px 20px;
  background-color: black;
  color: #f1f1f1;
}

.boton-form{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  width: 120px;
  height: 30px;
  margin-top: 10px;
  margin-right: 15px;
  background-color: black;
  color: #f1f1f1;
}

.input-form{
    width: 330px;
    height: 32px;
}

/* Estilo de footer */
footer {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 50px;
  background-color: black;
  padding: 30px;
  text-align: center;
  color: white;
}
</style>
