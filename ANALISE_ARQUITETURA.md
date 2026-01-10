# 🏛️ ANÁLISE ARQUITETURAL COMPLETA - LANDING PAGE

**Data:** 10 de Janeiro de 2026  
**Projeto:** Landing Page - Jadson Campos  
**Versão:** 0.1.0

---

## 📋 SUMÁRIO EXECUTIVO

**Status Geral:** ✅ **APROVADO** (Grade: B+)

**Tecnologias:** Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4

**Propósito:** Página de marketing para geração de leads (WhatsApp) de serviços de consultoria operacional para restaurantes, clínicas, hospitais e serviços recorrentes.

**Build Status:** ✅ Compilação sem erros  
**Lint Status:** ✅ Sem erros (warnings corrigidos)  
**Deploy Ready:** ✅ Sim (SSG standalone)

---

## 1️⃣ VISÃO GERAL DO SISTEMA

### **Objetivo de Negócio**
Landing page de conversão para consultor em eficiência operacional. O objetivo é capturar leads qualificados através de CTAs do WhatsApp distribuídos estrategicamente pela página.

### **Jornada do Usuário**
1. Visitante chega (tráfego pago/orgânico)
2. Lê proposta de valor (Hero section)
3. Identifica-se com dores (Problems section)
4. Explora soluções (Services section)
5. Verifica relevância por segmento (Segments tabs)
6. Entende processo (How it Works)
7. Constrói confiança (Evidence + Authority)
8. Converte via WhatsApp (múltiplos pontos de contato)

### **Modelo de Conversão**
- Primário: Redirecionamento WhatsApp
- Secundário: (ausente - oportunidade)
- Tracking: (não implementado - risco)

---

## 2️⃣ ARQUITETURA ATUAL (AS-IS)

### **Stack Tecnológico**

```
┌─────────────────────────────────────┐
│ Next.js 16.1.1 (App Router)         │
│ - React 19.2.3                      │
│ - TypeScript 5                      │
│ - React Compiler habilitado         │
│ - Output: standalone                │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│ Styling Layer                       │
│ - Tailwind CSS 4                    │
│ - CSS Variables (design tokens)     │
│ - Custom classes (.card-premium)    │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│ UI Components                       │
│ - Radix UI (headless + a11y)        │
│ - class-variance-authority          │
│ - Geist fonts                       │
└─────────────────────────────────────┘
```

### **Estrutura de Pastas**

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fontes
│   ├── page.tsx            # Homepage (orquestração)
│   └── globals.css         # Design system tokens
│
├── components/
│   ├── ui/                 # Primitivos genéricos reutilizáveis
│   │   ├── button.tsx      # CVA variants (default, outline, ghost, etc.)
│   │   ├── card.tsx        # Layout wrapper
│   │   └── tabs.tsx        # Radix Tabs (client component)
│   │
│   └── marketing/          # Seções específicas do domínio
│       ├── header.tsx      # Nav sticky (client - scroll state)
│       ├── hero.tsx        # Above the fold
│       ├── problems.tsx    # Pain points
│       ├── services.tsx    # Value proposition
│       ├── segments.tsx    # ✅ ATIVO (versão com tabs)
│       ├── segments-new.tsx # ⚠️ ORPHAN (versão cards)
│       ├── how-it-works.tsx # Processo 3 etapas
│       ├── evidence.tsx    # Social proof + referências
│       ├── footer.tsx      # Links + contato
│       └── section.tsx     # Layout utility wrapper
│
└── lib/
    └── landingCopy.ts      # ⭐ SSOT (Single Source of Truth)
                            # Toda a copy centralizada
```

### **Padrões Arquiteturais Identificados**

#### **1. Content-Driven Architecture**
```typescript
// ✅ Toda a copy vive em um único objeto tipado
export const landingCopy = {
  seo: { title, description, keywords },
  cta: { label, helper, whatsappNumber, whatsappMessage },
  hero: { badge, h1, subheadline, forWho, signature, highlights[] },
  problems: { title, items[] },
  services: { title, intro, items[] },
  segments: { title, items[] },
  howItWorks: { title, steps[], note },
  benefits: { title, items[], disclaimer },
  authority: { title, items[] },
  closing: { anchor, finalTitle, finalText }
}

// Componentes consomem via import
import { landingCopy } from "@/lib/landingCopy";
const { hero } = landingCopy;
```

**Benefícios:**
- Zero strings hardcoded nos componentes
- Fácil A/B testing (swap do objeto)
- Editável por não-desenvolvedores
- Type-safe (TypeScript infere estrutura)

**Riscos:**
- Arquivo único pode crescer demais
- Sem validação de schema (Zod/Yup)
- Mistura conteúdo com config (whatsappNumber)

---

#### **2. Component Composition (Orchestration Pattern)**
```tsx
// page.tsx = Camada de orquestração
export default function Page() {
  return (
    <>
      <Header />      // Nav
      <Hero />        // ATF
      <Problems />    // Pain
      <Services />    // Solution
      <Segments />    // Segmentation
      <HowItWorks />  // Process
      <Evidence />    // Trust
      <Footer />      // Contact
    </>
  );
}
```

**Benefícios:**
- Ordem das seções 100% explícita
- Fácil reordenar/remover seções
- Cada seção é independente (SRP)
- Clear separation of concerns

---

#### **3. Server-First Rendering**
```
Client Components (apenas 2):
├── header.tsx       → Precisa de scroll listener
└── ui/tabs.tsx      → UI interativa (Radix)

Server Components (resto):
└── Todos os outros  → Renderização estática (SSG)
```

**Benefícios:**
- JavaScript mínimo no cliente (~95% server-rendered)
- First Contentful Paint otimizado
- SEO-friendly por padrão

---

#### **4. Design System Strategy**

**CSS Variables (globals.css):**
```css
:root {
  --primary: 221.2 83.2% 53.3%;     /* Azul */
  --background: 0 0% 100%;          /* Branco */
  --radius: 0.5rem;
  /* ... 23 tokens */
}
```

**Tailwind Utilities:**
```tsx
<div className="bg-primary text-primary-foreground hover:bg-primary/90" />
```

**Custom Classes:**
```css
.container-premium { max-width: 80rem; padding: 1.5rem; }
.card-premium { border-radius: 0.75rem; border: 1px solid; transition: all 300ms; }
.gradient-text { background-clip: text; color: transparent; }
```

**⚠️ Problema:** Três estratégias concorrentes (inconsistente)

---

#### **5. Type Safety**
```typescript
// Metadata tipado
export const metadata: Metadata = {
  title: landingCopy.seo.title,
  description: landingCopy.seo.description,
}

// Variantes tipadas (CVA)
const buttonVariants = cva(
  "base-classes",
  { variants: { variant: {...}, size: {...} } }
)

// Props tipadas
interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}
```

---

## 3️⃣ FORÇAS (Strengths) ✅

### **A. Content Management Excellence**
⭐⭐⭐⭐⭐

**Por quê é bom:**
- Toda a copy em `landingCopy.ts` (DRY)
- Não-devs podem editar sem tocar JSX
- Mudanças de messaging = editar 1 arquivo
- Type-safety previne erros em runtime

**Exemplo prático:**
```typescript
// Mudar CTA em toda página:
cta: {
  label: "Agendar diagnóstico no WhatsApp",  // ← edita aqui
  // Automaticamente reflete em:
  // - Hero
  // - Services
  // - How It Works  
  // - Evidence
}
```

---

### **B. Performance-First**
⭐⭐⭐⭐

**Por quê é bom:**
- SSG (Static Site Generation) → CDN-ready
- Minimal JS (~2 client components)
- React Compiler → memoização automática
- Standalone output → Docker-friendly

**Métricas esperadas:**
- FCP (First Contentful Paint): <1s
- LCP (Largest Contentful Paint): <2.5s
- TBT (Total Blocking Time): ~0ms
- CLS (Cumulative Layout Shift): 0

---

### **C. Developer Experience**
⭐⭐⭐⭐

**Por quê é bom:**
- Estrutura de pastas clara (ui/ vs marketing/)
- TypeScript previne erros bobos
- ESLint configurado, build limpo
- Hot reload rápido
- Tooling moderno (Tailwind v4, Next 16)

---

### **D. Accessibility by Default**
⭐⭐⭐⭐⭐

**Por quê é bom:**
- Radix UI → ARIA attributes automáticos
- Navegação por teclado funciona
- Focus management correto
- HTML semântico (`<section>`, `<header>`, `<nav>`)

---

### **E. Scalability Potential**
⭐⭐⭐

**Por quê é bom:**
- Adicionar seção = criar componente + import
- Design system extensível (CSS vars)
- Component library cresce organicamente
- Pronto para multi-página (App Router)

---

## 4️⃣ RISCOS & CODE SMELLS ⚠️

### **A. DUPLICAÇÃO & CÓDIGO MORTO**
**Severidade:** 🔴 ALTA

**Problema:**
```
src/components/marketing/
├── segments.tsx        ← ATIVO (tabs version)
└── segments-new.tsx    ← MORTO (cards version)
```

- Dois componentes fazem a mesma coisa
- `segments-new.tsx` não é usado em `page.tsx`
- Confuso para novos devs
- Desperdiça espaço mental

**Evidência:**
```tsx
// page.tsx usa:
import { Segments } from "@/components/marketing/segments";

// segments-new.tsx não é importado em lugar nenhum
```

**Impacto:**
- Risco de editar arquivo errado
- Código stale acumula
- Debt técnico cresce

**Recomendação:**
```bash
# Opção 1: Deletar
rm src/components/marketing/segments-new.tsx

# Opção 2: Documentar
# Adicionar comentário no arquivo explicando por que existe
# (ex: "Backup para A/B test futuro")
```

---

### **B. CONTENT STRUCTURE MISMATCH**
**Severidade:** 🟡 MÉDIA

**Problema:**
```typescript
// segments-new.tsx ESPERA:
type Segment = {
  slug: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

// landingCopy.segments FORNECE:
segments: {
  items: [
    { title: "Restaurantes", desc: "..." },
    { title: "Clínicas", desc: "..." }
  ]
}
```

**Evidência:**
```typescript
// segments-new.tsx tem fallback hardcoded:
function getSegments(): Segment[] {
  const anyCopy = landingCopy as unknown as { segments?: Segment[] };
  // ↓ Isso SEMPRE retorna fallback porque tipos não batem
  if (Array.isArray(anyCopy.segments) && anyCopy.segments.length > 0) {
    return anyCopy.segments;
  }
  
  // ⚠️ FALLBACK HARDCODED é sempre usado
  return [
    { slug: "restaurantes", title: "Restaurantes", ... },
    { slug: "varejo", title: "Varejo", ... }
  ];
}
```

**Impacto:**
- Editar `landingCopy.segments` não tem efeito
- Dados vivem em dois lugares
- Confusão sobre "source of truth"

**Recomendação:**
1. Deletar `segments-new.tsx`, OU
2. Alinhar estrutura de dados em `landingCopy.ts`

---

### **C. ABSTRAÇÃO INCONSISTENTE**
**Severidade:** 🟡 MÉDIA

**Problema:** Componente `section.tsx` usado às vezes, às vezes não.

**Evidência:**
```tsx
// problems.tsx - USA Section wrapper
export function Problems() {
  return (
    <Section title={...} subtitle={...} background="gray">
      {children}
    </Section>
  );
}

// hero.tsx - NÃO USA (manual)
export function Hero() {
  return (
    <section className="relative bg-gradient-to-br...">
      <div className="container-premium">
        {/* ... */}
      </div>
    </section>
  );
}

// evidence.tsx - NÃO USA (manual)
export function Evidence() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ... */}
      </div>
    </section>
  );
}
```

**Impacto:**
- Duplicação de layout code
- Mudanças globais difíceis (precisa editar N arquivos)
- Sem padrão claro de quando usar

**Recomendação:**
- **Opção 1:** Usar `<Section>` em TODOS componentes
- **Opção 2:** Remover `<Section>` e usar padrão manual
- **Opção 3:** Documentar: "Use Section para seções simples, manual para custom layouts"

---

### **D. MAGIC STRINGS (Anchor Links)**
**Severidade:** 🟡 MÉDIA

**Problema:** IDs de âncoras espalhados sem fonte única.

**Evidência:**
```tsx
// header.tsx
<a href="#servicos">Soluções</a>
<a href="#segmentos">Segmentos</a>
<a href="#como-funciona">Como funciona</a>

// services.tsx
<Section id="servicos" ... />

// segments.tsx
<section id="segmentos" ... />

// how-it-works.tsx
// ⚠️ NÃO TEM id="como-funciona" → link quebrado
```

**Impacto:**
- Navegação pode quebrar silenciosamente
- Difícil manter sincronizado
- Sem type-safety

**Recomendação:**
```typescript
// lib/routes.ts
export const ANCHORS = {
  SERVICES: 'servicos',
  SEGMENTS: 'segmentos',
  HOW_IT_WORKS: 'como-funciona',
} as const;

// Uso:
<a href={`#${ANCHORS.SERVICES}`}>Soluções</a>
<Section id={ANCHORS.SERVICES} ... />
```

---

### **E. WHATSAPP CONFIG EM CONTENT**
**Severidade:** 🟢 BAIXA

**Problema:** Número de telefone vive em arquivo de conteúdo.

**Evidência:**
```typescript
// landingCopy.ts
cta: {
  whatsappNumber: "5521988551085",  // ← config, não copy
  whatsappMessage: "Olá, gostaria de agendar um diagnóstico operacional",
}
```

**Impacto:**
- Número exposto no repositório
- Difícil trocar para mercados diferentes
- Mistura conteúdo com configuração

**Recomendação:**
```typescript
// .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=5521988551085

// lib/config.ts
export const config = {
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!,
  }
}
```

---

### **F. SEM CAPTURA DE LEADS**
**Severidade:** 🟡 MÉDIA (depende da estratégia)

**Problema:** 100% dependência do WhatsApp.

**Limitações atuais:**
- Sem fallback de email
- Sem analytics de conversão
- Sem remarketing pixel
- Não funciona em redes corporativas (WhatsApp bloqueado)

**Oportunidades perdidas:**
- Não captura leads que preferem email
- Sem lead magnet (PDF, checklist, etc.)
- Sem sequência de nurturing

**Recomendação:**
```tsx
// Adicionar formulário simples:
<Form onSubmit={...}>
  <input type="email" placeholder="seu@email.com" />
  <button>Receber diagnóstico gratuito</button>
</Form>

// + Integração com:
// - Mailchimp / ConvertKit
// - Planilha Google
// - Webhook Zapier
```

---

### **G. ESTRATÉGIA DE ESTILO FRAGMENTADA**
**Severidade:** 🟡 MÉDIA

**Problema:** Três métodos concorrentes de estilização.

**Evidência:**
```tsx
// Método 1: Custom classes (globals.css)
<div className="card-premium" />

// Método 2: Tailwind utilities
<div className="rounded-xl border border-gray-200 shadow-sm" />

// Método 3: CSS variables + Tailwind
<div className="bg-primary text-primary-foreground" />
```

**Impacto:**
- Difícil saber "jeito certo" de estilizar
- Inconsistência cresce
- Refactoring arriscado

**Recomendação:**
Estabelecer hierarquia:
1. **Primeiro:** Tailwind utilities (maioria dos casos)
2. **Segundo:** Custom classes para padrões repetidos
3. **Terceiro:** CSS variables para tokens de design

---

### **H. SEM ERROR BOUNDARIES**
**Severidade:** 🔴 ALTA (produção)

**Problema:** Sem fallback para erros de runtime.

**Cenário:**
```tsx
// Se qualquer componente crashar:
<Hero /> → throws Error
         ↓
// Página inteira fica em branco
// Usuário vê tela branca
// Sem log do erro
```

**Recomendação:**
```tsx
// app/error.tsx
'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2>Algo deu errado!</h2>
        <button onClick={() => reset()}>Tentar novamente</button>
      </div>
    </div>
  )
}
```

---

### **I. METADATA INCOMPLETA (SEO)**
**Severidade:** 🟡 MÉDIA

**Problema:** Faltam tags essenciais para SEO/social.

**Atual:**
```tsx
export const metadata: Metadata = {
  title: landingCopy.seo.title,
  description: landingCopy.seo.description,
  keywords: landingCopy.seo.keywords,  // ← Ignorado por Google/Bing
};
```

**Faltando:**
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URL
- JSON-LD (structured data para rich snippets)
- Favicon / Apple touch icon

**Impacto:**
- Preview feio ao compartilhar no WhatsApp/social
- Sem rich snippets nos resultados de busca
- SEO sub-otimizado

**Recomendação:**
```tsx
export const metadata: Metadata = {
  title: landingCopy.seo.title,
  description: landingCopy.seo.description,
  
  // Open Graph
  openGraph: {
    title: landingCopy.seo.title,
    description: landingCopy.seo.description,
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'pt_BR',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: landingCopy.seo.title,
    description: landingCopy.seo.description,
    images: ['/og-image.jpg'],
  },
  
  // Outros
  metadataBase: new URL('https://jadson-campos.com.br'),
  alternates: {
    canonical: '/',
  },
}
```

---

### **J. DEBT DE TESTES**
**Severidade:** 🟡 MÉDIA (depende da fase)

**Problema:** Zero testes.

**Ausente:**
- Unit tests (componentes)
- Integration tests (fluxos)
- E2E tests (conversão)
- Visual regression tests

**Impacto:**
- Refactoring arriscado
- Regressions passam despercebidas
- Difícil validar mudanças

**Recomendação (fase 2):**
```typescript
// __tests__/hero.test.tsx
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/marketing/hero'

test('renders CTA button', () => {
  render(<Hero />)
  expect(screen.getByText(/Agendar diagnóstico/i)).toBeInTheDocument()
})

// E2E com Playwright
test('WhatsApp CTA redirects correctly', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Agendar diagnóstico')
  await expect(page).toHaveURL(/wa.me/)
})
```

---

## 5️⃣ QUESTÕES PARA STAKEHOLDER

### **1. Estratégia de Conteúdo**

**Q1.1:** O arquivo `segments-new.tsx` é um experimento ou pode ser deletado?

**Q1.2:** Há planos para multi-idioma (PT/EN)? Isso afeta a arquitetura de conteúdo.

**Q1.3:** No futuro, precisará de CMS visual (Contentful, Sanity) ou edição via código está OK?

**Q1.4:** Há intenção de criar páginas por segmento (`/segmentos/restaurantes`)? Links já apontam para lá.

---

### **2. Tracking & Conversão**

**Q2.1:** Como vocês medem conversões do WhatsApp hoje?
- Analytics instalado?
- UTM tracking configurado?
- Meta Pixel / Google Ads tracking?

**Q2.2:** Precisam rastrear eventos específicos? (scroll, cliques, tempo na página)

**Q2.3:** Há interesse em captura de email como alternativa ao WhatsApp?

**Q2.4:** Qual ferramenta de analytics preferem? (GA4, Plausible, Fathom, outro)

---

### **3. Roadmap Técnico**

**Q3.1:** Esse projeto vai crescer para multi-página ou permanece SPA?

**Q3.2:** Haverá blog/case studies? (afeta content model + routing)

**Q3.3:** Formulários de contato são planejados? (requer backend/API)

**Q3.4:** Qual prazo para adicionar testes? (crítico antes de escalar equipe)

---

### **4. Performance & Infra**

**Q4.1:** Há budget de performance? (ex: "LCP < 2s", "lighthouse score > 90")

**Q4.2:** Tolerância a 3rd-party scripts? (analytics, chat widgets, etc.)

**Q4.3:** Onde será hospedado? (Vercel assumido, mas confirmar)

**Q4.4:** Precisa de staging environment?

**Q4.5:** Quem faz deploys? (manual vs CI/CD automático)

---

### **5. Design & UX**

**Q5.1:** Há Figma/designs de referência ou isso é o MVP final?

**Q5.2:** Animações são desejadas? (scroll animations, parallax, etc.)

**Q5.3:** Dark mode é requisito?

**Q5.4:** Mobile é a prioridade ou desktop?

---

## 6️⃣ RECOMENDAÇÕES PRIORITIZADAS

### **🔴 CRÍTICO (Fazer agora)**

1. **Deletar `segments-new.tsx`** ou documentar seu propósito
   - Reduz confusão
   - Remove código morto
   - Tempo: 5 min

2. **Adicionar Error Boundary**
   - Criar `app/error.tsx`
   - Previne tela branca em produção
   - Tempo: 15 min

3. **Completar metadata SEO**
   - Open Graph tags
   - Twitter cards
   - JSON-LD structured data
   - Tempo: 30 min

---

### **🟡 IMPORTANTE (Próxima sprint)**

4. **Extrair config de content**
   - Mover whatsappNumber para .env
   - Separar config de copy
   - Tempo: 20 min

5. **Padronizar Section usage**
   - Decidir: usar ou não usar
   - Aplicar consistentemente
   - Tempo: 1h

6. **Adicionar analytics básico**
   - Google Analytics 4 OU
   - Plausible (privacy-friendly)
   - Event tracking em CTAs
   - Tempo: 1h

7. **Criar constants para anchors**
   - Evitar magic strings
   - Type-safe navigation
   - Tempo: 30 min

---

### **🟢 NICE TO HAVE (Backlog)**

8. **Setup testes (fase 2)**
   - Vitest + Testing Library
   - Alguns smoke tests
   - Tempo: 2-3h

9. **Adicionar form de email**
   - Alternativa ao WhatsApp
   - Lead magnet
   - Tempo: 2-3h

10. **Refatorar styling strategy**
    - Consolidar em Tailwind
    - Documentar padrões
    - Tempo: 3-4h

11. **Adicionar animações**
    - Framer Motion
    - Scroll reveals
    - Tempo: 4-6h

---

## 7️⃣ MÉTRICAS DO PROJETO

### **Codebase Stats**
- **Componentes:** 12 total (3 UI + 9 marketing)
- **Client Components:** 2 (16%)
- **Server Components:** 10 (84%)
- **Linhas de código:** ~1,500 (estimado)
- **Arquivo maior:** landingCopy.ts (~200 linhas)

### **Build Metrics**
- **Build time:** ~13s
- **Bundle size:** (não medido - adicionar bundle analyzer)
- **Rotas geradas:** 1 (homepage estática)

### **Quality Metrics**
- **TypeScript errors:** 0 ✅
- **ESLint errors:** 0 ✅
- **ESLint warnings:** 0 ✅
- **Test coverage:** 0% ⚠️

---

## 8️⃣ DECISION LOG

### **Decisões Arquiteturais Documentadas**

| Decisão | Rationale | Trade-offs |
|---------|-----------|------------|
| Next.js App Router | Modernidade, RSC, melhor DX | Curva de aprendizado vs Pages Router |
| SSG (não SSR) | Performance, sem backend necessário | Não tem conteúdo dinâmico |
| Tailwind v4 | DX, performance, design tokens | Lock-in no ecossistema |
| Radix UI | Acessibilidade garantida | Bundle size maior que headless puro |
| Content em TS | Type-safety, DX | Não-devs precisam editar código |
| Standalone output | Docker-ready, self-contained | Build time maior |
| React Compiler | Performance automática | Bleeding edge (possíveis bugs) |

---

## 9️⃣ ARCHITECTURE DECISION RECORDS (ADRs)

### **ADR-001: Por que SSG ao invés de SSR?**

**Context:**  
Landing page com conteúdo 100% estático.

**Decision:**  
Usar Static Site Generation (SSG).

**Consequences:**
- ✅ Performance máxima (CDN)
- ✅ Sem servidor necessário
- ✅ SEO otimizado
- ⚠️ Requer rebuild para atualizar conteúdo
- ⚠️ Não funciona para conteúdo personalizado

---

### **ADR-002: Por que content em TypeScript ao invés de CMS?**

**Context:**  
Projeto inicial, time técnico pequeno.

**Decision:**  
Manter copy em `landingCopy.ts`.

**Consequences:**
- ✅ Type-safety
- ✅ Git versioning
- ✅ Zero custo de infra
- ✅ Deploy atômico
- ⚠️ Não-devs precisam saber editar código
- ⚠️ Não há preview de mudanças

**Migration path:**  
Se escalar → migrar para Sanity/Contentful mantendo mesmo shape de dados.

---

### **ADR-003: Por que Radix UI ao invés de MUI/Chakra?**

**Context:**  
Precisamos de componentes acessíveis.

**Decision:**  
Usar Radix UI (headless).

**Consequences:**
- ✅ Total controle de styling
- ✅ Acessibilidade garantida
- ✅ Bundle pequeno (tree-shakeable)
- ⚠️ Precisamos estilizar tudo manualmente
- ⚠️ Sem componentes complexos (data tables, etc.)

---

## 🔟 GLOSSÁRIO TÉCNICO

**SSG** = Static Site Generation (páginas geradas em build time)  
**SSR** = Server-Side Rendering (páginas geradas em request time)  
**RSC** = React Server Components (componentes que rodam no servidor)  
**App Router** = Nova arquitetura do Next.js 13+ (vs Pages Router)  
**CVA** = Class Variance Authority (utility para variants de componentes)  
**Radix UI** = Biblioteca de primitivos headless e acessíveis  
**SSOT** = Single Source of Truth (fonte única de verdade)  
**CTA** = Call to Action (botão/link de conversão)  
**ATF** = Above The Fold (conteúdo visível sem scroll)  
**LCP** = Largest Contentful Paint (métrica de performance)  
**FCP** = First Contentful Paint (métrica de performance)  
**CLS** = Cumulative Layout Shift (métrica de UX)  

---

## 📊 HEALTH CHECK SUMMARY

| Categoria | Status | Nota | Comentário |
|-----------|--------|------|------------|
| **Arquitetura** | 🟢 | A- | Bem estruturada, pequenas inconsistências |
| **Performance** | 🟢 | A+ | SSG, minimal JS, otimizado |
| **Acessibilidade** | 🟢 | A | Radix UI garante padrões |
| **SEO** | 🟡 | B | Faltam OG tags, structured data |
| **Type Safety** | 🟢 | A+ | TypeScript everywhere |
| **Maintainability** | 🟡 | B+ | Código morto, inconsistências |
| **Testing** | 🔴 | F | Zero testes |
| **Security** | 🟢 | A | Sem surface de ataque (SSG) |
| **Documentation** | 🟡 | C+ | README básico, falta ADRs |
| **DevEx** | 🟢 | A | Tooling moderno, fast feedback |

**Nota Geral: B+**

---

## ✅ ACTION ITEMS

### **Esta Semana**
- [ ] Deletar ou documentar `segments-new.tsx`
- [ ] Adicionar `app/error.tsx` (error boundary)
- [ ] Completar metadata (OG tags + Twitter cards)
- [ ] Adicionar JSON-LD structured data

### **Próximas 2 Semanas**
- [ ] Mover whatsappNumber para variável de ambiente
- [ ] Padronizar uso de `<Section>` wrapper
- [ ] Adicionar Google Analytics 4
- [ ] Criar constants para anchor links
- [ ] Adicionar bundle analyzer

### **Backlog (Q1 2026)**
- [ ] Setup Vitest + Testing Library
- [ ] Adicionar formulário de email
- [ ] Implementar dark mode (se desejado)
- [ ] Adicionar animações (Framer Motion)
- [ ] Criar páginas por segmento (`/segmentos/*`)
- [ ] Migrar para CMS (se necessário)

---

## 📚 REFERÊNCIAS

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Web Vitals](https://web.dev/vitals/)
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)

---

## 📝 CHANGELOG

**v1.0.0** - 2026-01-10
- Análise arquitetural inicial
- Identificação de riscos e oportunidades
- Roadmap de melhorias

---

**Fim da Análise**

*Documento gerado por: Senior Software Architect*  
*Próxima revisão: Q2 2026 ou após mudanças significativas*
