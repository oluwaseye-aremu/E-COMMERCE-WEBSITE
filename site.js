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

  // sample products array
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

    // Animate product cards
    gsap.from(".card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
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

  // GSAP intro animations
  gsap.from(".site-header", { y: -80, opacity: 0, duration: 1, ease: "bounce.out" });
  gsap.from(".hero-content h1", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
  gsap.from(".hero-content p", { x: 100, opacity: 0, duration: 1, delay: 0.8 });
  gsap.from(".hero-content a", { scale: 0, opacity: 0, duration: 0.8, delay: 1.2, ease: "back.out(1.7)" });
  gsap.from("#chatbot", { opacity: 0, scale: 0, duration: 1.2, delay: 2 });

  // Chatbot logic
  const chatToggle = document.getElementById('chat-toggle');
  const chatClose = document.getElementById('chat-close');
  const chatPanel = document.getElementById('chat-panel');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  chatToggle.addEventListener('click', () => {
    chatPanel.style.display = 'block';
    gsap.from(chatPanel, { opacity: 0, y: 50, duration: 0.5 });
  });

  chatClose.addEventListener('click', () => {
    gsap.to(chatPanel, { opacity: 0, y: 50, duration: 0.5, onComplete: () => {
      chatPanel.style.display = 'none';
    }});
  });

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage("You", text);
    chatInput.value = "";

    // fake bot reply
    setTimeout(() => {
      addMessage("Bot", "Thanks for your message! We’ll reply soon 😊");
    }, 1000);
  });

  function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = 'chat-message';
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(msg);

    // Animate message entry
    gsap.from(msg, { opacity: 0, y: 20, duration: 0.5, ease: "power1.out" });

    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
