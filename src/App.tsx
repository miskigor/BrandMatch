import React from 'react';
import { ArrowRight, Users, Share2, Globe, Smartphone, Mail, MapPin, Calendar, X, ExternalLink, Instagram, Facebook, Menu, Sparkles, Zap } from 'lucide-react';

function App() {
  const [selectedService, setSelectedService] = React.useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const services = [
    {
      id: 1,
      title: "Vođenje društvenih mreža",
      description: "Vaši profili, naš zadatak – kreiramo sadržaj koji privlači pažnju, gradi povjerenje i pretvara pratitelje u kupce.",
      fullDescription: `Društvene mreže danas su najjači kanal komunikacije s vašim kupcima i pratiteljima. Zato je važno da vaš sadržaj bude dosljedan, kreativan i strateški usmjeren.

Naš tim preuzima kompletno vođenje vaših profila od kreiranja vizualno privlačnih objava i videa, do osmišljavanja kampanja i praćenja trendova koji donose rezultate.`,
      image: '/brooke-lark-W1B2LpQOBxA-unsplash.jpg',
      icon: <Share2 className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Izrada web-stranica",
      description: "Moderne, brze, responsivne stranice – od landing pagea do webshopa",
      fullDescription: "Razvijamo moderne, brze i potpuno responsivne web stranice prilagođene vašim potrebama. Od jednostavnih landing stranica do kompleksnih webshopova s integriranim sustavima plaćanja. Koristimo najnovije tehnologije, osiguravamo SEO optimizaciju i garantiramo izvrsno korisničko iskustvo na svim uređajima.",
      image: '/domenico-loia-hGV2TfOh0ns-unsplash.jpg',
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Suradnja na Društvenim mrežama",
      description: "Tražite suradnju koja izgleda prirodno, a donosi mjerljive rezultate? Kao Mia Miškulin (MM.Mia), povezujem se s publikom kroz autentičan sadržaj i jasnu strategiju.",
      fullDescription: `Što dobivate:
Kreativni koncept usklađen s brendom i ciljevima
Produkciju sadržaja (foto/video, Reels/Story/TikTok)
Jasne deliverable i rokove isporuke
Usklađenost s brend guideline-ima i označavanje #ad / suradnja
Mjesečni ili kampanjski izvještaj o rezultatima (reach, engagement, CTR*)
Formati suradnje:
Jednokratna kampanja (launch, promocija, sezonska akcija)
Dugoročno ambasadorstvo
UGC sadržaj (kreiram sadržaj za vaše kanale, bez objave na mojima)
Giveaway / aktivacije zajednice`,
      image: '/nathana-reboucas-Xfs4JHzLR-g-unsplash.jpg',
      icon: <Users className="w-6 h-6" />,
      gradient: "from-pink-500 to-orange-500"
    },
    {
      id: 4,
      title: "Razvoj mobilnih aplikacija",
      description: "Funkcionalne aplikacije optimizirane za korisničko iskustvo",
      fullDescription: "Kreiramo native i cross-platform mobilne aplikacije koje pružaju iznimno korisničko iskustvo. Od koncepta do objave na App Store i Google Play, vodimo vas kroz cijeli proces razvoja. Naše aplikacije su optimizirane za performanse, sigurnost i skalabilnost, s fokusom na intuitivni dizajn i funkcionalnost.",
      image: '/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.jpg',
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-orange-500 to-pink-500"
    }
  ];

  const portfolioItems = [
    {
      title: "Portfolijo Vladimir Ilic",
      description: "Football Skills • Content Creator • TikTok & Instagram",
      image: "/img_7179.jpg",
      url: "https://vladimirilic.bar/",
      category: "Portfolio"
    },
    {
      title: "SKYSTRAL MARKETING",
      description: "Osnažujemo brendove s marketinškim rješenjima temeljenima na podacima",
      image: "/lux.png",
      url: "https://skystral.com/",
      category: "Marketing"
    },
    {
      title: "Reiseziel Kroatien",
      description: "Kuće za odmor i apartmani u Bilicama na obali Prokljanskog jezera.",
      image: "/2ac326da-c6a2-4294-b304-129379b9f0ac.jpeg",
      url: "https://reiseziel-kroatien.de/",
      category: "Tourism"
    }
  ];

  const openModal = (serviceId: number) => {
    setSelectedService(serviceId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800 overflow-x-hidden porcelain-shine">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <header className="relative z-40">
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm" role="navigation" aria-label="Glavna navigacija">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                <div className="text-2xl font-light bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ADORES.FSH
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="nav-link">Početna</a>
                <a href="#services" className="nav-link">Usluge</a>
                <a href="#product" className="nav-link">Proizvod</a>
                <a href="#portfolio" className="nav-link">Portfelj</a>
                <a href="#about" className="nav-link">O nama</a>
                <a href="#contact" className="nav-link">Kontakt</a>
                
                <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-300">
                  <a
                    href="https://www.instagram.com/brandmatch1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon hover:bg-purple-100"
                    aria-label="Instagram profil BrandMatch agencije"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61574606981810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon hover:bg-blue-100"
                    aria-label="Facebook stranica BrandMatch agencije"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg glass-effect hover:bg-purple-100 transition-all"
                aria-label="Otvori mobilni meni"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`} role="dialog" aria-modal="true" aria-label="Mobilni meni">
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={closeMobileMenu}></div>
        <div className="absolute right-0 top-0 h-full w-80 glass-effect border-l border-gray-200">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ADORES.FSH
            </div>
            <button onClick={closeMobileMenu} className="p-2 hover:bg-purple-100 rounded-lg transition-colors" aria-label="Zatvori mobilni meni">
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <nav className="p-6 space-y-6" aria-label="Mobilna navigacija">
            {['Početna', 'Usluge', 'Proizvod', 'Portfelj', 'O nama', 'Kontakt'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={closeMobileMenu}
                className="block text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/andras-vas-Bd7gNnWJBkU-unsplash copy copy copy copy copy.jpg"
              alt="Profesionalni marketing tim BrandMatch agencije"
              className="w-full h-full object-cover object-right"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight">
              <span
                className="block bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient font-extralight"
                style={{ WebkitTextStroke: '0.5px rgba(139, 92, 246, 0.3)', paintOrder: 'stroke fill' }}
              >
                BrandMatch
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Kod pretvaramo u <span className="text-purple-600 font-medium">uspjeh</span>
            </p>
            
            <div className="text-center">
              <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 border-purple-200 bg-white/60 backdrop-blur-sm shadow-xl">
                <div className="relative z-10">
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extralight mb-6 sm:mb-8 text-gray-800 max-w-2xl mx-auto leading-relaxed">
                    Spremni ste pokrenuti svoj brand na sljedeću razinu?
                  </p>

                  <a
                    href="mailto:info@adoresfsh.com?subject=Upit za suradnju&body=Pozdrav,%0D%0A%0D%0AŽelim saznati više o vašim uslugama.%0D%0A%0D%0ASrdačan pozdrav"
                    className="btn-primary group inline-flex items-center text-sm sm:text-base"
                  >
                    <Mail className="mr-2 sm:mr-3 w-4 h-4 sm:w-6 sm:h-6" />
                    Pošalji upit
                    <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        </div>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-thin mb-6 text-gray-800">
                Što možemo učiniti za vas
              </h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Spoj kreativnosti i tehnologije za brendove koji žele ostati zapamćeni
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group service-card glass-effect border-2 border-gray-200 rounded-3xl overflow-hidden cursor-pointer hover:border-purple-300 transition-all duration-300 shadow-lg"
                  onClick={() => openModal(service.id)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent`}></div>
                    <div className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-8 bg-white/50">
                    <h3 className="text-2xl font-light mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center text-purple-600 font-light">
                      Saznaj više
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
        </div>

        {/* Product Section */}
        <section id="product" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-5xl md:text-6xl font-thin mb-4 text-gray-800">
                Naš proizvod
              </h2>
            </div>

            <div className="glass-effect border-2 border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-xl">
              <div className="mb-12">
                <div className="relative border-2 border-purple-200 rounded-2xl p-2 max-w-4xl mx-auto shadow-lg">
                  <img
                    src="/Slika zaslona 2025-11-14 u 18.26.20.png"
                    alt="Moderan Sistem za Salone"
                    className="w-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-purple-100/10 rounded-2xl pointer-events-none"></div>
                </div>
              </div>

              <a
                href="https://brandmatchonline.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center"
              >
                Saznaj više
                <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-thin mb-6 text-gray-800">
                Naši projekti
              </h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Pogledajte naše najnovije projekte i uspjehe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="group portfolio-card glass-effect border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-purple-300 transition-all duration-300 shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-purple-100/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 bg-white/50">
                    <h3 className="text-xl font-light mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors font-light"
                    >
                      Pogledaj projekt
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        </div>

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-5xl md:text-6xl font-thin mb-8 text-gray-800">
                O nama
              </h2>
            </div>

            <div className="glass-effect border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Obrt ADORES.FSH
                </h3>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8 border border-purple-200 shadow-inner">
                <div className="space-y-4 text-gray-700 leading-relaxed font-light">
                  <p>
                    Adores FSH je digitalni obrt specijaliziran za izradu modernih web stranica, web aplikacija i profesionalnih portfolija, kao i za razvoj suradnji na društvenim mrežama. Naš cilj je pomoći klijentima da se istaknu u digitalnom prostoru kroz kvalitetna, funkcionalna i vizualno privlačna rješenja.
Svaki projekt započinjemo razumijevanjem potreba klijenta i stvaranjem rješenja koje je prilagođeno njegovom poslovanju. Fokusirani smo na čistu strukturu, brzinu, responzivan dizajn i jasno korisničko iskustvo, jer vjerujemo da dobra web stranica mora biti jednako učinkovita koliko i lijepa.

                  </p>
                  <p>
                    
Osim izrade web rješenja, pomažemo u izgradnji online prisutnosti kroz suradnje na društvenim mrežama, osmišljavanje digitalnog sadržaja i razvoj prepoznatljivog identiteta brenda.
Adore SFSH gradi dugoročne odnose s klijentima temeljem profesionalnosti, otvorene komunikacije i pouzdanosti u svakom koraku suradnje. Ne nudimo gotova rješenja – svaki projekt razvijamo s jasnom svrhom i mjerljivim rezultatima.
Naš cilj je jednostavan: pretvoriti ideje u funkcionalne digitalne proizvode koji ostavljaju snažan dojam.
                  </p>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-lg sm:text-xl text-gray-700 font-light">
                  Vlasnica: <span className="text-purple-600 font-medium">Mia Miškulin</span>
                </p>
              </div>

              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3 glass-effect px-6 py-3 rounded-full border border-gray-200 shadow-md">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="font-light text-gray-700">Osnovan 1. srpnja 2023.</span>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-light text-center mb-6 text-purple-600">MM.Mia</h4>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/mm.mia1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-large bg-gradient-to-r from-purple-500 to-pink-500"
                    aria-label="Instagram profil Mia Miškulin"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/mm.miablogger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-large bg-gradient-to-r from-blue-500 to-purple-500"
                    aria-label="Facebook stranica Mia Miškulin"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@_mm.mia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-large bg-gradient-to-r from-pink-500 to-purple-500"
                    aria-label="TikTok profil Mia Miškulin"
                  >
                    <div className="w-6 h-6 font-bold text-sm flex items-center justify-center">
                      TT
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-8 text-gray-800">
                Kontaktirajte nas
              </h2>
            </div>

            <div className="glass-effect border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-lg sm:text-xl md:text-2xl font-extralight mb-12 text-gray-700 leading-relaxed">
                Spremni ste pokrenuti svoj brand na sljedeću razinu?
              </p>

              <a
                href="mailto:info@adoresfsh.com?subject=Upit za suradnju&body=Pozdrav,%0D%0A%0D%0AŽelim saznati više o vašim uslugama.%0D%0A%0D%0ASrdačan pozdrav"
                className="btn-primary group inline-flex items-center text-lg"
              >
                <Mail className="mr-3 w-6 h-6" />
                Pošaljite upit
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-purple-200 py-12 px-6 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-light mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ADORES.FSH
          </div>

          <div className="flex items-center justify-center space-x-3 mb-6">
            <MapPin className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">Dr. Franje Tuđmana 27A, Ilok, 32236, Hrvatska</span>
          </div>

          <p className="text-gray-600">
            © 2024 ADORES.FSH. Sva prava pridržana.
          </p>
        </div>
      </footer>

      {/* Modal */}
      {selectedService && selectedServiceData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="relative max-w-4xl w-full max-h-[90vh] glass-effect border-2 border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-3 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
              aria-label="Zatvori modal"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <div className="relative h-64 md:h-80">
              <img
                src={selectedServiceData.image}
                alt={`${selectedServiceData.title} - vizualni prikaz usluge`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${selectedServiceData.gradient} text-white shadow-lg`}>
                  {selectedServiceData.icon}
                </div>
                <h3 id="modal-title" className="text-3xl md:text-4xl font-bold text-gray-800">
                  {selectedServiceData.title}
                </h3>
              </div>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-20rem)] bg-white/60">
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {selectedServiceData.fullDescription}
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="btn-secondary"
                >
                  Zatvori
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;