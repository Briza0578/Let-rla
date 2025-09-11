function alerta() {
  alert("Não está mais disponivel!");
}

function Tema() {
  document.body.classList.toggle("dark");
}



function mostrarConteudo(item) {
  const conteudo = document.getElementById('ofertas');

  if (item === 1) {
    conteudo.innerHTML = `
      <section class="ofertas container">
  <h3>Ofertas</h3>
  <p>Paris, FRANÇA</p>
  <div class="row g-4">
    
    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/441797467.jpg?k=46a76f7dcee7c1d4339e007bc9e028e6e2bcf4bd5d82dd5b13da164a78f25777&o=" 
             class="card-img-top" alt="Paris">
        <div class="card-body">
          <h5 class="card-title">Too Hotel & Spa Paris - MGallery Collection</h5>
          <p class="card-text"> hotel oferece a você quartos com ar-condicionado, mesa de trabalho, cafeteira, geladeira, cofre, TV de tela plana e banheiro privativo com chuveiro. Este hotel conta com algumas unidades com vista para o rio, e os quartos contam com chaleira. Neste hotel, os quartos têm roupa de cama e toalhas.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/555156427.jpg?k=1a860e1b494ce612696a26a004d99f8b1cb7e859e75cd3918c62e2adc1cdb734&o=" 
             class="card-img-top" alt="Paris">
        <div class="card-body">
          <h5 class="card-title">SO/ Paris Hotel</h5>
          <p class="card-text">Neste hotel, os quartos possuem guarda-roupa, TV de tela plana, banheiro privativo, roupa de cama e toalhas. Os quartos têm cafeteira, enquanto alguns quartos também contam com varanda e outros também contam com vista para a cidade. As unidades oferecem cofre..</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/335771125.jpg?k=0807e19ea9cfd6c13123f74f7e0fcb453cadb79c153ef377be8608f237316cf0&o=" 
             class="card-img-top" alt="Paris">
        <div class="card-body">
          <h5 class="card-title">Hôtel Moderniste</h5>
          <p class="card-text">Localizado em uma bela e muito tranquila “rua burguesa” no 15º arrondissement de Paris, no centro do distrito de convenções e muito perto do Centro de Exposições Porte de Versailles, o Hôtel Moderniste abre suas portas após uma renovação completa.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/393897274.jpg?k=0aea86f2dd71a7e8b1b21132117e23ad2c1c32d164f5b5f87cbf7052657db2be&o=" 
             class="card-img-top" alt="Paris">
        <div class="card-body">
          <h5 class="card-title">Quinzerie hôtel</h5>
          <p class="card-text">Quinzerie hôtel oferece academia, jardim, lounge compartilhado e terraço em Paris. Este hotel 4 estrelas oferece serviço de quarto, uma recepção 24 horas e Wi-Fi grátis. O hotel tem sauna e um caixa eletrônico.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>

    `;
  } else if (item === 2) {
    conteudo.innerHTML = `
      <section class="ofertas container">
  <h3>Ofertas</h3>
  <p>Tóquio, JAPÃO</p>
  <div class="row g-4">
    
    <div class="col-md-6">
      <div class="card">
        <img src="https://cache.marriott.com/content/dam/marriott-renditions/TYOAM/tyoam-grand-piano-8093-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*" 
             class="card-img-top" alt="Tokio">
        <div class="card-body">
          <h5 class="card-title">Mesm Tokyo, Autograph Collection</h5>
          <p class="card-text">Hotel 5 estrelas em Minato, com restaurante, academia e vista para a cidade. Quartos modernos com TV de tela plana, cafeteira e banheiro luxuoso.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/30886701.jpg?k=cb9261a150de681eec474edc50dcac335d9b211b498b7fb4ec62883bf404a69b&o=&hp=1" 
             class="card-img-top" alt="Tokio">
        <div class="card-body">
          <h5 class="card-title">The Royal Park Iconic Tokyo Shiodome</h5>
          <p class="card-text">Localizado no centro de Tóquio, próximo a Ginza e Shimbashi, oferece quartos elegantes, restaurante panorâmico e academia moderna.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://www.kayak.com.br/rimg/himg/9b/88/58/ice-157315710-79078021_3XL-654675.jpg?width=1366&height=768&crop=true" 
             class="card-img-top" alt="Tokio">
        <div class="card-body">
          <h5 class="card-title">Park Hotel Tokyo</h5>
          <p class="card-text">Hotel boutique no distrito de Shiodome, famoso por seus quartos com obras de arte originais e vista espetacular da Torre de Tóquio.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://images.trvl-media.com/lodging/10000000/9110000/9104500/9104481/574bb46b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" 
             class="card-img-top" alt="Tokio">
        <div class="card-body">
          <h5 class="card-title">Hotel Gracery Shinjuku</h5>
          <p class="card-text">Ícone de Shinjuku, famoso pela cabeça gigante do Godzilla em sua fachada. Quartos confortáveis, restaurantes e localização incrível.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>

    `;
  } else if (item === 3) {
    conteudo.innerHTML = `
      <section id="conteudo-ny" class="ofertas container">
  <h3>Ofertas</h3>
  <p>Nova York, EUA</p>
  <div class="row g-4">
    
    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/663985071.jpg?k=c3bc28ef8da4947d60d54d565b0b36fd09836f91931f12b60eb536dd416a0f08&o=&hp=1" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">The Langham, New York, Fifth Avenue</h5>
          <p class="card-text">Luxuoso hotel na 5ª Avenida, oferece quartos amplos, serviço de alto padrão, restaurante renomado e vista para o Empire State Building.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/aa/6c/39/the-new-york-palace-hotel.jpg" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">Lotte New York Palace</h5>
          <p class="card-text">Clássico e sofisticado, localizado perto da Catedral de St. Patrick. Quartos elegantes e serviço exclusivo no coração de Manhattan.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/320149264.jpg?k=3de8205a982c720f7ce26727db06cab61ffaf0dca3336c1e23d3c11c972578fd&o=&hp=1" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">Margaritaville Resort Times Square</h5>
          <p class="card-text">Resort moderno no coração da Times Square, com rooftop, piscina e ambiente descontraído. Perfeito para quem busca energia da cidade.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://www.kayak.com.br/rimg/himg/2b/3d/b8/leonardo-13396-572016-081527.jpg?width=1366&height=768&crop=true" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">The Peninsula New York</h5>
          <p class="card-text">Hotel 5 estrelas na 5ª Avenida com spa luxuoso, restaurante sofisticado e rooftop bar com uma das melhores vistas da cidade.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>

    `;
  } else if (item === 4) {
    conteudo.innerHTML = `
      <section id="rio" class="ofertas container">
  <h3>Ofertas</h3>
  <p>Rio de Janeiro, BRASIL</p>
  <div class="row g-4">
    
    <div class="col-md-6">
      <div class="card">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d8/0b/31/belmond-copacabana-palace.jpg?w=900&h=500&s=1" 
             class="card-img-top" alt="Rio de Janeiro">
        <div class="card-body">
          <h5 class="card-title">Copacabana Palace, A Belmond Hotel</h5>
          <p class="card-text">Ícone do Rio, localizado na Praia de Copacabana. Oferece suítes luxuosas, piscina glamorosa e serviço impecável com tradição internacional.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/489284325.jpg?k=61fbed90fe0a589bea4bb36c49137ed28299195acca123f303648aaf686a08e4&o=&hp=1" 
             class="card-img-top" alt="Rio de Janeiro">
        <div class="card-body">
          <h5 class="card-title">Hotel Fasano Rio de Janeiro</h5>
          <p class="card-text">Elegância e sofisticação na Praia de Ipanema, com rooftop e piscina de borda infinita que oferecem vista espetacular para o mar.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://windsorhoteis.com/media/acomodacoes/miramar-by-windsor-luxo-final-04_4ao3pTb.jpg" 
             class="card-img-top" alt="Rio de Janeiro">
        <div class="card-body">
          <h5 class="card-title">Miramar by Windsor</h5>
          <p class="card-text">Localizado em frente à Praia de Copacabana, oferece suítes modernas, piscina no terraço com vista panorâmica e gastronomia premiada.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://passageirodeprimeira.com/wp-content/uploads/2019/11/Vista-Aerea-Fairmont_0007.jpg" 
             class="card-img-top" alt="Rio de Janeiro">
        <div class="card-body">
          <h5 class="card-title">Fairmont Rio de Janeiro Copacabana</h5>
          <p class="card-text">Hotel 5 estrelas à beira-mar com design contemporâneo, spa, duas piscinas e restaurantes de alta gastronomia com vista para o Pão de Açúcar.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>


    `;
  } else if (item === 5) {
    conteudo.innerHTML = `
      <section id="conteudo-londres" class="ofertas container">
  <h3>Ofertas</h3>
  <p>Londres - Inglaterra</p>
  <div class="row g-4">
    
    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/105333426.jpg?k=7a256812ea07b87a852089e8e14e26bda41f12c3b35318d4aa9a6744e6b420cf&o=" class="card-img-top" alt="Londres">
        <div class="card-body">
          <h5 class="card-title">The Ritz London</h5>
          <p class="card-text">Um dos hotéis mais icônicos da cidade, com luxo clássico e serviço impecável.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/195106363.jpg?k=ceedaa24d422874282fbfafe9d8dc20aeb206046c590a14477b9bde4ac8253a9&o=" class="card-img-top" alt="Londres">
        <div class="card-body">
          <h5 class="card-title">The Savoy</h5>
          <p class="card-text">Hotel histórico às margens do Tâmisa, famoso pela elegância e tradição britânica.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/195106049.jpg?k=55d081db949fcd8f53cade837da7e155414764b9912cbe72bfcf4cdc13a16ed2&o=" class="card-img-top" alt="Londres">
        <div class="card-body">
          <h5 class="card-title">Claridge’s</h5>
          <p class="card-text">Símbolo de luxo atemporal em Mayfair, conhecido por seu design Art Déco.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/194489041.jpg?k=e5c21fbc4e73b92b96086107dc158db7767a8e9c3c903e94a7a386c777270307&o=" class="card-img-top" alt="Londres">
        <div class="card-body">
          <h5 class="card-title">The Langham London</h5>
          <p class="card-text">Um dos primeiros grandes hotéis de Londres, com tradição e hospitalidade excepcionais.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>
    `;
  } else if (item === 6) {
    conteudo.innerHTML = `
      <section id="conteudo-dubai" class="ofertas container">
  <h3>Ofertas</h3>
  <p>Dubai - Emirados Árabes Unidos</p>
  <div class="row g-4">
    
    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/546843825.jpg?k=fb0ad88c46dcea803182696f1d98d9f77533f022358aeb30d0d780217162b46c&o=" class="card-img-top" alt="Dubai">
        <div class="card-body">
          <h5 class="card-title">Burj Al Arab Jumeirah</h5>
          <p class="card-text">Ícone mundial em forma de vela, símbolo de luxo e exclusividade em Dubai.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/692374834.jpg?k=ca8c8a0d5a5f7e12110e0c67bf43e295b1d07e6ca844b37c4c6ac9250408c165&o=" class="card-img-top" alt="Dubai">
        <div class="card-body">
          <h5 class="card-title">Atlantis The Palm</h5>
          <p class="card-text">Resort famoso na Palm Jumeirah, com parque aquático e aquário gigantesco.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/692374838.jpg?k=a4e141ef5bf6821933f48d71574ff1eb08b38e97fe4ab5acd4fd9c924e2a7a6c&o=" class="card-img-top" alt="Dubai">
        <div class="card-body">
          <h5 class="card-title">Armani Hotel Dubai</h5>
          <p class="card-text">Luxo contemporâneo dentro do Burj Khalifa, com design assinado por Giorgio Armani.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/692374865.jpg?k=b7a0298d0a2285ec085463b9fa64b0d7a12a1ec623c10392571e46c30893e336&o=" class="card-img-top" alt="Dubai">
        <div class="card-body">
          <h5 class="card-title">Jumeirah Beach Hotel</h5>
          <p class="card-text">Hotel icônico à beira-mar, ideal para famílias, com vistas incríveis do Burj Al Arab.</p>
          <a onclick="alerta()" href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>

    `;
  }
}
