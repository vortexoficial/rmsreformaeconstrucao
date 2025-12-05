// script.js

// 0. FUNÇÃO PARA TROCAR LOGOS (LIGHT/DARK)
function updateLogos() {
    const isDark = document.documentElement.classList.contains('dark');
    
    // Caminhos das logos ajustados
    const logoLight = "img/logop.png"; 
    const logoDark  = "img/logob.png"; 
    
    const targetLogo = isDark ? logoDark : logoLight;
    
    const logoElements = document.querySelectorAll('.theme-logo');
    logoElements.forEach(img => {
        img.src = targetLogo;
    });
}

// 1. SISTEMA DE TRADUÇÃO (I18N)
const translations = {
    'pt': {
        'nav_about': 'A RMS',
        'nav_services': 'Serviços',
        'nav_diff': 'Diferenciais',
        'nav_btn': 'Orçar Obra',
        'hero_title_1': 'Sua obra não precisa ser',
        'hero_title_highlight': 'uma dor de cabeça',
        'hero_title_2': 'sem fim.',
        'hero_title_3': 'Qualidade, prazo e acabamento fino.',
        'hero_subtitle_1': 'Do alicerce ao acabamento, a',
        'hero_subtitle_2': 'entrega a solução completa que sua reforma exige.',
        'hero_cta_text': 'Precisa de reforma, elétrica ou hidráulica?',
        'hero_btn': 'Solicitar Orçamento',
        'mq_traffic': 'Elétrica',
        'mq_launch': 'Gesso & Drywall',
        'about_title_1': 'Chega de prestadores que',
        'about_title_highlight': 'desaparecem na obra.',
        'about_subtitle': 'A RMS veio para profissionalizar o serviço.',
        'about_foundation': 'Experiência Comprovada',
        'about_founders_title': 'Compromisso e Técnica',
        'about_founders_text_1': 'A RMS Reforma & Construção nasceu da necessidade do mercado por profissionais versáteis e confiáveis.',
        'about_founders_text_2': 'Sabemos que reformar envolve sonhos e investimento. Por isso combatemos o problema clássico:',
        'about_founders_quote': '"Mão de obra desqualificada e atrasos."',
        'about_fight_title': 'Não aceitamos:',
        'about_fight_1': 'Atrasos injustificados',
        'about_fight_2': 'Desperdício de material',
        'about_fight_3': 'Sujeira pós-obra',
        'about_dna_title': 'Execução Completa',
        'about_dna_desc': 'Centralizamos tudo o que você precisa. Do gesso à elétrica, da pintura ao sistema de som. Um único contato, responsabilidade total.',
        'about_clients_title': 'Atendemos com excelência:',
        'client_type_1': 'Apartamentos',
        'client_type_2': 'Casas',
        'client_type_3': 'Lojas Comerciais',
        'client_type_4': 'Escritórios',
        'client_type_5': 'Condomínios',
        'client_type_special': 'Reformas Rápidas',
        'client_badge': 'Foco',
        'purpose_title_1': 'Seu ambiente merece ser',
        'purpose_title_highlight_1': 'confortável.',
        'purpose_title_2': 'E a execução deve ser',
        'purpose_title_highlight_2': 'impecável.',
        'purpose_text': 'Tiramos o projeto do papel e transformamos em realidade, com',
        'purpose_text_bold': 'segurança técnica e limpeza.',
        'purpose_tag_1': 'Técnica',
        'purpose_tag_2': 'Agilidade',
        'purpose_tag_3': 'Acabamento',
        'services_title': 'Nossos Serviços',
        'services_subtitle': 'Soluções completas para sua obra ou reparo.',
        'service_1_title': 'Pedreiro e Alvenaria',
        'service_1_desc': 'Construção de paredes, contrapiso, reboco e reformas estruturais com alinhamento perfeito.',
        'service_2_title': 'Pintura Profissional',
        'service_2_desc': 'Pintura interna e externa, texturas, massa corrida e acabamento fino para renovar seu ambiente.',
        'service_3_title': 'Elétrica & Hidráulica',
        'service_3_desc': 'Instalações completas, reparos de vazamentos, troca de fiação e quadros de energia.',
        'service_4_title': 'Gesso e Drywall',
        'service_4_desc': 'Forros, sancas, divisórias e nichos planejados para modernizar o design do interior.',
        'service_5_title': 'Ar Condicionado',
        'service_5_desc': 'Instalação, infraestrutura e manutenção de aparelhos Split e sistemas de climatização.',
        'service_6_title': 'Som Ambiente',
        'service_6_desc': 'Projetos de sonorização embutida no gesso para salas, varandas gourmet e comércios.',
        'diff_title': 'Obra que',
        'diff_title_highlight': 'valoriza o imóvel.',
        'diff_title_2': 'Sem Stress.',
        'diff_subtitle': 'A',
        'diff_subtitle_2': 'não abandona o serviço. Nascemos da prática e do compromisso diário.',
        'diff_card_1_title': 'Multidisciplinar',
        'diff_card_1_desc': 'Resolvemos elétrica, pintura e alvenaria em uma só equipe.',
        'diff_card_2_title': 'Orçamento Justo',
        'diff_card_2_desc': 'Preço transparente, sem surpresas no final da obra.',
        'diff_card_3_title': 'Acabamento Fino',
        'diff_card_3_desc': 'Atenção aos detalhes que valorizam o seu patrimônio.',
        'diff_card_4_title': 'Pontualidade',
        'diff_card_4_desc': 'Cronograma levado a sério. Respeitamos seu tempo.',
        'diff_card_5_title': 'Organização',
        'diff_card_5_desc': 'Obra limpa e organizada, minimizando o impacto no dia a dia.',
        'diff_card_6_title': 'Compromisso',
        'diff_card_6_desc': 'Cumprimos o combinado. Sem desculpas.',
        'cases_pretitle': 'Execução Garantida',
        'cases_title_1': 'Resultados que',
        'cases_title_highlight': 'você pode confiar.',
        'cases_subtitle': 'Não entregamos apenas serviços. Entregamos tranquilidade e valorização para o seu imóvel.',
        'cases_item_1_title': 'Valorização do Imóvel',
        'cases_item_1_desc': 'Reformas bem feitas aumentam o valor de mercado.',
        'cases_item_2_title': 'Conforto Térmico',
        'cases_item_2_desc': 'Soluções ideais em gesso e climatização.',
        'cases_item_3_title': 'Atendimento Rápido',
        'cases_item_3_desc': 'Orçamentos ágeis via WhatsApp.',
        'cases_item_4_title': 'Segurança Técnica',
        'cases_item_4_desc': 'Instalações elétricas e hidráulicas dentro das normas.',
        'cases_trust_title': 'Quem contrata a RMS?',
        'cases_trust_subtitle': 'Expertise validada em diversos ambientes.',
        'cases_grid_1': 'Casas & Apartamentos',
        'cases_grid_2': 'Lojas & Comércios',
        'cases_grid_3': 'Escritórios & Corporativo',
        'cases_grid_4': 'Condomínios',
        'cases_grid_5_title': 'Obras Rápidas',
        'cases_grid_5_sub': 'Pequenos reparos e reformas',
        'contact_title_1': 'Chegou a hora de tirar sua reforma do',
        'contact_title_highlight': 'papel.',
        'contact_subtitle': 'Pare de adiar. Temos a equipe certa para executar seu projeto com qualidade e sem dores de cabeça.',
        'contact_status': 'Agenda Disponível',
        'footer_about': 'Especialistas em reformas, construção e manutenção. Qualidade do alicerce ao acabamento.',
        'footer_contact': 'Contato',
        'footer_rights': 'Todos os direitos reservados.'
    },
    'en': {
        'nav_about': 'About RMS',
        'nav_services': 'Services',
        'nav_diff': 'Why RMS?',
        'nav_btn': 'Get a Quote',
        'hero_title_1': 'Your renovation doesn\'t have to be',
        'hero_title_highlight': 'an endless headache.',
        'hero_title_2': '.',
        'hero_title_3': 'Quality, deadlines, and fine finishing.',
        'hero_subtitle_1': 'From foundation to finishing,',
        'hero_subtitle_2': 'delivers the complete solution your project demands.',
        'hero_cta_text': 'Need renovations, electrical or plumbing?',
        'hero_btn': 'Request Quote',
        'mq_traffic': 'Electrical',
        'mq_launch': 'Drywall & Plaster',
        'about_title_1': 'No more contractors who',
        'about_title_highlight': 'disappear mid-job.',
        'about_subtitle': 'RMS is here to professionalize the service.',
        'about_foundation': 'Proven Experience',
        'about_founders_title': 'Commitment & Technique',
        'about_founders_text_1': 'RMS Reforma & Construção was born from the market\'s need for versatile and reliable professionals.',
        'about_founders_text_2': 'We know renovating involves dreams and investment. That\'s why we fight the classic problem:',
        'about_founders_quote': '"Unskilled labor and delays."',
        'about_fight_title': 'We do not accept:',
        'about_fight_1': 'Unjustified delays',
        'about_fight_2': 'Material waste',
        'about_fight_3': 'Post-construction dirt',
        'about_dna_title': 'Complete Execution',
        'about_dna_desc': 'We centralize everything you need. From plaster to electrical, painting to sound systems. One contact, total responsibility.',
        'about_clients_title': 'We serve with excellence:',
        'client_type_1': 'Apartments',
        'client_type_2': 'Houses',
        'client_type_3': 'Retail Stores',
        'client_type_4': 'Offices',
        'client_type_5': 'Condos',
        'client_type_special': 'Quick Renovations',
        'client_badge': 'Focus',
        'purpose_title_1': 'Your environment deserves to be',
        'purpose_title_highlight_1': 'comfortable.',
        'purpose_title_2': 'And execution must be',
        'purpose_title_highlight_2': 'flawless.',
        'purpose_text': 'We take the project from paper to reality, with',
        'purpose_text_bold': 'technical safety and cleanliness.',
        'purpose_tag_1': 'Technique',
        'purpose_tag_2': 'Agility',
        'purpose_tag_3': 'Finishing',
        'services_title': 'Our Services',
        'services_subtitle': 'Complete solutions for your construction or repair.',
        'service_1_title': 'Masonry & Builders',
        'service_1_desc': 'Wall construction, subfloors, plastering, and structural renovations with perfect alignment.',
        'service_2_title': 'Professional Painting',
        'service_2_desc': 'Interior and exterior painting, textures, putty, and fine finishing to renew your space.',
        'service_3_title': 'Electrical & Plumbing',
        'service_3_desc': 'Complete installations, leak repairs, wiring replacement, and power panels.',
        'service_4_title': 'Drywall & Plaster',
        'service_4_desc': 'Ceilings, moldings, partitions, and planned niches to modernize interior design.',
        'service_5_title': 'Air Conditioning',
        'service_5_desc': 'Installation, infrastructure, and maintenance of Split units and climate systems.',
        'service_6_title': 'Ambient Sound',
        'service_6_desc': 'Sound projects embedded in plaster for living rooms, gourmet balconies, and shops.',
        'diff_title': 'Construction that',
        'diff_title_highlight': 'adds value.',
        'diff_title_2': 'Stress Free.',
        'diff_subtitle': '',
        'diff_subtitle_2': 'does not abandon the job. We were born from practice and daily commitment.',
        'diff_card_1_title': 'Multidisciplinary',
        'diff_card_1_desc': 'We solve electrical, painting, and masonry with one team.',
        'diff_card_2_title': 'Fair Pricing',
        'diff_card_2_desc': 'Transparent pricing, no surprises at the end of the job.',
        'diff_card_3_title': 'Fine Finishing',
        'diff_card_3_desc': 'Attention to details that add value to your property.',
        'diff_card_4_title': 'Punctuality',
        'diff_card_4_desc': 'Schedule taken seriously. We respect your time.',
        'diff_card_5_title': 'Organization',
        'diff_card_5_desc': 'Clean and organized work site, minimizing impact on daily life.',
        'diff_card_6_title': 'Commitment',
        'diff_card_6_desc': 'We deliver what we promise. No excuses.',
        'cases_pretitle': 'Guaranteed Execution',
        'cases_title_1': 'Results you',
        'cases_title_highlight': 'can trust.',
        'cases_subtitle': 'We don\'t just deliver services. We deliver peace of mind and value to your property.',
        'cases_item_1_title': 'Property Valuation',
        'cases_item_1_desc': 'Well-done renovations increase market value.',
        'cases_item_2_title': 'Thermal Comfort',
        'cases_item_2_desc': 'Ideal solutions in plaster and air conditioning.',
        'cases_item_3_title': 'Fast Service',
        'cases_item_3_desc': 'Agile quotes via WhatsApp.',
        'cases_item_4_title': 'Technical Safety',
        'cases_item_4_desc': 'Electrical and plumbing installations within standards.',
        'cases_trust_title': 'Who hires RMS?',
        'cases_trust_subtitle': 'Expertise validated in various environments.',
        'cases_grid_1': 'Houses & Apartments',
        'cases_grid_2': 'Shops & Commerce',
        'cases_grid_3': 'Offices & Corporate',
        'cases_grid_4': 'Condominiums',
        'cases_grid_5_title': 'Quick Works',
        'cases_grid_5_sub': 'Small repairs and renovations',
        'contact_title_1': 'It\'s time to take your renovation off',
        'contact_title_highlight': 'paper.',
        'contact_subtitle': 'Stop postponing. We have the right team to execute your project with quality and no headaches.',
        'contact_status': 'Schedule Available',
        'footer_about': 'Specialists in renovations, construction, and maintenance. Quality from foundation to finishing.',
        'footer_contact': 'Contact',
        'footer_rights': 'All rights reserved.'
    }
};

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    const langIndicator = document.getElementById('lang-indicator');
    if (langIndicator) {
        langIndicator.innerHTML = lang === 'pt' ? '🇧🇷' : '🇺🇸';
    }

    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// 2. INICIALIZAÇÃO
(function() {
    try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    } catch (e) {}
})();

// Carregar logos, esconder loader e iniciar carrosséis APÓS o carregamento completo
window.addEventListener('load', () => {
    updateLogos();
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            loader.addEventListener('transitionend', () => {
                loader.style.display = 'none';
            });
        }, 1500); 
    }

    // Inicializar carrosséis com segurança de largura
    // O ID abaixo 'infinite-drag-wrapper' deve ser o da seção Diferenciais
    setupInfiniteScroll('infinite-drag-wrapper', 'infinite-track', 1);
    
    // O ID abaixo 'gallery-drag-wrapper' é o da NOVA seção Obras (Loop infinito)
    setupInfiniteScroll('gallery-drag-wrapper', 'gallery-track', -1);
});

document.addEventListener('DOMContentLoaded', () => {
    
    updateLogos();

    // 3. MENU MOBILE
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu-overlay');
    
    if (hamburgerBtn && closeMenuBtn && mobileMenu) {
        const toggleMenu = (show) => {
            if (show) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        };
        hamburgerBtn.addEventListener('click', () => toggleMenu(true));
        closeMenuBtn.addEventListener('click', () => toggleMenu(false));
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
    }

    // 4. FADE IN
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // 5. DARK MODE
    const themeBtn = document.getElementById('theme-toggle-btn');
    const sunIcon = document.getElementById('theme-toggle-sun');
    const moonIcon = document.getElementById('theme-toggle-moon');

    const updateIcon = () => {
        if (document.documentElement.classList.contains('dark')) {
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        } else {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
        updateLogos();
    };

    if (themeBtn) {
        updateIcon();
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            updateIcon();
        });
    }

    // 6. LANGUAGE TOGGLE
    const langBtn = document.getElementById('lang-toggle-btn');
    let currentLang = localStorage.getItem('language') || 'pt';

    if (currentLang !== 'pt') {
        updateLanguage(currentLang);
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage(currentLang);
        });
    }
});

// 7. CARROSSEL INFINITO (FUNÇÃO REUTILIZÁVEL)
function setupInfiniteScroll(wrapperId, trackId, speedDirection) {
    const sliderWrapper = document.getElementById(wrapperId);
    const track = document.getElementById(trackId);

    if (sliderWrapper && track) {
        let isDown = false;
        let startX;
        let scrollLeft;
        let animationId;
        
        // Velocidade Base
        const baseSpeed = 0.8; 
        const speed = baseSpeed * speedDirection;

        // Se for reverso, inicializa no meio
        if (speedDirection === -1) {
                sliderWrapper.scrollLeft = track.scrollWidth / 2;
        }

        const autoScroll = () => {
            if (!isDown) { 
                sliderWrapper.scrollLeft += speed;
                
                // Lógica de Loop Infinito
                if (speedDirection === 1) {
                    // Normal: Chegou no fim, volta pro começo
                    if (sliderWrapper.scrollLeft >= (track.scrollWidth / 2)) {
                        sliderWrapper.scrollLeft = 0;
                    }
                } else {
                    // Reverso: Chegou no começo (0), vai pro "fim" (meio do track)
                    if (sliderWrapper.scrollLeft <= 0) {
                        sliderWrapper.scrollLeft = track.scrollWidth / 2;
                    }
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        // Inicia o movimento
        animationId = requestAnimationFrame(autoScroll);

        // MOUSE EVENTS (Desktop)
        sliderWrapper.addEventListener('mousedown', (e) => {
            isDown = true;
            sliderWrapper.classList.add('active');
            startX = e.pageX - sliderWrapper.offsetLeft;
            scrollLeft = sliderWrapper.scrollLeft;
        });

        sliderWrapper.addEventListener('mouseleave', () => {
            isDown = false;
            sliderWrapper.classList.remove('active');
        });

        sliderWrapper.addEventListener('mouseup', () => {
            isDown = false;
            sliderWrapper.classList.remove('active');
        });

        sliderWrapper.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderWrapper.offsetLeft;
            const walk = (x - startX) * 2; 
            sliderWrapper.scrollLeft = scrollLeft - walk;
            
            // Loop Infinito Manual
            if (speedDirection === 1) {
                if (sliderWrapper.scrollLeft >= (track.scrollWidth / 2)) {
                    sliderWrapper.scrollLeft = 0;
                    startX = x + sliderWrapper.offsetLeft; 
                    scrollLeft = 0;
                } else if (sliderWrapper.scrollLeft <= 0) {
                        sliderWrapper.scrollLeft = (track.scrollWidth / 2);
                        startX = x + sliderWrapper.offsetLeft; 
                        scrollLeft = (track.scrollWidth / 2);
                }
            } else {
                // Reverso Manual
                if (sliderWrapper.scrollLeft <= 0) {
                    sliderWrapper.scrollLeft = (track.scrollWidth / 2);
                    startX = x + sliderWrapper.offsetLeft;
                    scrollLeft = (track.scrollWidth / 2);
                } else if (sliderWrapper.scrollLeft >= (track.scrollWidth / 2)) {
                    sliderWrapper.scrollLeft = 0;
                    startX = x + sliderWrapper.offsetLeft;
                    scrollLeft = 0;
                }
            }
        });

        // TOUCH EVENTS (Mobile)
        sliderWrapper.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - sliderWrapper.offsetLeft;
            scrollLeft = sliderWrapper.scrollLeft;
        });

        sliderWrapper.addEventListener('touchend', () => {
            isDown = false;
        });

        sliderWrapper.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - sliderWrapper.offsetLeft;
            const walk = (x - startX) * 2;
            sliderWrapper.scrollLeft = scrollLeft - walk;
            
            // Ajuste simples para mobile para não travar
            if (sliderWrapper.scrollLeft >= (track.scrollWidth / 2)) {
                    if (speedDirection === 1) sliderWrapper.scrollLeft = 0;
                    else sliderWrapper.scrollLeft = 0; 
            } else if (sliderWrapper.scrollLeft <= 0) {
                    sliderWrapper.scrollLeft = (track.scrollWidth / 2);
            }
        });
    }
}