<template>
    <div>
        <h3>Elige los sabores y adornos de tu pastel</h3>
          <label for="sabor1">Selecciona sabor 1 de pastel</label><br>
          <select id="sabor1" name="sabor1">
          <option value="Pastel de Tres Leches">{{$store.state.sabores.s3Leches[0]}}</option>
          <option value="Pastel de Chocolate">{{$store.state.sabores.sChoco[0]}}</option>
          <option value="Pastel de Fresa">{{$store.state.sabores.sFresa[0]}}</option>
          <option value="Pastel de Capuchino">{{$store.state.sabores.sCapu[0]}}</option>
          <option value="Pastel de Nuez">{{$store.state.sabores.sNuez[0]}}</option>
          <option value="Pastel de Piñón">{{$store.state.sabores.sPinon[0]}}</option>
          <option value="Pastel Envinado">{{$store.state.sabores.sEnvinado[0]}}</option>
          <option value="Mousse de Chocolate">{{$store.state.sabores.sMousseChoco[0]}}</option>
          <option value="Mousse de Fresa">{{$store.state.sabores.sMousseFresa[0]}}</option>
          <option value="Pay de Queso">{{$store.state.sabores.sPayQueso[0]}}</option>
          <option value="Pastel de Mil Hojas">{{$store.state.sabores.sMilHojas[0]}}</option>
          <option value="Pastel Imposible">{{$store.state.sabores.sImposible[0]}}</option>
          <option value="Cheese Cake Oreo">{{$store.state.sabores.sOreo[0]}}</option>
          </select>
          <br><br>
          <label for="sabor2">Selecciona sabor 2 de pastel</label><br>
          <select id="sabor2" name="sabor2">
          <option value="Pastel de Tres Leches">{{$store.state.sabores.s3Leches[0]}}</option>
          <option value="Pastel de Chocolate">{{$store.state.sabores.sChoco[0]}}</option>
          <option value="Pastel de Fresa">{{$store.state.sabores.sFresa[0]}}</option>
          <option value="Pastel de Capuchino">{{$store.state.sabores.sCapu[0]}}</option>
          <option value="Pastel de Nuez">{{$store.state.sabores.sNuez[0]}}</option>
          <option value="Pastel de Piñón">{{$store.state.sabores.sPinon[0]}}</option>
          <option value="Pastel Envinado">{{$store.state.sabores.sEnvinado[0]}}</option>
          <option value="Mousse de Chocolate">{{$store.state.sabores.sMousseChoco[0]}}</option>
          <option value="Mousse de Fresa">{{$store.state.sabores.sMousseFresa[0]}}</option>
          <option value="Pay de Queso">{{$store.state.sabores.sPayQueso[0]}}</option>
          <option value="Pastel de Mil Hojas">{{$store.state.sabores.sMilHojas[0]}}</option>
          <option value="Pastel Imposible">{{$store.state.sabores.sImposible[0]}}</option>
          <option value="Cheese Cake Oreo">{{$store.state.sabores.sOreo[0]}}</option>
          </select>
          <br><br>
          <p>Selecciona los adornos para tu pastel</p><br>
          <input type="checkbox" id="crema" name="crema" value="Crema Batida">
          <label for="crema">{{$store.state.cubiertas.cCremaBat[0]}}</label>
          <br>
          <input type="checkbox" id="mFresa" name="mFresa" value="Mermelada de fresa">
          <label for="mFresa">{{$store.state.cubiertas.cMermeFresa[0]}}</label>
          <br>
          <input type="checkbox" id="mPiña" name="mPiña" value="Mermelada de Piña">
          <label for="mPiña">{{$store.state.cubiertas.cMermePiña[0]}}</label>
          <br>
          <input type="checkbox" id="mZarza" name="mZarza" value="Mermelada de Zarzamora">
          <label for="mZarza">{{$store.state.cubiertas.cMermeZarza[0]}}</label>
          <br>
          <input type="checkbox" id="hershey" name="hershey" value="Chocolate Hershey's">
          <label for="hershey">{{$store.state.cubiertas.cHersheys[0]}}</label>
          <br>
          <input type="checkbox" id="irlandesa" name="irlandesa" value="Crema Irlandesa">
          <label for="irlandesa">{{$store.state.cubiertas.cIrlandesa[0]}}</label>
          <br>
          <input type="checkbox" id="fresas" name="fresas" value="Fresas">
          <label for="fresas">{{$store.state.adornos.aFresas[0]}}</label>
          <br>
          <input type="checkbox" id="duraznos" name="duraznos" value="Duraznos">
          <label for="duraznos">{{$store.state.adornos.aDurazno[0]}}</label>
          <br>
          <input type="checkbox" id="frutas" name="frutas" value="Frutas Temporada">
          <label for="frutas">{{$store.state.adornos.aFrutas[0]}}</label>
          <br>
          <input type="checkbox" id="oreo" name="oreo" value="Galleta Oreo">
          <label for="oreo">{{$store.state.adornos.aOreos[0]}}</label>
          <br>
          <input type="checkbox" id="trufas" name="trufas" value="Trufas">
          <label for="trufas">{{$store.state.adornos.aTrufas[0]}}</label>
          <br>
          <input type="checkbox" id="conejo" name="conejo" value="Conejos Chocolate">
          <label for="conejo">{{$store.state.adornos.aConejos[0]}}</label>
          <br><br>
          
    </div>
</template>