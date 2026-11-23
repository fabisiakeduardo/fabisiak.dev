export const content = {
  pt: {
    nav: {
      projects: "Projetos",
      experience: "Experiência",
      stack: "Stack",
      about: "Sobre",
      blog: "Blog",
      contact: "Contato",
      skip: "pular para o conteúdo",
    },
    hero: {
      command: "$ whoami",
      name: "Eduardo Fabisiak",
      role: "engenheiro de software backend e full-stack, do Rio Grande do Sul, Brasil.",
      facts: [
        { label: "cargo", value: "Engenheiro de Software Backend" },
        { label: "local", value: "Rio Grande do Sul, Brasil" },
        { label: "fuso", value: "America/Sao_Paulo" },
        { label: "experiência", value: "4+ anos" },
        { label: "idiomas", value: "Português (nativo), Inglês (profissional)" },
      ],
      links: [
        { label: "github", value: "github.com/fabisiakeduardo", url: "https://github.com/fabisiakeduardo" },
        { label: "linkedin", value: "/in/eduardofabisiak", url: "https://www.linkedin.com/in/eduardofabisiak" },
        { label: "email", value: "eduardofabisiak@proton.me", url: "mailto:eduardofabisiak@proton.me" },
      ],
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Falar comigo",
    },
    projects: {
      heading: "Projetos",
      intro:
        "Produtos próprios construídos de ponta a ponta, do modelo de dados ao deploy.",
      caseStudyCta: "Ler estudo de caso",
      caseStudyLabels: {
        problem: "Problema",
        approach: "Abordagem",
        decisions: "Decisões",
        outcome: "Resultado",
      },
      items: [
        {
          name: "Pendência",
          slug: "pendencia",
          category: "SaaS · CONTABILIDADE",
          description:
            "SaaS para escritórios contábeis controlarem o que falta no mês: pedidos de documentos por cliente e competência, envio pelo link sem conta, aprovação ou devolução item a item, lembretes automáticos e exportação ZIP/CSV. No ar em produção pela Nolvaq.",
          caseStudy: {
            problem:
              "Escritórios contábeis precisam acompanhar quais documentos ainda faltam de cada cliente em cada competência mensal.",
            approach:
              "O Pendência organiza pedidos mensais por cliente e competência, permite o envio por link sem exigir uma conta e reúne a revisão dos itens, os lembretes e a exportação.",
            decisions: [
              {
                title: "Organizar por cliente e competência",
                description:
                  "Cada pedido representa os documentos esperados de um cliente em um período mensal.",
              },
              {
                title: "Permitir envio sem conta",
                description:
                  "O cliente envia documentos pelo link do pedido sem precisar criar uma conta.",
              },
              {
                title: "Revisar e exportar por pedido",
                description:
                  "Cada item pode ser aprovado ou devolvido, com lembretes automáticos e exportação ZIP ou CSV.",
              },
            ],
            outcome:
              "O produto reúne pedidos mensais, envio, revisão item a item, lembretes e exportação em um fluxo que está no ar em produção pela Nolvaq.",
          },
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Railway"],
          link: "https://pendencia.site",
          linkLabel: "pendencia.site",
          motif: "ledger",
        },
        {
          name: "Naia",
          slug: "naia",
          category: "SaaS · MENSAGERIA",
          description:
            "Plataforma multitenant de campanhas em massa no WhatsApp e Telegram, com 98%+ de entregabilidade, ritmo de envio, webhooks, retry e acompanhamento em tempo real. Rodou em produção atendendo clientes reais e hoje é open source.",
          caseStudy: {
            problem:
              "Campanhas em massa no WhatsApp e Telegram precisam de acompanhamento de envio, sem perder o controle sobre o ritmo das mensagens e as tentativas.",
            approach:
              "A Naia oferece uma plataforma multitenant de campanhas com ritmo de envio, webhooks, novas tentativas e acompanhamento em tempo real.",
            decisions: [
              {
                title: "Atender dois canais de mensagem",
                description:
                  "As campanhas podem ser feitas pelo WhatsApp e pelo Telegram na mesma plataforma.",
              },
              {
                title: "Controlar o envio",
                description:
                  "O ritmo de envio, os webhooks e as novas tentativas fazem parte do fluxo de campanha.",
              },
              {
                title: "Acompanhar as campanhas em tempo real",
                description:
                  "A plataforma mostra o andamento dos envios e registra entregabilidade de 98%+.",
              },
            ],
            outcome:
              "A plataforma rodou em produção atendendo clientes reais e hoje é open source.",
          },
          stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
          link: "https://github.com/fabisiakeduardo/Naia",
          linkLabel: "github.com/fabisiakeduardo/Naia",
          motif: "broadcast",
        },
        {
          name: "Vianova",
          slug: "vianova",
          category: "IDENTIDADE · BILLING",
          description:
            "Hub de conta, identidade e cobrança da Nolvaq, a empresa que estou fundando: provedor OIDC próprio com OAuth2 e 2FA, RBAC multi-workspace e assinaturas Stripe. Todo produto novo já nasce sobre essa base. Rodou em produção e hoje é open source.",
          caseStudy: {
            problem:
              "Os produtos da Nolvaq precisam de uma base comum para conta, identidade e cobrança.",
            approach:
              "A Vianova centraliza essas funções em um hub com provedor OIDC próprio, OAuth2, 2FA, RBAC multi-workspace e assinaturas Stripe.",
            decisions: [
              {
                title: "Centralizar identidade e conta",
                description:
                  "A base usa um provedor OIDC próprio com OAuth2 e autenticação de dois fatores.",
              },
              {
                title: "Separar acesso por workspace",
                description:
                  "O RBAC multi-workspace organiza as permissões entre os espaços de trabalho.",
              },
              {
                title: "Incluir assinaturas na mesma base",
                description:
                  "As assinaturas Stripe fazem parte do hub de conta, identidade e cobrança.",
              },
            ],
            outcome:
              "Todo produto novo da Nolvaq já nasce sobre essa base. A Vianova rodou em produção e hoje é open source.",
          },
          stack: ["Bun", "TypeScript", "Elysia", "Stripe", "PostgreSQL", "OIDC"],
          link: "https://github.com/fabisiakeduardo/Vianova",
          linkLabel: "github.com/fabisiakeduardo/Vianova",
          motif: "orbit",
        },
        {
          name: "Onda",
          slug: "onda",
          category: "SELF-HOSTED · VOZ & CHAT",
          description:
            "Alternativa ao Discord em que a comunidade roda no servidor da própria pessoa: voz, vídeo, texto, histórico e moderação ficam 100% com quem hospeda, mesmo atrás de CGNAT. A Onda só guarda a identidade, que viaja entre servidores.",
          caseStudy: {
            problem:
              "Uma comunidade precisa reunir voz, vídeo, texto, histórico e moderação em seu próprio servidor sem perder a identidade entre servidores.",
            approach:
              "A Onda propõe uma alternativa ao Discord em que a comunidade roda no servidor de quem hospeda, enquanto a identidade pode viajar entre servidores.",
            decisions: [
              {
                title: "Manter a comunidade no servidor de quem hospeda",
                description:
                  "Voz, vídeo, texto, histórico e moderação ficam com a pessoa que hospeda a comunidade.",
              },
              {
                title: "Separar identidade do servidor",
                description:
                  "A proposta mantém a identidade na Onda para que ela viaje entre servidores.",
              },
              {
                title: "Considerar conexões atrás de CGNAT",
                description:
                  "A descrição atual apresenta a proposta como utilizável mesmo atrás de CGNAT.",
              },
            ],
            outcome:
              "A proposta descrita mantém a comunidade e seu conteúdo no servidor de quem hospeda, com identidade que viaja entre servidores.",
          },
          stack: [],
          link: "https://ondachat.app",
          linkLabel: "ondachat.app",
          motif: "field",
        },
        {
          name: "Currículos",
          slug: "curriculos",
          category: "IA · PRODUTIVIDADE",
          description:
            "App Rails que gera currículos sob medida para cada vaga: extrai keywords da descrição, pontua o match e reescreve resumo e bullets. Assistente de chat, importação de PDF do LinkedIn e IA multi-provider (Ollama, OpenAI, Anthropic, Gemini).",
          caseStudy: {
            problem:
              "Um currículo precisa destacar a correspondência entre a experiência apresentada e os requisitos de cada vaga.",
            approach:
              "O app extrai palavras-chave da descrição da vaga, pontua a correspondência e reescreve o resumo e os bullets do currículo.",
            decisions: [
              {
                title: "Usar a descrição da vaga como referência",
                description:
                  "A extração de palavras-chave e a pontuação do match partem do texto da oportunidade.",
              },
              {
                title: "Adaptar o conteúdo do currículo",
                description:
                  "O resumo e os bullets são reescritos para cada vaga, com apoio de um assistente de chat.",
              },
              {
                title: "Oferecer importação e provedores de IA",
                description:
                  "O app importa PDF do LinkedIn e oferece Ollama, OpenAI, Anthropic e Gemini.",
              },
            ],
            outcome:
              "O app gera currículos ajustados a cada vaga e reúne análise de correspondência, reescrita, chat e importação de PDF do LinkedIn.",
          },
          stack: ["Rails 8", "SQLite", "Hotwire", "Stimulus", "LLM"],
          link: "https://github.com/fabisiakeduardo/curriculos",
          linkLabel: "github.com/fabisiakeduardo/curriculos",
          motif: "flux",
        },
        {
          name: "rust-pathtracer",
          slug: "rust-pathtracer",
          category: "RUST · GRÁFICOS",
          description:
            "Path tracer Monte Carlo em Rust com dois backends: CPU paralela com rayon e BVH, e GPU em tempo real sobre compute shaders OpenGL 4.3 com acumulação progressiva. Materiais lambertianos, metálicos e dielétricos, profundidade de campo e câmera livre interativa.",
          caseStudy: {
            problem:
              "Explorar path tracing Monte Carlo em Rust tanto para renderização paralela em CPU quanto para visualização interativa em GPU.",
            approach:
              "O projeto oferece um backend de CPU com rayon e BVH e um backend de GPU em compute shaders OpenGL 4.3 com acumulação progressiva.",
            decisions: [
              {
                title: "Manter dois backends de renderização",
                description:
                  "A CPU produz renderizações paralelas, enquanto a GPU oferece um path tracer interativo.",
              },
              {
                title: "Acelerar a renderização em CPU",
                description:
                  "O backend de CPU combina paralelismo com rayon e uma BVH.",
              },
              {
                title: "Acumular amostras progressivamente na GPU",
                description:
                  "O backend OpenGL 4.3 usa compute shaders e acumulação progressiva, com câmera livre interativa.",
              },
            ],
            outcome:
              "O projeto reúne renderização por CPU e GPU, materiais lambertianos, metálicos e dielétricos e profundidade de campo.",
          },
          stack: ["Rust", "OpenGL", "GLSL", "Rayon", "BVH"],
          link: "https://github.com/fabisiakeduardo/rust-pathtracer",
          linkLabel: "github.com/fabisiakeduardo/rust-pathtracer",
          motif: "trace",
        },
        {
          name: "fio",
          slug: "fio",
          category: "LINUX · ÁUDIO",
          description:
            "Patchbay virtual de áudio para Linux com PipeWire e PulseAudio. Cria dispositivos virtuais, conecta aplicativos e microfones por regras salvas e restaura configurações quando o estado do servidor diverge.",
          caseStudy: {
            problem:
              "Configurar manualmente dispositivos e rotas de áudio com pactl exige repetir comandos para montar uma configuração que deveria continuar disponível.",
            approach:
              "fio cria dispositivos virtuais e salva rotas entre aplicativos, microfones e dispositivos por regras, reconciliando a configuração desejada com o servidor de áudio.",
            decisions: [
              {
                title: "Usar a API de compatibilidade PulseAudio",
                description:
                  "O backend usa libpulse-binding, funcionando com PipeWire por meio de pipewire-pulse sem código específico de PipeWire.",
              },
              {
                title: "Separar estado desejado e execução",
                description:
                  "A configuração persistida e o planejamento puro de ações ficam separados da camada que executa operações no servidor.",
              },
              {
                title: "Detectar e corrigir divergências",
                description:
                  "fio identifica dispositivos, rotas ou links que deixaram de corresponder à configuração salva e oferece restauração.",
              },
            ],
            outcome:
              "Rotas salvas podem ser reaplicadas e regras para aplicativos também valem para streams que aparecem depois, sem repetir os comandos pactl manualmente.",
          },
          stack: ["Rust", "SvelteKit", "TypeScript", "Tauri", "PipeWire"],
          link: "https://github.com/fabisiakeduardo/fio",
          linkLabel: "github.com/fabisiakeduardo/fio",
          motif: "broadcast",
        },
        {
          name: "AImongUS",
          slug: "aimongus",
          category: "ELIXIR · AGENTES",
          description:
            "Partidas de dedução social entre agentes LLM, acompanhadas ao vivo no navegador. Cada peão tem seu próprio GenServer, consulta uma visão limitada do jogo e age sobre um motor autoritativo; partidas podem ser gravadas e reproduzidas.",
          caseStudy: {
            problem:
              "Agentes de IA precisam jogar uma partida de dedução social com visões individuais, regras consistentes e uma experiência que permita acompanhar a partida.",
            approach:
              "Cada agente roda em seu próprio GenServer, consulta uma visão filtrada do motor de jogo autoritativo e envia intenções validadas pelas regras. A partida é acompanhada em uma interface Phoenix LiveView com Three.js.",
            decisions: [
              {
                title: "Executar um processo por agente",
                description:
                  "Cada peão é um GenServer supervisionado pelo OTP e consulta o estado do jogo.",
              },
              {
                title: "Limitar o que cada agente pode observar",
                description:
                  "A visão enviada ao prompt contém apenas o que aquele agente poderia observar na partida.",
              },
              {
                title: "Validar intenções no motor de jogo",
                description:
                  "Movimentos, tarefas, eliminações, falas e votos passam por validação de regras no servidor.",
              },
              {
                title: "Gravar partidas e oferecer um adaptador local",
                description:
                  "Partidas são gravadas como JSONL e o adaptador stub permite jogar localmente sem chaves de API.",
              },
            ],
            outcome:
              "As partidas podem ser assistidas ao vivo no navegador e reproduzidas depois; o adaptador stub executa agentes roteirizados localmente sem custo de API.",
          },
          stack: ["Elixir", "Phoenix LiveView", "OTP", "Three.js"],
          link: "https://github.com/fabisiakeduardo/aimongus",
          linkLabel: "github.com/fabisiakeduardo/aimongus",
          motif: "orbit",
        },
      ],
      oss: {
        heading: "Open source",
        intro: "Ferramentas que construí pra mim e publiquei pra qualquer um usar.",
        items: [
          {
            name: "AnonDrop",
            slug: "anondrop",
            category: "COMPARTILHAMENTO · COLABORAÇÃO",
            description:
              "Compartilhamento anônimo de arquivos, sem conta, com edição colaborativa de texto e código no navegador, histórico de versões e diff.",
            caseStudy: {
              problem:
                "Compartilhar arquivos sem criar uma conta e colaborar em texto ou código no navegador são necessidades que pedem um fluxo simples de acesso.",
              approach:
                "O AnonDrop usa tokens para compartilhar arquivos anonimamente e combina edição colaborativa no navegador com Reverb e Monaco e histórico de versões.",
              decisions: [
                {
                  title: "Compartilhar por token",
                  description:
                    "O acesso anônimo é baseado em tokens, sem exigir uma conta para compartilhar arquivos.",
                },
                {
                  title: "Editar texto e código no navegador",
                  description:
                    "Reverb e Monaco dão suporte à edição colaborativa diretamente no navegador.",
                },
                {
                  title: "Manter histórico de versões",
                  description:
                    "O histórico permite consultar versões anteriores do conteúdo compartilhado.",
                },
              ],
              outcome:
                "O projeto reúne compartilhamento anônimo, edição colaborativa no navegador e histórico de versões em uma ferramenta.",
            },
            stack: ["Laravel", "Reverb", "Monaco", "SQLite"],
            link: "https://github.com/fabisiakeduardo/anondrop",
          },
          {
            name: "BananaGit",
            slug: "bananagit",
            category: "DESKTOP · GIT",
            description:
              "GUI de Git pra desktop que troca os comandos por ações em português claro: status, branches, stash e diff colorido, sem abrir terminal.",
            caseStudy: {
              problem:
                "Operações comuns de Git pela linha de comando podem ser pouco acessíveis para quem prefere uma interface gráfica.",
              approach:
                "O BananaGit é uma aplicação desktop em Kotlin e Compose Desktop que usa JGit e apresenta ações de Git em linguagem simples.",
              decisions: [
                {
                  title: "Construir uma interface desktop",
                  description:
                    "Kotlin e Compose Desktop formam a interface gráfica do aplicativo.",
                },
                {
                  title: "Usar JGit para operações de Git",
                  description:
                    "JGit fornece a integração com repositórios Git dentro da aplicação.",
                },
                {
                  title: "Apresentar ações em linguagem simples",
                  description:
                    "A interface organiza operações como status, branches, stash e diff sem depender de comandos digitados no terminal.",
                },
              ],
              outcome:
                "O projeto oferece uma interface desktop para operações de Git com ações em linguagem simples.",
            },
            stack: ["Kotlin", "Compose Desktop", "JGit"],
            link: "https://github.com/fabisiakeduardo/bananagit",
          },
          {
            name: "Singr",
            slug: "singr",
            category: "DISCORD · MÚSICA",
            description:
              "Bot de música self-hosted pro Discord, tocando áudio do YouTube e outras fontes nos canais de voz por slash commands.",
            caseStudy: {
              problem:
                "Um servidor Discord pode precisar de reprodução de música nos canais de voz com controle integrado à própria plataforma.",
              approach:
                "O Singr é um bot Java auto-hospedado que usa JDA para interagir com o Discord e LavaPlayer para reproduzir áudio.",
              decisions: [
                {
                  title: "Permitir hospedagem própria",
                  description:
                    "O bot pode ser executado pelo responsável pelo servidor Discord.",
                },
                {
                  title: "Usar comandos de barra",
                  description:
                    "Comandos de barra oferecem a interface de controle dentro do Discord.",
                },
                {
                  title: "Separar integração e reprodução",
                  description:
                    "JDA integra o bot ao Discord, enquanto LavaPlayer cuida da reprodução de áudio.",
                },
              ],
              outcome:
                "O Singr oferece reprodução de música nos canais de voz do Discord controlada por comandos de barra.",
            },
            stack: ["Java", "JDA", "LavaPlayer"],
            link: "https://github.com/fabisiakeduardo/Singr",
          },
          {
            name: "CDN",
            slug: "cdn",
            category: "API · MÍDIA",
            description:
              "Backend de CDN mínimo: recebe, armazena e serve imagens e vídeos por API JSON, com chave de API e limites configuráveis.",
            caseStudy: {
              problem:
                "Aplicações que trabalham com imagens e vídeos precisam de uma interface para enviar e servir esses arquivos com limites definidos.",
              approach:
                "O CDN é uma API JSON em Laravel para upload e disponibilização de imagens e vídeos, protegida por chave de API e com limites de arquivo configuráveis.",
              decisions: [
                {
                  title: "Oferecer uma API JSON",
                  description:
                    "A API concentra as operações de envio e disponibilização de arquivos de mídia.",
                },
                {
                  title: "Exigir chave de API",
                  description:
                    "A autenticação por chave protege o acesso às operações da API.",
                },
                {
                  title: "Configurar limites de arquivo",
                  description:
                    "Os limites de arquivo podem ser ajustados para a instalação.",
                },
              ],
              outcome:
                "O projeto fornece uma API Laravel para receber e servir imagens e vídeos com autenticação por chave e limites configuráveis.",
            },
            stack: ["Laravel", "PHP"],
            link: "https://github.com/fabisiakeduardo/CDN",
          },
          {
            name: "url-shortener",
            slug: "url-shortener",
            category: "UTILITÁRIO · LINKS",
            description:
              "Encurtador de URL direto ao ponto: cola uma URL, gera um link curto.",
            caseStudy: {
              problem:
                "Compartilhar endereços longos pode ser inconveniente quando um link curto é suficiente.",
              approach:
                "O url-shortener é uma pequena aplicação Laravel com SQLite que transforma uma URL em um link curto.",
              decisions: [
                {
                  title: "Manter o escopo enxuto",
                  description:
                    "A aplicação se concentra no fluxo de encurtar uma URL, sem apresentar recursos além desse objetivo.",
                },
                {
                  title: "Usar Laravel para a aplicação",
                  description:
                    "Laravel fornece a estrutura da aplicação web.",
                },
                {
                  title: "Persistir dados em SQLite",
                  description:
                    "SQLite é usado como banco de dados da aplicação.",
                },
              ],
              outcome:
                "O resultado é uma aplicação pequena para gerar links curtos a partir de URLs.",
            },
            stack: ["Laravel", "SQLite", "Tailwind CSS"],
            link: "https://github.com/fabisiakeduardo/url-shortener",
          },
        ],
      },
    },
    experience: {
      heading: "Experiência",
      items: [
        {
          company: "Nolvaq",
          role: "Fundador",
          period: "2026 → presente",
          bullets: [
            "Sistemas, automações e integrações sob medida para empresas, do diagnóstico à operação monitorada",
            "Hub próprio de conta, identidade e billing (Vianova) como base de todos os produtos",
            "Produtos SaaS em produção sob a marca, como o Pendência para escritórios contábeis",
          ],
          tags: ["TypeScript", "Next.js", "Bun", "PostgreSQL", "Stripe", "OIDC"],
          links: [{ label: "nolvaq.software", url: "https://nolvaq.software" }],
        },
        {
          company: "Preço Local",
          role: "Software Engineer",
          period: "NOV 2025 → MAI 2026",
          bullets: [
            "API REST do zero em Node.js/TypeScript para catálogos, preços e motores de busca",
            "Cache distribuído em Redis reduzindo a latência de buscas recorrentes",
            "Busca por geolocalização e cidade, com resultados ordenados por proximidade",
            "App mobile cross-platform em React Native com UI responsiva",
            "Serviços em Docker com CI/CD; publicado na Google Play e na App Store",
          ],
          tags: ["Node.js", "TypeScript", "React Native", "Redis", "PostgreSQL", "Docker", "Geolocation", "CI/CD"],
          links: [
            {
              label: "Google Play",
              url: "https://play.google.com/store/apps/details?id=com.anonymous.consultapreco",
            },
            {
              label: "App Store",
              url: "https://apps.apple.com/br/app/pre%C3%A7o-local/id6757374197",
            },
          ],
        },
        {
          company: "Sky Store",
          role: "Software Engineer",
          period: "JUN 2025 → NOV 2025",
          bullets: [
            "Serviços backend em Node.js e PostgreSQL para o e-commerce de produtos digitais",
            "Filas RabbitMQ e cache Redis para processamento assíncrono de alto volume",
            "Frontend da loja em React e armazenamento de arquivos em Amazon S3",
            "Scripts Lua e mecânicas de servidor FiveM conectados a APIs e serviços backend",
            "Painéis administrativos e ferramentas internas de gestão e operação",
          ],
          tags: ["Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS S3", "Lua", "FiveM", "Linux"],
          links: [
            { label: "SkyStore", url: "https://skystore.com.br" },
            { label: "Americanópolis", url: "https://americanopolisroleplay.com" },
          ],
        },
        {
          company: "Rituais de Axé",
          role: "Software Engineer",
          period: "SET 2024 → JUN 2025",
          bullets: [
            "Arquitetura de pagamentos com Pix instantâneo e matrícula automática na confirmação",
            "APIs REST em Node.js para fluxos de alunos e endpoints administrativos",
            "Jobs em background para status de pagamento e gatilhos de matrícula",
            "Autenticação JWT com RBAC protegendo conteúdo e dados de usuários",
            "Mídia em Amazon S3; ferramentas internas de gestão (ponto por foto, férias, automações)",
          ],
          tags: ["Node.js", "React", "Redis", "AWS S3", "JWT", "RBAC", "Pix", "PostgreSQL"],
          links: [
            { label: "Rituais de Axé", url: "https://rituaisdeaxes.com" },
          ],
        },
        {
          company: "Plataforma de Consultas e Buscas Documentais",
          role: "Full-Stack Developer",
          period: "DEZ 2022 → SET 2024",
          bullets: [
            "Serviços de busca em Java com APIs de baixa latência para consultas complexas",
            "Decomposição do monólito legado em microservices independentes",
            "Pipelines de indexação de alto volume e mensageria assíncrona com RabbitMQ",
            "Cache Redis distribuído e otimização de queries PostgreSQL sob carga",
            "Modernização Java/PHP → Laravel, testes automatizados e pipelines CI/CD",
          ],
          tags: ["Java", "PostgreSQL", "Redis", "RabbitMQ", "Microservices", "PHP", "Laravel", "CI/CD"],
          links: [],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          name: "Linguagens",
          items: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "Ruby", "Kotlin", "Lua"],
        },
        {
          name: "Frameworks & libs",
          items: ["Node.js", "Express.js", "Spring Boot", "Laravel", "Rails", "React", "Next.js", "React Native", "Bun", "Elysia", "Tailwind CSS"],
        },
        {
          name: "Dados & mensageria",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Firestore", "RabbitMQ", "Kafka", "BullMQ"],
        },
        {
          name: "IA",
          items: ["Claude Code", "Devin IDE", "Prompt Engineering", "OpenDesign"],
        },
        {
          name: "Infra & DevOps",
          items: ["AWS", "Docker", "Linux (Arch)", "GitHub Actions", "Proxmox", "Nginx", "Apache", "Git", "CI/CD"],
        },
        {
          name: "Práticas & protocolos",
          items: ["REST APIs", "GraphQL", "gRPC", "WebSocket", "JWT", "OIDC", "Microservices", "Metodologias ágeis"],
        },
      ],
    },
    about: {
      heading: "Sobre",
      body: "Engenheiro de software do Rio Grande do Sul, focado em backend e sistemas distribuídos, com range full-stack. Trabalho em todo o ciclo do produto: arquitetura, APIs, dados, infraestrutura em nuvem e deploy. Gosto da fronteira entre engenharia, produto e negócio: entender o problema por trás da feature e construir o que faz sentido tecnicamente e como produto.",
      facts: [
        { label: "Base", value: "Rio Grande do Sul, Brasil" },
        { label: "Formação", value: "Ciência da Computação, Universidade Regional Integrada (2024 - 2027)" },
        { label: "Idiomas", value: "Português nativo, inglês profissional" },
        { label: "Foco", value: "APIs, sistemas distribuídos, mensageria, pagamentos" },
      ],
    },
    blog: {
      heading: "Blog",
      intro: "O que eu construo, aprendo e quebro no caminho.",
      readMore: "Ler post",
      ptOnly: "post em pt-BR",
      backToBlog: "Voltar pro blog",
    },
    footer: {
      heading: "Vamos construir algo?",
      note: "Aberto a oportunidades remotas ou com relocation como backend ou full-stack engineer.",
      email: "eduardofabisiak@proton.me",
      socials: [
        { label: "GitHub", url: "https://github.com/fabisiakeduardo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/eduardofabisiak" },
      ],
      location: "Rio Grande do Sul · Brasil",
      copyright: '$ echo "© 2026 Eduardo Fabisiak"',
    },
    notFound: {
      error: "arquivo ou diretório inexistente",
      hint: "Essa página não existe, ou ainda não foi escrita.",
      back: "$ cd ~",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      stack: "Stack",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      skip: "skip to content",
    },
    hero: {
      command: "$ whoami",
      name: "Eduardo Fabisiak",
      role: "backend and full-stack software engineer, from Rio Grande do Sul, Brazil.",
      facts: [
        { label: "role", value: "Backend Software Engineer" },
        { label: "location", value: "Rio Grande do Sul, Brazil" },
        { label: "timezone", value: "America/Sao_Paulo" },
        { label: "experience", value: "4+ years" },
        { label: "languages", value: "Portuguese (native), English (professional)" },
      ],
      links: [
        { label: "github", value: "github.com/fabisiakeduardo", url: "https://github.com/fabisiakeduardo" },
        { label: "linkedin", value: "/in/eduardofabisiak", url: "https://www.linkedin.com/in/eduardofabisiak" },
        { label: "email", value: "eduardofabisiak@proton.me", url: "mailto:eduardofabisiak@proton.me" },
      ],
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
    },
    projects: {
      heading: "Projects",
      intro: "Own products built end to end, from data modeling to deploy.",
      caseStudyCta: "Read case study",
      caseStudyLabels: {
        problem: "Problem",
        approach: "Approach",
        decisions: "Decisions",
        outcome: "Outcome",
      },
      items: [
        {
          name: "Pendência",
          slug: "pendencia",
          category: "SaaS · ACCOUNTING",
          description:
            "SaaS for accounting firms to control what's still missing each month: document requests per client and period, submissions through a link with no account, per-item approval or rejection, automatic reminders and ZIP/CSV export. Live in production under Nolvaq.",
          caseStudy: {
            problem:
              "Accounting firms need to track which documents are still missing from each client for each monthly period.",
            approach:
              "Pendência organizes monthly requests by client and period, accepts submissions through a link without requiring an account, and brings together item review, reminders and export.",
            decisions: [
              {
                title: "Organize by client and period",
                description:
                  "Each request represents the documents expected from a client for a monthly period.",
              },
              {
                title: "Accept submissions without an account",
                description:
                  "Clients submit documents through the request link without creating an account.",
              },
              {
                title: "Review and export each request",
                description:
                  "Each item can be approved or returned, with automatic reminders and ZIP or CSV export.",
              },
            ],
            outcome:
              "The product brings monthly requests, submissions, item-by-item review, reminders and export into one workflow that is live in production under Nolvaq.",
          },
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Railway"],
          link: "https://pendencia.site",
          linkLabel: "pendencia.site",
          motif: "ledger",
        },
        {
          name: "Naia",
          slug: "naia",
          category: "SaaS · MESSAGING",
          description:
            "Multitenant bulk campaign platform for WhatsApp and Telegram, with 98%+ delivery rate, send pacing, webhooks, retries and real-time tracking. Ran in production serving real customers and is now open source.",
          caseStudy: {
            problem:
              "Bulk campaigns on WhatsApp and Telegram need delivery tracking without losing control over message pacing and retries.",
            approach:
              "Naia provides a multitenant campaign platform with send pacing, webhooks, retries and real-time tracking.",
            decisions: [
              {
                title: "Support two messaging channels",
                description:
                  "Campaigns can run through WhatsApp and Telegram on the same platform.",
              },
              {
                title: "Control message delivery",
                description:
                  "Send pacing, webhooks and retries are part of the campaign flow.",
              },
              {
                title: "Track campaigns in real time",
                description:
                  "The platform shows delivery progress and reports a 98%+ delivery rate.",
              },
            ],
            outcome:
              "The platform ran in production serving real customers and is now open source.",
          },
          stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
          link: "https://github.com/fabisiakeduardo/Naia",
          linkLabel: "github.com/fabisiakeduardo/Naia",
          motif: "broadcast",
        },
        {
          name: "Vianova",
          slug: "vianova",
          category: "IDENTITY · BILLING",
          description:
            "Account, identity and billing hub for Nolvaq, the company I'm founding: own OIDC provider with OAuth2 and 2FA, multi-workspace RBAC and Stripe subscriptions. Every new product starts on top of this base. Ran in production and is now open source.",
          caseStudy: {
            problem:
              "Nolvaq's products need a shared foundation for accounts, identity and billing.",
            approach:
              "Vianova centralizes these capabilities in a hub with its own OIDC provider, OAuth2, 2FA, multi-workspace RBAC and Stripe subscriptions.",
            decisions: [
              {
                title: "Centralize accounts and identity",
                description:
                  "The foundation uses its own OIDC provider with OAuth2 and two-factor authentication.",
              },
              {
                title: "Separate access by workspace",
                description:
                  "Multi-workspace RBAC organizes permissions across workspaces.",
              },
              {
                title: "Include subscriptions in the same foundation",
                description:
                  "Stripe subscriptions are part of the account, identity and billing hub.",
              },
            ],
            outcome:
              "Every new Nolvaq product starts on this foundation. Vianova ran in production and is now open source.",
          },
          stack: ["Bun", "TypeScript", "Elysia", "Stripe", "PostgreSQL", "OIDC"],
          link: "https://github.com/fabisiakeduardo/Vianova",
          linkLabel: "github.com/fabisiakeduardo/Vianova",
          motif: "orbit",
        },
        {
          name: "Onda",
          slug: "onda",
          category: "SELF-HOSTED · VOICE & CHAT",
          description:
            "A Discord alternative where the community runs on the host's own server: voice, video, text, history and moderation stay entirely with the host, even behind CGNAT. Onda only holds the identity, which travels across servers.",
          caseStudy: {
            problem:
              "A community needs voice, video, text, history and moderation on its own server without losing its identity across servers.",
            approach:
              "Onda proposes a Discord alternative where the community runs on the host's server while its identity can travel between servers.",
            decisions: [
              {
                title: "Keep the community on its host's server",
                description:
                  "Voice, video, text, history and moderation stay with the person hosting the community.",
              },
              {
                title: "Separate identity from the server",
                description:
                  "The proposal keeps identity with Onda so it can travel between servers.",
              },
              {
                title: "Account for connections behind CGNAT",
                description:
                  "The current description presents the proposal as usable even behind CGNAT.",
              },
            ],
            outcome:
              "The described proposal keeps a community and its content on the host's server, with an identity that travels between servers.",
          },
          stack: [],
          link: "https://ondachat.app",
          linkLabel: "ondachat.app",
          motif: "field",
        },
        {
          name: "Currículos",
          slug: "curriculos",
          category: "AI · PRODUCTIVITY",
          description:
            "Rails app that generates resumes tailored to each job posting: extracts keywords from the description, scores the match and rewrites summary and bullets. Chat assistant, LinkedIn PDF import and multi-provider AI (Ollama, OpenAI, Anthropic, Gemini).",
          caseStudy: {
            problem:
              "A resume needs to highlight the match between the experience it presents and the requirements of each job posting.",
            approach:
              "The app extracts keywords from a job description, scores the match and rewrites the resume summary and bullets.",
            decisions: [
              {
                title: "Use the job posting as a reference",
                description:
                  "Keyword extraction and match scoring start from the opportunity's text.",
              },
              {
                title: "Tailor the resume content",
                description:
                  "The summary and bullets are rewritten for each job, with help from a chat assistant.",
              },
              {
                title: "Offer PDF import and AI providers",
                description:
                  "The app imports LinkedIn PDFs and offers Ollama, OpenAI, Anthropic and Gemini.",
              },
            ],
            outcome:
              "The app generates resumes tailored to each job and combines match analysis, rewriting, chat and LinkedIn PDF import.",
          },
          stack: ["Rails 8", "SQLite", "Hotwire", "Stimulus", "LLM"],
          link: "https://github.com/fabisiakeduardo/curriculos",
          linkLabel: "github.com/fabisiakeduardo/curriculos",
          motif: "flux",
        },
        {
          name: "rust-pathtracer",
          slug: "rust-pathtracer",
          category: "RUST · GRAPHICS",
          description:
            "Monte Carlo path tracer in Rust with two backends: a parallel CPU renderer (rayon + BVH) and a real-time GPU path tracer on OpenGL 4.3 compute shaders with progressive accumulation. Lambertian, metal and dielectric materials, depth of field and an interactive fly camera.",
          caseStudy: {
            problem:
              "Explore Monte Carlo path tracing in Rust through both parallel CPU rendering and interactive GPU visualization.",
            approach:
              "The project offers a CPU backend using rayon and BVH and a GPU backend using OpenGL 4.3 compute shaders with progressive accumulation.",
            decisions: [
              {
                title: "Keep two rendering backends",
                description:
                  "The CPU produces parallel renders while the GPU offers an interactive path tracer.",
              },
              {
                title: "Accelerate CPU rendering",
                description:
                  "The CPU backend combines parallelism with rayon and a BVH.",
              },
              {
                title: "Accumulate GPU samples progressively",
                description:
                  "The OpenGL 4.3 backend uses compute shaders and progressive accumulation with an interactive fly camera.",
              },
            ],
            outcome:
              "The project combines CPU and GPU rendering, Lambertian, metal and dielectric materials, and depth of field.",
          },
          stack: ["Rust", "OpenGL", "GLSL", "Rayon", "BVH"],
          link: "https://github.com/fabisiakeduardo/rust-pathtracer",
          linkLabel: "github.com/fabisiakeduardo/rust-pathtracer",
          motif: "trace",
        },
        {
          name: "fio",
          slug: "fio",
          category: "LINUX · AUDIO",
          description:
            "Virtual audio patchbay for Linux with PipeWire and PulseAudio. Creates virtual devices, routes applications and microphones through saved rules, and restores configuration when the server state drifts.",
          caseStudy: {
            problem:
              "Manually configuring audio devices and routes with pactl means repeating commands for a setup that should remain available.",
            approach:
              "fio creates virtual devices and saves rules for routing applications, microphones and devices, reconciling the desired configuration with the audio server.",
            decisions: [
              {
                title: "Use the PulseAudio compatibility API",
                description:
                  "The backend uses libpulse-binding and works with PipeWire through pipewire-pulse without PipeWire-specific code.",
              },
              {
                title: "Separate desired state from execution",
                description:
                  "Persisted configuration and pure action planning are separate from the layer that performs server operations.",
              },
              {
                title: "Detect and correct drift",
                description:
                  "fio identifies devices, routes or links that no longer match saved configuration and offers restoration.",
              },
            ],
            outcome:
              "Saved routes can be reapplied and application rules also cover streams that appear later, without repeating pactl commands manually.",
          },
          stack: ["Rust", "SvelteKit", "TypeScript", "Tauri", "PipeWire"],
          link: "https://github.com/fabisiakeduardo/fio",
          linkLabel: "github.com/fabisiakeduardo/fio",
          motif: "broadcast",
        },
        {
          name: "AImongUS",
          slug: "aimongus",
          category: "ELIXIR · AGENTS",
          description:
            "Social deduction matches between LLM agents, watched live in the browser. Each pawn has its own GenServer, polls a limited view of the game and acts through an authoritative engine; matches can be recorded and replayed.",
          caseStudy: {
            problem:
              "AI agents need to play a social deduction match with individual views, consistent rules and an experience that lets people follow the game.",
            approach:
              "Each agent runs in its own GenServer, polls a filtered view of the authoritative game engine and submits intents validated against its rules. Matches are watched through a Phoenix LiveView interface with Three.js.",
            decisions: [
              {
                title: "Run one process per agent",
                description:
                  "Each pawn is an OTP-supervised GenServer that polls the game state.",
              },
              {
                title: "Limit what each agent can observe",
                description:
                  "The view sent to a prompt contains only what that agent could observe in the match.",
              },
              {
                title: "Validate intents in the game engine",
                description:
                  "Moves, tasks, kills, speech and votes are validated against server-side rules.",
              },
              {
                title: "Record matches and provide a local adapter",
                description:
                  "Matches are recorded as JSONL, and the stub adapter runs locally without API keys.",
              },
            ],
            outcome:
              "Matches can be watched live in the browser and replayed later; the stub adapter runs scripted agents locally with no API cost.",
          },
          stack: ["Elixir", "Phoenix LiveView", "OTP", "Three.js"],
          link: "https://github.com/fabisiakeduardo/aimongus",
          linkLabel: "github.com/fabisiakeduardo/aimongus",
          motif: "orbit",
        },
      ],
      oss: {
        heading: "Open source",
        intro: "Tools I built for myself and published for anyone to use.",
        items: [
          {
            name: "AnonDrop",
            slug: "anondrop",
            category: "SHARING · COLLABORATION",
            description:
              "Anonymous file sharing with no account, plus real-time collaborative text and code editing in the browser, version history and diffs.",
            caseStudy: {
              problem:
                "Sharing files without creating an account and collaborating on text or code in the browser call for a simple access flow.",
              approach:
                "AnonDrop uses tokens for anonymous file sharing and combines collaborative browser editing with Reverb and Monaco and version history.",
              decisions: [
                {
                  title: "Share through tokens",
                  description:
                    "Anonymous access is token-based, with no account required to share files.",
                },
                {
                  title: "Edit text and code in the browser",
                  description:
                    "Reverb and Monaco support collaborative editing directly in the browser.",
                },
                {
                  title: "Keep version history",
                  description:
                    "The history makes earlier versions of shared content available for review.",
                },
              ],
              outcome:
                "The project brings anonymous sharing, collaborative browser editing and version history together in one tool.",
            },
            stack: ["Laravel", "Reverb", "Monaco", "SQLite"],
            link: "https://github.com/fabisiakeduardo/anondrop",
          },
          {
            name: "BananaGit",
            slug: "bananagit",
            category: "DESKTOP · GIT",
            description:
              "A desktop Git GUI that swaps commands for plain-language actions: status, branches, stash and colored diff, no terminal needed.",
            caseStudy: {
              problem:
                "Common Git operations through the command line can be less accessible to people who prefer a graphical interface.",
              approach:
                "BananaGit is a Kotlin and Compose Desktop application that uses JGit and presents Git actions in plain language.",
              decisions: [
                {
                  title: "Build a desktop interface",
                  description:
                    "Kotlin and Compose Desktop provide the application's graphical interface.",
                },
                {
                  title: "Use JGit for Git operations",
                  description:
                    "JGit provides integration with Git repositories inside the application.",
                },
                {
                  title: "Present actions in plain language",
                  description:
                    "The interface organizes operations such as status, branches, stash and diff without requiring commands to be typed into a terminal.",
                },
              ],
              outcome:
                "The project provides a desktop interface for Git operations with plain-language actions.",
            },
            stack: ["Kotlin", "Compose Desktop", "JGit"],
            link: "https://github.com/fabisiakeduardo/bananagit",
          },
          {
            name: "Singr",
            slug: "singr",
            category: "DISCORD · MUSIC",
            description:
              "Self-hosted Discord music bot, streaming audio from YouTube and other sources into voice channels via slash commands.",
            caseStudy: {
              problem:
                "A Discord server may need music playback in voice channels with controls integrated into the platform.",
              approach:
                "Singr is a self-hosted Java bot that uses JDA to interact with Discord and LavaPlayer to play audio.",
              decisions: [
                {
                  title: "Allow self-hosting",
                  description:
                    "The person responsible for a Discord server can run the bot themselves.",
                },
                {
                  title: "Use slash commands",
                  description:
                    "Slash commands provide the control interface inside Discord.",
                },
                {
                  title: "Separate integration and playback",
                  description:
                    "JDA integrates the bot with Discord, while LavaPlayer handles audio playback.",
                },
              ],
              outcome:
                "Singr provides music playback in Discord voice channels controlled through slash commands.",
            },
            stack: ["Java", "JDA", "LavaPlayer"],
            link: "https://github.com/fabisiakeduardo/Singr",
          },
          {
            name: "CDN",
            slug: "cdn",
            category: "API · MEDIA",
            description:
              "Minimal CDN backend: receives, stores and serves images and videos over a JSON API, with API key auth and configurable limits.",
            caseStudy: {
              problem:
                "Applications working with images and videos need an interface to upload and serve those files with defined limits.",
              approach:
                "CDN is a Laravel JSON API for uploading and serving images and videos, protected by an API key and configurable file limits.",
              decisions: [
                {
                  title: "Provide a JSON API",
                  description:
                    "The API brings media upload and serving operations together.",
                },
                {
                  title: "Require an API key",
                  description:
                    "Key-based authentication protects access to the API operations.",
                },
                {
                  title: "Configure file limits",
                  description:
                    "File limits can be adjusted for an installation.",
                },
              ],
              outcome:
                "The project provides a Laravel API for receiving and serving images and videos with key-based authentication and configurable limits.",
            },
            stack: ["Laravel", "PHP"],
            link: "https://github.com/fabisiakeduardo/CDN",
          },
          {
            name: "url-shortener",
            slug: "url-shortener",
            category: "UTILITY · LINKS",
            description:
              "Straight-to-the-point URL shortener: paste a URL, get a short link.",
            caseStudy: {
              problem:
                "Sharing long addresses can be inconvenient when a short link is enough.",
              approach:
                "url-shortener is a small Laravel application with SQLite that turns a URL into a short link.",
              decisions: [
                {
                  title: "Keep the scope small",
                  description:
                    "The application focuses on shortening a URL without presenting features beyond that purpose.",
                },
                {
                  title: "Use Laravel for the application",
                  description:
                    "Laravel provides the web application framework.",
                },
                {
                  title: "Persist data in SQLite",
                  description:
                    "SQLite is used as the application's database.",
                },
              ],
              outcome:
                "The result is a small application for generating short links from URLs.",
            },
            stack: ["Laravel", "SQLite", "Tailwind CSS"],
            link: "https://github.com/fabisiakeduardo/url-shortener",
          },
        ],
      },
    },
    experience: {
      heading: "Experience",
      items: [
        {
          company: "Nolvaq",
          role: "Founder",
          period: "2026 → present",
          bullets: [
            "Custom systems, automations and integrations for businesses, from diagnosis to monitored operation",
            "Own account, identity and billing hub (Vianova) as the base for every product",
            "Live SaaS products under the brand, such as Pendência for accounting firms",
          ],
          tags: ["TypeScript", "Next.js", "Bun", "PostgreSQL", "Stripe", "OIDC"],
          links: [{ label: "nolvaq.software", url: "https://nolvaq.software" }],
        },
        {
          company: "Preço Local",
          role: "Software Engineer",
          period: "NOV 2025 → MAY 2026",
          bullets: [
            "REST API from scratch in Node.js/TypeScript for catalogs, pricing and search engines",
            "Distributed Redis caching cutting latency on recurring searches",
            "Geolocation and city-based search with results ordered by proximity",
            "Cross-platform React Native mobile app with responsive UI",
            "Dockerized services with CI/CD; published on Google Play and the App Store",
          ],
          tags: ["Node.js", "TypeScript", "React Native", "Redis", "PostgreSQL", "Docker", "Geolocation", "CI/CD"],
          links: [
            {
              label: "Google Play",
              url: "https://play.google.com/store/apps/details?id=com.anonymous.consultapreco",
            },
            {
              label: "App Store",
              url: "https://apps.apple.com/br/app/pre%C3%A7o-local/id6757374197",
            },
          ],
        },
        {
          company: "Sky Store",
          role: "Software Engineer",
          period: "JUN 2025 → NOV 2025",
          bullets: [
            "Node.js and PostgreSQL backend services for the digital products e-commerce",
            "RabbitMQ queues and Redis caching for high-throughput async processing",
            "React storefront frontend and Amazon S3 file storage",
            "Lua scripts and FiveM server mechanics connected to APIs and backend services",
            "Admin panels and internal tools for user management and operations",
          ],
          tags: ["Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS S3", "Lua", "FiveM", "Linux"],
          links: [
            { label: "SkyStore", url: "https://skystore.com.br" },
            { label: "Americanópolis", url: "https://americanopolisroleplay.com" },
          ],
        },
        {
          company: "Rituais de Axé",
          role: "Software Engineer",
          period: "SEP 2024 → JUN 2025",
          bullets: [
            "Payment architecture with instant Pix and automated enrollment on confirmation",
            "Node.js REST APIs for student workflows and administrative endpoints",
            "Background jobs for payment status checks and enrollment triggers",
            "JWT authentication with RBAC protecting course content and user data",
            "Course media on Amazon S3; internal tools (photo time-tracking, vacations, automations)",
          ],
          tags: ["Node.js", "React", "Redis", "AWS S3", "JWT", "RBAC", "Pix", "PostgreSQL"],
          links: [
            { label: "Rituais de Axé", url: "https://rituaisdeaxes.com" },
          ],
        },
        {
          company: "Document Search & Query Platform",
          role: "Full-Stack Developer",
          period: "DEC 2022 → SEP 2024",
          bullets: [
            "Search services in Java with low-latency APIs for complex document queries",
            "Decomposition of the legacy monolith into independent microservices",
            "High-volume indexing pipelines and async messaging with RabbitMQ",
            "Distributed Redis caching and PostgreSQL query tuning under load",
            "Java/PHP → Laravel modernization, automated test suites and CI/CD pipelines",
          ],
          tags: ["Java", "PostgreSQL", "Redis", "RabbitMQ", "Microservices", "PHP", "Laravel", "CI/CD"],
          links: [],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          name: "Languages",
          items: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "Ruby", "Kotlin", "Lua"],
        },
        {
          name: "Frameworks & libs",
          items: ["Node.js", "Express.js", "Spring Boot", "Laravel", "Rails", "React", "Next.js", "React Native", "Bun", "Elysia", "Tailwind CSS"],
        },
        {
          name: "Data & messaging",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Firestore", "RabbitMQ", "Kafka", "BullMQ"],
        },
        {
          name: "AI",
          items: ["Claude Code", "Devin IDE", "Prompt Engineering", "OpenDesign"],
        },
        {
          name: "Infra & DevOps",
          items: ["AWS", "Docker", "Linux (Arch)", "GitHub Actions", "Proxmox", "Nginx", "Apache", "Git", "CI/CD"],
        },
        {
          name: "Practices & protocols",
          items: ["REST APIs", "GraphQL", "gRPC", "WebSocket", "JWT", "OIDC", "Microservices", "Agile methodologies"],
        },
      ],
    },
    about: {
      heading: "About",
      body: "Software engineer from Rio Grande do Sul, Brazil, focused on backend and distributed systems with full-stack range. I work across the whole product lifecycle: architecture, APIs, data, cloud infrastructure and deploy. I like the border between engineering, product and business: understanding the problem behind the feature and building what makes sense technically and as a product.",
      facts: [
        { label: "Base", value: "Rio Grande do Sul, Brazil" },
        { label: "Education", value: "B.S. in Computer Science, Universidade Regional Integrada (2024 - 2027)" },
        { label: "Languages", value: "Native Portuguese, professional English" },
        { label: "Focus", value: "APIs, distributed systems, messaging, payments" },
      ],
    },
    blog: {
      heading: "Blog",
      intro: "What I build, learn and break along the way.",
      readMore: "Read post",
      ptOnly: "post in pt-BR",
      backToBlog: "Back to blog",
    },
    footer: {
      heading: "Let's build something?",
      note: "Open to remote or relocation opportunities as a backend or full-stack engineer.",
      email: "eduardofabisiak@proton.me",
      socials: [
        { label: "GitHub", url: "https://github.com/fabisiakeduardo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/eduardofabisiak" },
      ],
      location: "Rio Grande do Sul · Brazil",
      copyright: '$ echo "© 2026 Eduardo Fabisiak"',
    },
    notFound: {
      error: "no such file or directory",
      hint: "This page doesn't exist, or hasn't been written yet.",
      back: "$ cd ~",
    },
  },
};
