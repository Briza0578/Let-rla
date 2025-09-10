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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
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
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>


    `;
  } else if (item === 5) {
    conteudo.innerHTML = `
      <section id="conteudo-ny" class="ofertas container">
  <h3>Ofertas</h3>
  <p>Londres - Inglaterra</p>
  <div class="row g-4">
    
    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/460258021.jpg?k=6a9fca64c214c8139f3a9c6cde25b737c2db3e7c2353b1d85bdbab9db5cfb7e2&o=" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">The Langham, New York, Fifth Avenue</h5>
          <p class="card-text">Luxuoso hotel na 5ª Avenida, oferece quartos amplos, serviço de alto padrão, restaurante renomado e vista para o Empire State Building.</p>
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/467568541.jpg?k=30cf5f81c675e4dd6d6f50decd30d3d373bc656394241c47f60c9a5ef0d06e0f&o=" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">Lotte New York Palace</h5>
          <p class="card-text">Clássico e sofisticado, localizado perto da Catedral de St. Patrick. Quartos elegantes e serviço exclusivo no coração de Manhattan.</p>
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/457192438.jpg?k=645fdac8e690b2f75f59c3821ef8ebda7a4f3a20875f42c8fbecf0a4e91e70e8&o=" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">Margaritaville Resort Times Square</h5>
          <p class="card-text">Resort moderno no coração da Times Square, com rooftop, piscina e ambiente descontraído. Perfeito para quem busca energia da cidade.</p>
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/467030181.jpg?k=ca59c46d453d013f7161a45a5a18121c622d0e4e181f667f4a7732851da08b16&o=" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">The Peninsula New York</h5>
          <p class="card-text">Hotel 5 estrelas na 5ª Avenida com spa luxuoso, restaurante sofisticado e rooftop bar com uma das melhores vistas da cidade.</p>
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>

    `;
  } else if (item === 6) {
    conteudo.innerHTML = `
      <section id="conteudo-ny" class="ofertas container">
  <h3>Ofertas</h3>
  <p>Dubai - EAU</p>
  <div class="row g-4">
    
    <div class="col-md-6">
      <div class="card">
        <img src="https://s2-g1.glbimg.com/SAPfUNYcsf4N9KoEm49l7cgFKh4=/0x0:2000x1303/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/F/G/ETz7pNR6u4xaZoqvgd0g/063-39426114towe-20010919-00124.jpg.jpg" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">The Langham, New York, Fifth Avenue</h5>
          <p class="card-text">Luxuoso hotel na 5ª Avenida, oferece quartos amplos, serviço de alto padrão, restaurante renomado e vista para o Empire State Building.</p>
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/467568541.jpg?k=30cf5f81c675e4dd6d6f50decd30d3d373bc656394241c47f60c9a5ef0d06e0f&o=" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">Lotte New York Palace</h5>
          <p class="card-text">Clássico e sofisticado, localizado perto da Catedral de St. Patrick. Quartos elegantes e serviço exclusivo no coração de Manhattan.</p>
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/457192438.jpg?k=645fdac8e690b2f75f59c3821ef8ebda7a4f3a20875f42c8fbecf0a4e91e70e8&o=" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">Margaritaville Resort Times Square</h5>
          <p class="card-text">Resort moderno no coração da Times Square, com rooftop, piscina e ambiente descontraído. Perfeito para quem busca energia da cidade.</p>
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/467030181.jpg?k=ca59c46d453d013f7161a45a5a18121c622d0e4e181f667f4a7732851da08b16&o=" 
             class="card-img-top" alt="Nova York">
        <div class="card-body">
          <h5 class="card-title">The Peninsula New York</h5>
          <p class="card-text">Hotel 5 estrelas na 5ª Avenida com spa luxuoso, restaurante sofisticado e rooftop bar com uma das melhores vistas da cidade.</p>
          <a href="#" class="btn btn-primary">Reserve o seu</a>
        </div>
      </div>
    </div>

  </div>
</section>

    `;
  }
}
