<template>
  <div class="pastelero">
    <Header/>
    <section>
      <SaboresDisp/>
      <AdornosDisp/>
      <TablaPedidos/>
    </section>
    <Info/>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from '../components/Info.vue';
import Header from '../components/Header.vue';
import SaboresDisp from '../components/SaboresDisp.vue';
import AdornosDisp from '../components/AdornosDisp.vue';
import TablaPedidos from '../components/TablaPedidos.vue';

export default {
  name: 'PasteleroView',
  components: {
    Info,
    Header,
    SaboresDisp,
    TablaPedidos,
    AdornosDisp
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
.nav-sabores-disp {
  font-family: Georgia, 'Times New Roman', Times, serif;
  float: left;
  width: 25%;
  height: 950px;
  /* only for demonstration, should be removed */
  background: rgb(223, 170, 170);
  padding: 20px;
  color: rgb(34, 22, 11);;
}

.nav-adornos-disp {
  font-family: Georgia, 'Times New Roman', Times, serif;
  float: left;
  width: 25%;
  height: 950px;
  /* only for demonstration, should be removed */
  background: rgb(223, 170, 170);
  padding: 20px;
  color: rgb(34, 22, 11);
}

.nav ul {
list-style-type: disc;
padding: 30;
}

.article-pedidos {
  font-family: Georgia, 'Times New Roman', Times, serif;
  float: left;
  padding: 30px;
  width: 50%;
  background-color: #f1f1f1;
  height: 950px;
  align-items: center;
  color: rgb(34, 22, 11);
}

li, td{
  font-size: 20px;
  color: rgb(34, 22, 11);
  padding-bottom: 6px;
}

/* Estilo de footer */
footer {
background-color: black;
padding: 30px;
text-align: center;
color: white;
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
font-size: 20px;
}

.encabezado{
    background-color: #DA82AB;
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

footer{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 50px;
  background-color: black;
  padding: 30px;
  text-align: center;
  color: white;
}
</style>

