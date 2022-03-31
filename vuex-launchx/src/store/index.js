import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    color: "blue",
    visibility: "hidden",
    sabores:{
      s3Leches: ['Pastel de Tres Leches',90.00,10],
      sChoco: ['Pastel de Chocolate',110.00,10],
      sFresa: ['Pastel de Fresa',110.00,10],
      sCapu: ['Pastel de Capuchino',120.00,10],
      sNuez: ['Pastel de Nuez',140.00,10],
      sPinon: ['Pastel de Piñón',160.00,10],
      sEnvinado: ['Pastel Envinado',150.00,10],
      sMousseChoco: ['Mousse de Chocolate',170.00,10],
      sMousseFresa: ['Mousse de Fresa',170.00,10],
      sPayQueso: ['Pay de Queso',170.00,10],
      sMilHojas: ['Pastel de Mil Hojas',200.00,10],
      sImposible: ['Pastel Imposible',210.00,10],
      sOreo: ['Cheese Cake Oreo',250.00,10]
    },
    cubiertas:{
      cCremaBat: ['Crema Batida',15.00,10],
      cMermeFresa: ['Mermelada de Fresa',25.00,10],
      cMermePiña: ['Mermelada de Piña',25.00,10],
      cMermeZarza: ['Mermelada de Zarzamora',25.00,10],
      cHersheys: ["Chocolate Hershey's",50.00,10],
      cIrlandesa: ['Crema Irlandesa',60.00,10]
    },
    adornos:{
      aFresas: ['Fresas',40.00,10],
      aDurazno: ['Duraznos',40.00,10],
      aFrutas: ['Frutas Mixtas',45.00,10],
      aOreos: ['Galletas Oreo',40.00,10],
      aTrufas: ['Trufas',30.00,10],
      aConejos: ['Conejitos de Chocolate x4',45.00,10],
    },
    pedido:{
      sabor1: '',
      sabor2: ''
    }
  },
  getters: {
    contadorCuadrado(state) {
      return state.counter * state.counter;
    }
  },
  mutations: {
    subirContador(state, random){
      state.counter += random;
    },
    bajarContador(state, random){
      state.counter -= random;
    },
    colorChange(state, color) {
      state.color = color;
    },
    showForm(state, status) {
      state.visibility = status;
    },
    hiddenForm(state, status) {
      state.visibility = status;
    },
    enviarSabor1(state, sabor1){
      state.pedido.sabor1 = sabor1;
    },
    enviarSabor2(state, sabor2){
      state.pedido.sabor2 = sabor2;
    }
  },
  actions: {
    async subirContador() { 
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      this.commit("subirContador", results);
    },
    async bajarContador() { 
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      this.commit("bajarContador", results);
    },
    colorChange({commit}, color) {
      commit("colorChange", color);
    },

    showForm({commit}, status){
      status = 'visible';
      commit("showForm", status);
    },
    hiddenForm({commit}, status){
      status = 'hidden';
      commit("hiddenForm", status);
    },
    enviarSabor1({commit}, sabor1){
      sabor1 = document.getElementById("sabor1").value;
      commit("enviarSabor1", sabor1);
    },
    enviarSabor2({commit}, sabor2){
      sabor2 = document.getElementById("sabor2").value;
      commit("enviarSabor2", sabor2);
    },
    funciones(){
      
    }
  },
  modules: {
  }
})
