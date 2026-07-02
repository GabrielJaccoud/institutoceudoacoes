# Instituto Céu - Plataforma de Doações

Bem-vindo à plataforma de doações do Instituto Céu! Este projeto é uma aplicação web moderna construída com React, TypeScript, Tailwind CSS e Vite, com suporte a doações nacionais e internacionais.

## 🎯 Características

- **Doações Nacionais**: Suporte a PIX para doações rápidas e sem taxas
- **Doações Internacionais**: Integração com Stripe para receber doações de qualquer país
- **Doações Recorrentes**: Sistema de doações mensais automáticas
- **Parcerias Corporativas**: Programa de matching de doações para empresas
- **Design Responsivo**: Interface otimizada para desktop, tablet e mobile
- **Segurança**: Processamento de pagamentos certificado e protegido
- **Transparência**: Dashboard de impacto e relatórios de doações

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI acessíveis
- **Stripe** - Processamento de pagamentos internacional
- **PayPal** - Alternativa de pagamento

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta Stripe (para doações internacionais)
- Conta PayPal (opcional)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GabrielJaccoud/institutoceudoacoes.git
cd institutoceudoacoes
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Adicione suas chaves de API:
```env
VITE_STRIPE_PUBLIC_KEY=pk_live_seu_stripe_public_key_aqui
VITE_PAYPAL_CLIENT_ID=seu_paypal_client_id_aqui
```

## 💻 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🔨 Build

Para criar uma build de produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos compilados estarão em `dist/`

## 📦 Deploy no GitHub Pages

### 1. Configuração do GitHub Pages

1. Vá para as configurações do repositório no GitHub
2. Navegue até **Settings > Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Escolha a branch `gh-pages`
5. Clique em **Save**

### 2. Deploy Automático com GitHub Actions

Este repositório inclui um workflow automático que faz deploy a cada push para `main`.

Para fazer deploy manualmente:

```bash
npm run build
npm run deploy
```

Ou use o GitHub Actions:

1. Vá para a aba **Actions** do repositório
2. Selecione o workflow **Deploy to GitHub Pages**
3. Clique em **Run workflow**

### 3. Acesso ao Site

Após o deploy, seu site estará disponível em:
```
https://gabrieljaccoud.github.io/institutoceudoacoes/
```

## 🔐 Segurança

- Todas as transações de pagamento são processadas por provedores certificados (Stripe, PayPal)
- As chaves de API são armazenadas como variáveis de ambiente
- Nunca commit chaves secretas no repositório
- Use `.env.local` para desenvolvimento local

## 📊 Estrutura do Projeto

```
institutoceudoacoes/
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes React reutilizáveis
│   └── ui/             # Componentes Shadcn/ui
├── sections/           # Seções principais da página
├── hooks/              # Custom React hooks
├── lib/                # Utilitários e funções auxiliares
├── pages/              # Páginas da aplicação
├── App.tsx             # Componente raiz
├── main.tsx            # Entry point
├── index.html          # HTML base
├── vite.config.ts      # Configuração Vite
├── tailwind.config.js  # Configuração Tailwind
└── tsconfig.json       # Configuração TypeScript
```

## 📝 Seções da Página

### Hero Section
Banner principal com chamada para ação e mensagem de impacto

### Programs Section
Apresentação dos três pilares de atuação do Instituto

### Impact Section
Métricas de impacto com números animados

### Donate Section
Opções de doação (PIX, Stripe, Mensal, Parceria)

### Testimonials Section
Depoimentos de beneficiários e doadores

### Partners Section
Logos e informações de parceiros

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas:

- Email: contato@institutoceu.org
- Parcerias: parcerias@institutoceu.org
- Doações: doacao@institutoceu.org

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

Agradecemos a todos os doadores e parceiros que tornam possível o trabalho do Instituto Céu.

---

**Instituto Céu - Transformando vidas através da engenharia social**
