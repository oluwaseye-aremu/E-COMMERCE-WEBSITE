document.addEventListener('DOMContentLoaded', () => {
    // navbar burger
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger.addEventListener('click', () => {
      nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
    });
  
    // year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // sample products array (using Picsum photos)
    const products = [
      { id:1, name:'Classic Tee', price:18.99, img:'https://picsum.photos/400/300?random=3' },
      { id:2, name:'Stylish Jacket', price:49.99, img:'https://picsum.photos/400/300?random=4' },
      { id:3, name:'Sneakers', price:69.99, img:'https://picsum.photos/400/300?random=5' },
      { id:4, name:'Leather Bag', price:89.99, img:'https://picsum.photos/400/300?random=6' }
    ];
  
    const grid = document.getElementById('productGrid');
    function renderProducts(){
      grid.innerHTML = '';
      products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}">
          <div class="card-body">
            <h3>${p.name}</h3>
            <div class="price">$${p.price.toFixed(2)}</div>
            <div class="actions">
              <button class="btn-small" onclick="addToCart(${p.id})">Add to Cart</button>
              <button class="btn-small" onclick="viewDetails(${p.id})">View</button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }
  
    window.addToCart = function(id){
      const p = products.find(x=>x.id===id);
      const cart = JSON.parse(localStorage.getItem('cart')||'[]');
      cart.push(p);
      localStorage.setItem('cart', JSON.stringify(cart));
      toast(`${p.name} added to cart`);
    };
  
    window.viewDetails = function(id){
      const p = products.find(x=>x.id===id);
      alert(`${p.name}\nPrice: $${p.price.toFixed(2)}`);
    };
  
    function toast(text){
      const el = document.createElement('div');
      el.textContent = text;
      el.style.position='fixed';
      el.style.left='50%';
      el.style.transform='translateX(-50%)';
      el.style.bottom='90px';
      el.style.background='rgba(0,0,0,0.8)';
      el.style.color='white';
      el.style.padding='10px 14px';
      el.style.borderRadius='8px';
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),2000);
    }
  
    renderProducts();
  
    // chatbot logic stays same...
  });
  