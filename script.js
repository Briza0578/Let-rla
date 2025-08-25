function mostrarConteudo(item) {
  const conteudo = document.getElementById('conteudo');

  if (item === 1) {
    conteudo.innerHTML = `
      <section id="conteudo" class="ofertas container">
    <h3>Ofertas</h3>
    <p>Paris, FRANÇA</p>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card">
          <img src="https://viagem.cnnbrasil.com.br/wp-content/uploads/sites/5/2024/01/Torre-Eiffel-Unsplash.jpg?w=1200&h=900&crop=0" class="card-img-top" alt="Paris">
          <div class="card-body">
            <h5 class="card-title">Fique em casas de temporada incríveis</h5>
            <p class="card-text">Escolha entre casas, villas, chalés e muito mais.</p>
            <a href="#" class="btn btn-primary">Reserve o seu</a>
          </div>
        </div>
      </div>
      <section>
    `;
  } else if (item === 2) {
    conteudo.innerHTML = `
      <h2>Tóquio</h2>
      <img src="https://via.placeholder.com/600x300?text=Tóquio" alt="Tóquio">
      <p class="descricao">Descrição do destino Tóquio.</p>
    `;
  } else if (item === 3) {
    conteudo.innerHTML = `
      <h2>Chaves</h2>
      <img src="https://via.placeholder.com/600x300?text=Chaves" alt="Chaves">
      <p class="descricao">Descrição do destino Chaves.</p>
    `;
  }
}
