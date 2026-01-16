# Plano de Otimização SEO - GCDIGICONT

## Análise Atual

### ✅ Pontos Fortes Existentes

1. **Metadata Robusta**
   - Title tags bem definidos
   - Meta descriptions presentes
   - Keywords extensivas (100+ termos)
   - Open Graph configurado
   - Twitter Cards implementados
   - Canonical URLs definidos

2. **Structured Data (Schema.org)**
   - JSON-LD implementado
   - Tipo: ProfessionalService
   - Informações de contato
   - Área de serviço (cidades)
   - Catálogo de ofertas

3. **Arquivos Técnicos**
   - ✅ robots.txt presente
   - ✅ sitemap.xml presente
   - ✅ manifest.json (PWA)
   - ✅ Google Analytics integrado

4. **Performance**
   - Next.js 15 com otimizações automáticas
   - Imagens otimizadas com next/image
   - Static generation (SSG)
   - Bundle size razoável (~163KB)

---

## 🔧 Melhorias Necessárias

### 1. **Heading Structure (H1-H6)**
**Prioridade: ALTA**

**Problema Atual:**
- Múltiplos H1s na mesma página (Hero, Services, Plans, etc.)
- Hierarquia não semântica

**Solução:**
- Manter apenas 1 H1 por página (no Hero)
- Converter outros títulos principais para H2
- Usar H3 para subtítulos

**Arquivos a modificar:**
- `src/components/Hero.tsx` - Manter H1
- `src/components/Services.tsx` - H1 → H2
- `src/components/Plans.tsx` - H1 → H2
- `src/components/About.tsx` - H1 → H2
- `src/components/Contact.tsx` - H1 → H2
- `src/components/Partners.tsx` - H1 → H2

---

### 2. **Alt Text para Imagens**
**Prioridade: ALTA**

**Verificar:**
- ✅ Hero background: "Profissionais GCDIGICONT"
- ✅ About image: "Equipe GCDIGICONT"
- ✅ Logo: "GCDIGICONT Logo"
- ❌ Partners logos: Faltam alt texts descritivos

**Ação:**
- Adicionar alt text descritivo para logos de parceiros

---

### 3. **Semantic HTML**
**Prioridade: MÉDIA**

**Melhorias:**
- Usar `<article>` para cards de serviços
- Usar `<aside>` para informações complementares
- Usar `<address>` para informações de contato
- Adicionar `aria-label` em botões e links importantes

---

### 4. **Meta Tags Adicionais**
**Prioridade: MÉDIA**

**Adicionar:**
```typescript
// layout.tsx
{
  author: "GCDIGICONT",
  generator: "Next.js",
  applicationName: "GCDIGICONT",
  referrer: "origin-when-cross-origin",
  creator: "GCDIGICONT",
  publisher: "GCDIGICONT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "código-de-verificação", // Quando disponível
  }
}
```

---

### 5. **Sitemap Dinâmico**
**Prioridade: MÉDIA**

**Problema:**
- Sitemap estático com data fixa (2025-10-22)

**Solução:**
- Criar `src/app/sitemap.ts` para geração dinâmica
- Atualizar lastmod automaticamente

---

### 6. **Breadcrumbs**
**Prioridade: BAIXA**

**Adicionar:**
- Breadcrumbs nas páginas /privacidade e /termos
- Structured data para breadcrumbs

---

### 7. **Local SEO**
**Prioridade: ALTA**

**Melhorias:**
- Adicionar LocalBusiness schema além do ProfessionalService
- Incluir endereço físico (se disponível)
- Adicionar horário de funcionamento
- Criar página específica para cada cidade atendida (futuro)

---

### 8. **Content Optimization**
**Prioridade: MÉDIA**

**Melhorias:**
- Adicionar mais conteúdo textual nas seções
- Criar FAQ section (Schema.org FAQPage)
- Adicionar blog/artigos (futuro)
- Melhorar densidade de palavras-chave naturalmente

---

### 9. **Performance Optimization**
**Prioridade: MÉDIA**

**Verificar:**
- Lazy loading de imagens (já implementado)
- Minificação CSS/JS (Next.js automático)
- Compressão de imagens
- Cache headers
- CDN para assets estáticos

---

### 10. **Mobile Optimization**
**Prioridade: ALTA**

**Verificar:**
- ✅ Viewport configurado
- ✅ Design responsivo
- ✅ Touch targets adequados
- Testar Core Web Vitals

---

### 11. **Internal Linking**
**Prioridade: MÉDIA**

**Melhorias:**
- Links contextuais entre seções
- Footer com links para todas as páginas
- Anchor links descritivos

---

### 12. **Social Media Integration**
**Prioridade: BAIXA**

**Adicionar:**
- Links para redes sociais no footer
- Botões de compartilhamento
- Atualizar URLs do Open Graph se necessário

---

## 📊 Priorização de Implementação

### Fase 1 - Crítico (Esta Sprint)
1. ✅ Corrigir estrutura de headings (H1-H6)
2. ✅ Adicionar alt text faltante
3. ✅ Implementar LocalBusiness schema
4. ✅ Criar sitemap dinâmico

### Fase 2 - Importante (Próxima Sprint)
5. Adicionar semantic HTML
6. Implementar breadcrumbs
7. Adicionar meta tags adicionais
8. Otimizar conteúdo textual

### Fase 3 - Melhorias (Futuro)
9. Criar seção FAQ
10. Implementar blog
11. Páginas por cidade
12. A/B testing de meta descriptions

---

## 🎯 Métricas de Sucesso

**Monitorar:**
- Google Search Console
  - Impressões
  - CTR
  - Posição média
  - Erros de indexação

- Google Analytics
  - Tráfego orgânico
  - Taxa de rejeição
  - Tempo na página
  - Conversões

- Core Web Vitals
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)

- PageSpeed Insights
  - Score mobile/desktop
  - Oportunidades de melhoria

---

## 🔍 Ferramentas Recomendadas

1. **Google Search Console** - Monitoramento de indexação
2. **Google Analytics 4** - Já implementado
3. **Lighthouse** - Auditoria de performance e SEO
4. **Screaming Frog** - Análise técnica de SEO
5. **Ahrefs/SEMrush** - Análise de keywords e backlinks
6. **Schema.org Validator** - Validação de structured data

---

## 📝 Notas Importantes

- Todas as alterações devem manter a experiência do usuário
- Testar em múltiplos dispositivos após cada mudança
- Monitorar rankings antes e depois das alterações
- Documentar todas as mudanças para análise futura
