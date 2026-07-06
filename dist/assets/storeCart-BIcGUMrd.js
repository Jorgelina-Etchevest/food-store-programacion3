import"./modulepreload-polyfill-B5Qt9EMX.js";const a=t=>{localStorage.setItem("carrito",JSON.stringify(t)),o()},b=()=>{const t=localStorage.getItem("carrito");return t?JSON.parse(t):[]},c=document.getElementById("contenedor-carrito"),l=document.getElementById("total-carrito"),o=()=>{const t=b();c.innerHTML="";let s=0;if(t.length===0){c.innerHTML="<p>El carrito está vacío</p>",l.textContent="";return}t.forEach(e=>{s+=e.precio*e.cantidad;const n=document.createElement("div");n.innerHTML=`
      <div class="item-carrito">
        <img src="${e.imagen}" class="img-carrito">
        <div class="info-carrito">
          <h4>${e.nombre}</h4>
          <p>$${e.precio}</p>
          <div class="controles">
            <button class="menos">-</button>
            <span>${e.cantidad}</span>
            <button class="mas">+</button>
            <button class="eliminar">Eliminar</button>
          </div>
        </div>
      </div>
    `;const d=n.querySelector(".mas"),m=n.querySelector(".menos"),v=n.querySelector(".eliminar");d?.addEventListener("click",()=>{e.cantidad+=1,a(t)}),m?.addEventListener("click",()=>{if(e.cantidad>1)e.cantidad-=1;else{const r=t.findIndex(i=>i.id===e.id);t.splice(r,1)}a(t)}),v?.addEventListener("click",()=>{const r=t.filter(i=>i.id!==e.id);a(r)}),c?.appendChild(n)}),l.textContent=`Total: $${s}`},g=document.querySelector(".btn-comprar");g?.addEventListener("click",()=>{alert("Simulación de compra OK"),localStorage.removeItem("carrito"),o()});o();
