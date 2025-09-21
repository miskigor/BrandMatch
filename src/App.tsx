import React from 'react';
import { ArrowRight, Users, Share2, Globe, Smartphone, Mail, MapPin, Calendar, X, ExternalLink, Newspaper, Instagram, Facebook, Menu } from 'lucide-react';

function App() {
  const [selectedService, setSelectedService] = React.useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [visibleWords, setVisibleWords] = React.useState(0);

  const servicesTitle = "ŠTO MOŽEMO UČINITI ZA VAS";
  const titleWords = servicesTitle.split(' ');

  React.useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords(prev => {
        if (prev < titleWords.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 300); // 300ms delay between words

    return () => clearInterval(timer);
  }, [titleWords.length]);

  const services = [
    {
      id: 1,
      title: "Vođenje društvenih mreža",
      description: "Vaši profili, naš zadatak – kreiramo sadržaj koji privlači pažnju, gradi povjerenje i pretvara pratitelje u kupce.",
      fullDescription: `Društvene mreže danas su najjači kanal komunikacije s vašim kupcima i pratiteljima. Zato je važno da vaš sadržaj bude dosljedan, kreativan i strateški usmjeren.

Naš tim preuzima kompletno vođenje vaših profila od kreiranja vizualno privlačnih objava i videa, do osmišljavanja kampanja i praćenja trendova koji donose rezultate.`,
      image: '/brooke-lark-W1B2LpQOBxA-unsplash.jpg',
      icon: <Share2 className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Izrada web-stranica",
      description: "Moderne, brze, responsivne stranice – od landing pagea do webshopa",
      fullDescription: "Razvijamo moderne, brze i potpuno responsivne web stranice prilagođene vašim potrebama. Od jednostavnih landing stranica do kompleksnih webshopova s integriranim sustavima plaćanja. Koristimo najnovije tehnologije, osiguravamo SEO optimizaciju i garantiramo izvrsno korisničko iskustvo na svim uređajima.",
      image: '/domenico-loia-hGV2TfOh0ns-unsplash.jpg',
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Suradnja na Društvenim mrežama",
      description: "Tražite suradnju koja izgleda prirodno, a donosi mjerljive rezultate? Kao Mia Miškulin (MM.Mia), povezujem se s publikom kroz autentičan sadržaj i jasnu strategiju. Zajedno oblikujemo priču vašeg brenda kroz formate koji zaista rade – od kratkih videa do storytelling kampanja i dugoročnih partnerstava.",
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
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Razvoj mobilnih aplikacija",
      description: "Funkcionalne aplikacije optimizirane za korisničko iskustvo",
      fullDescription: "Kreiramo native i cross-platform mobilne aplikacije koje pružaju iznimno korisničko iskustvo. Od koncepta do objave na App Store i Google Play, vodimo vas kroz cijeli proces razvoja. Naše aplikacije su optimizirane za performanse, sigurnost i skalabilnost, s fokusom na intuitivni dizajn i funkcionalnost.",
      image: '/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.jpg',
      icon: <Smartphone className="w-8 h-8" />
    }
  ];

  const pressArticles = [
    {
      id: 1,
      title: "Mlada Iločanka koja danas živi u Beču pokreće svoj modni brend Adores",
      image: "/On Black (1).jpg",
      portal: "Diva.vecernji.hr",
      link: "https://diva.vecernji.hr/moda/mlada-ilocanka-koja-danas-zivi-u-becu-pokrece-svoj-modni-brand-adores-19863",
      date: "15. siječnja 2024."
    },
    {
      id: 2,
      title: "Mia Miškulin ima samo 18 godina, prati ju više od milijun ljudi, a sada ima i vlastiti modni brend",
      image: "/On Black (1).jpg",
      portal: "miss7.24sata.hr",
      link: "https://miss7.24sata.hr/native-sadrzaj/mia-miskulin-ima-samo-18-godina-prati-ju-vise-od-milijun-ljudi-a-sada-ima-i-vlastiti-modni-brend-50182",
      date: "8. prosinca 2023."
    },
    {
      id: 3,
      title: "Iločanka Mia Miškulin pokreće modni brand Adores",
      image: "/On Black (1).jpg",
      portal: "Press032",
      link: "https://press032.com/ilocanka-mia-miskulin-pokrece-modni-brand-adores/#google_vignette",
      date: "20. siječnja 2024."
    },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-thin">
      {/* Navigation */}
      <header>
        <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10" role="navigation" aria-label="Glavna navigacija">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-extralight tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-white">
                ADORES.FSH
              </span>
            </div>
            <div className="hidden md:flex space-x-8 font-light">
              <a href="#home" className="text-white hover:text-purple-300 transition-all duration-300" aria-label="Idi na početnu stranicu">Početna</a>
              <a href="#services" className="text-white hover:text-purple-300 transition-all duration-300" aria-label="Pogledaj naše usluge">Usluge</a>
              <a href="#about" className="text-white hover:text-purple-300 transition-all duration-300" aria-label="Saznaj više o nama">O nama</a>
              <a href="#press" className="text-white hover:text-purple-300 transition-all duration-300" aria-label="Pogledaj medijske članke">Mediji</a>
              <a href="#contact" className="text-white hover:text-purple-300 transition-all duration-300" aria-label="Kontaktiraj nas">Kontakt</a>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-white/20">
                <a 
                  href="https://www.instagram.com/brandmatch1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-all duration-300 hover:scale-110"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61574606981810" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-all duration-300 hover:scale-110"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-white hover:text-purple-300 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMobileMenu}></div>
        <div className="absolute right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/20 shadow-2xl">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="text-xl font-extralight tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-white">
              ADORES.FSH
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-white hover:text-purple-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="p-6">
            <div className="space-y-6">
              <a 
                href="#home" 
                onClick={closeMobileMenu}
                className="block text-xl font-light text-white hover:text-purple-300 transition-all duration-300 py-2"
              >
                Početna
              </a>
              <a 
                href="#services" 
                onClick={closeMobileMenu}
                className="block text-xl font-light text-white hover:text-purple-300 transition-all duration-300 py-2"
              >
                Usluge
              </a>
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="block text-xl font-light text-white hover:text-purple-300 transition-all duration-300 py-2"
              >
                O nama
              </a>
              <a 
                href="#press" 
                onClick={closeMobileMenu}
                className="block text-xl font-light text-white hover:text-purple-300 transition-all duration-300 py-2"
              >
                Mediji
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block text-xl font-light text-white hover:text-purple-300 transition-all duration-300 py-2"
              >
                Kontakt
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24" aria-label="Glavna sekcija">
        <div className="absolute inset-0 z-0">
          <img
            src="andras-vas-Bd7gNnWJBkU-unsplash copy copy copy copy copy.jpg"
            alt="Profesionalni marketing tim BrandMatch agencije radeći na kreativnim projektima"
            className="w-full h-full object-cover transform scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
        </div>
        
        <div className="absolute bottom-24 left-6 z-20 text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extralight mb-6 leading-tight transform perspective-1000 rotateX-5">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-300 animate-fade-in-hero">
              BrandMatch
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90 leading-relaxed ml-0">
            <span className="animate-fade-in-subtitle">Kod pretvaramo u uspjeh.</span>
          </p>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative z-10" aria-label="Naše usluge">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-400 animate-fade-in">
              ŠTO MOŽEMO UČINITI ZA VAS
            </h2>
            <p className="text-xl font-light opacity-80 max-w-2xl mx-auto">
              Spoj kreativnosti i tehnologije za brendove koji žele ostati zapamćeni
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                onClick={() => openModal(service.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: 'perspective(1000px) rotateX(5deg) rotateY(-2deg)'
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`Ilustracija usluge: ${service.title} - ${service.description}`}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 text-purple-300 opacity-80 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-light mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && selectedServiceData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/20">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative h-64 md:h-80">
              <img
                src={selectedServiceData.image}
                alt={`Detaljna ilustracija usluge: ${selectedServiceData.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <div className="text-purple-300">
                  {selectedServiceData.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-light">
                  {selectedServiceData.title}
                </h3>
              </div>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
              <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                {selectedServiceData.fullDescription}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-6 py-3 rounded-full font-light transition-all duration-300 transform hover:scale-105"
                >
                  Zatvori
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm" aria-label="O nama">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
            O nama
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 transform perspective-1000 rotateX-2">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-light">Obrt ADORES.FSH</h3>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              </div>
              
              <p className="text-lg font-light opacity-90 mb-6">
                Vlasnica: <span className="text-purple-300">Mia Miškulin</span>
              </p>
              
              {/* Owner Description Section */}
              <div className="bg-gradient-to-r from-purple-900/60 to-purple-600/40 rounded-xl p-6 mb-6 border border-purple-500/20">
                <h4 className="text-lg font-light text-purple-200 mb-4">O vlasnici</h4>
                <div className="text-left space-y-3">
                  <p className="font-light opacity-90 leading-relaxed">
                    Ja sam Mia Miškulin — MM.Mia. Influencerica, content kreatorica i osnivačica ADORES.FSH. Rođena u Vukovaru, živim u Beču, a svoju zajednicu gradim kroz autentičan sadržaj, marketing i projekte koji donose stvarne rezultate. Pronađi me na društvenim mrežama kao @mm.mia.
Nakon školovanja na Vienna Business School, nastavila sam obrazovanje u smjeru Marketing & Sales te paralelno razvijala karijeru na YouTubeu i drugim mrežama. 1. srpnja 2023. pokrećem vlastiti obrt ADORES.FSH i svoj brend, a uz marketing kontinuirano usavršavam programiranje kako bih brendovima ponudila cjelovita digitalna rješenja.

                  </p>
                  <p className="font-light opacity-90 leading-relaxed">
                    
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="font-light">Dr. Franje Tuđmana 27A, Ilok, 32236, Hrvatska</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="font-light">Osnovan 1. srpnja 2023.</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-xl font-light text-center mb-4 text-purple-300">MM.Mia</h4>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://instagram.com/mm.mia1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-purple-500/20 rounded-full transition-all duration-300 hover:scale-125"
                  >
                    <Instagram className="https://www.instagram.com/mm.mia1/" />
                  </a>
                  <a 
                    href="https://www.facebook.com/mm.miablogger" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 hover:scale-125"
                  >
                    <Facebook className="w-6 h-6 text-blue-400 hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@_mm.mia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-pink-500/20 rounded-full transition-all duration-300 hover:scale-125"
                  >
                    <div className="w-6 h-6 text-pink-400 hover:text-white transition-colors font-bold text-sm flex items-center justify-center">
                      TT
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press/Media Section */}
      <section id="press" className="py-24 px-6" aria-label="Medijski sadržaj">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-400">
              MEDIJI O NAMA
            </h2> 
            <p className="text-lg font-light opacity-80 max-w-3xl mx-auto mt-4 leading-relaxed">
              
       
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressArticles.map((article, index) => (
              <a
                key={article.id}
               href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer block"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: 'perspective(1000px) rotateX(5deg) rotateY(-2deg)'
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={`Medijski članak: ${article.title} objavljen u ${article.portal}`}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 text-purple-300 opacity-80 group-hover:text-white transition-colors">
                    <Newspaper className="w-6 h-6" />
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-light text-white/90">{article.portal}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-light group-hover:text-purple-300 transition-colors leading-tight flex-1">
                      {article.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-sm opacity-60 font-light">
                    {article.date}
                  </p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6" aria-label="Kontakt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 animate-fade-in-slow">
            Kontaktirajte nas
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 transform perspective-1000 rotateX-2">
            <p className="text-xl font-light mb-8 opacity-90">
              Spremni ste pokrenuti svoj brand na sljedeću razinu?
            </p>
            
            <a 
              href="mailto:info@adoresfsh.com?subject=Upit za suradnju&body=Pozdrav,%0D%0A%0D%0AŽelim saznati više o vašim uslugama.%0D%0A%0D%0ASrdačan pozdrav"
              className="group inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <Mail className="inline-block mr-2 w-5 h-5" />
              Pošaljite upit
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 py-8 px-6" role="contentinfo">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-extralight tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            ADORES.FSH
          </div>
          <p className="font-light opacity-60">
            © 2024 ADORES.FSH. Sva prava pridržana.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
