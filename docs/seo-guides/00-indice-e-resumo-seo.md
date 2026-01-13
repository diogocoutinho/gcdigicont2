# Guia Completo de SEO - GCDIGICONT

## Índice dos Guias

1. [Google Search Console](./01-google-search-console.md) - Configuração e monitoramento
2. [Google Business Profile](./02-google-business-profile.md) - SEO local e Google Maps
3. [Bing e Outras Plataformas](./03-bing-e-outras-plataformas.md) - Bing, diretórios e redes sociais

---

## Resumo das Otimizações Realizadas

### Data da Otimização: Janeiro 2026

Este documento resume todas as melhorias de SEO implementadas no site GCDIGICONT.

---

## 1. Melhorias Técnicas de SEO

### 1.1 Sitemap.xml Atualizado
- **Arquivo:** `/public/sitemap.xml`
- **Mudança:** Data de `lastmod` atualizada para data correta
- **Benefício:** Google reconhece conteúdo atualizado

### 1.2 Robots.txt Otimizado
- **Arquivo:** `/public/robots.txt`
- **Mudanças:**
  - Adicionados bloqueios para diretórios desnecessários (`/api/`, `/_next/`, `/static/`)
  - Configurado crawl-delay para diferentes bots
  - Comentários explicativos adicionados
- **Benefício:** Melhor gerenciamento do crawl budget

### 1.3 Preconnect e DNS Prefetch
- **Arquivo:** `/src/app/layout.tsx`
- **Mudanças:**
  - Adicionado `preconnect` para Google Tag Manager e Analytics
  - Adicionado `dns-prefetch` para recursos externos
- **Benefício:** Carregamento mais rápido de scripts externos

---

## 2. Meta Tags Otimizadas

### 2.1 Title Tag
- **Antes:** `GCDIGICONT - Contabilidade Digital`
- **Depois:** `GCDIGICONT - Contabilidade Digital em Belo Horizonte`
- **Template:** `%s | GCDIGICONT` (para páginas internas)
- **Benefício:** Inclui localização para SEO local

### 2.2 Description
- **Antes:** Genérica
- **Depois:** Inclui palavras-chave específicas, regimes tributários e cidades atendidas
- **Benefício:** Maior relevância para buscas locais

### 2.3 Novas Meta Tags Adicionadas
```typescript
authors: [{ name: "GCDIGICONT" }]
creator: "GCDIGICONT"
publisher: "GCDIGICONT"
category: "Contabilidade"
classification: "Serviços Contábeis"
```

### 2.4 Geo Tags (SEO Local)
```typescript
"geo.region": "BR-MG"
"geo.placename": "Belo Horizonte"
"geo.position": "-19.9167;-43.9345"
"ICBM": "-19.9167, -43.9345"
```

### 2.5 Robots Tag Avançada
```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
}
```

### 2.6 Placeholder para Verificação
```typescript
verification: {
  // google: "codigo-apos-configurar",
  // other: { "msvalidate.01": "codigo-bing" }
}
```

---

## 3. Dados Estruturados (Schema.org)

### 3.1 Schemas Implementados

| Schema | Tipo | Propósito |
|--------|------|-----------|
| AccountingService | LocalBusiness | SEO local principal |
| WebSite | Website | Informações do site |
| Organization | Organization | Dados da empresa |
| BreadcrumbList | Navigation | Navegação estruturada |
| FAQPage | FAQ | Rich snippets de perguntas |

### 3.2 Schema AccountingService (Principal)

Inclui:
- Nome e descrição completa
- Logo com dimensões
- Múltiplas imagens
- Telefone e email
- Endereço estruturado
- Coordenadas geográficas
- 6 cidades atendidas
- Horário de funcionamento
- 7 tipos de serviços
- 4 planos com especificação de preço em BRL
- Links de redes sociais
- Ponto de contato estruturado

### 3.3 Schema FAQPage

6 perguntas frequentes implementadas:
1. Serviços oferecidos
2. Cidades atendidas
3. Diferencial da contabilidade digital
4. Abertura de empresa
5. Planos disponíveis
6. Formas de contato

**Benefício:** Pode aparecer como rich snippet nas buscas

### 3.4 Sanitização de JSON-LD

Implementada função `sanitizeJsonLd()` para prevenir vulnerabilidades XSS:
```typescript
function sanitizeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
```

---

## 4. Open Graph e Twitter Cards

### 4.1 Open Graph Otimizado
- Title com localização
- Description otimizada para compartilhamento
- País adicionado (`countryName: "Brazil"`)
- Imagem com tipo especificado
- Alt text melhorado

### 4.2 Twitter Cards
- Card type: `summary_large_image`
- Creator tag adicionada
- Alt text na imagem

---

## 5. Performance

### 5.1 Recursos de Performance Adicionados
- `preconnect` para domínios externos
- `dns-prefetch` para resolução DNS antecipada

### 5.2 Recomendações Pendentes
- [ ] Converter imagens para WebP
- [ ] Comprimir `hero-bg.jpg` (253KB)
- [ ] Comprimir `og-image.png` (310KB)
- [ ] Implementar lazy loading explícito

---

## 6. Checklist de Ações Pendentes

### Configurações Externas Necessárias:

#### Google Search Console
- [ ] Criar conta/propriedade
- [ ] Verificar site (DNS, meta tag ou arquivo)
- [ ] Enviar sitemap
- [ ] Obter código de verificação
- [ ] Adicionar código ao `layout.tsx`

#### Google Business Profile
- [ ] Criar ou reivindicar perfil
- [ ] Verificar negócio
- [ ] Completar 100% do perfil
- [ ] Adicionar fotos
- [ ] Solicitar primeiras avaliações

#### Bing Webmaster Tools
- [ ] Importar do Google Search Console (ou configurar manualmente)
- [ ] Verificar site
- [ ] Enviar sitemap
- [ ] Configurar IndexNow (opcional)

#### Diretórios Locais
- [ ] TeleListas
- [ ] Apontador
- [ ] GuiaMais
- [ ] CRC-MG

#### Redes Sociais
- [ ] Atualizar links reais no Footer (substituir "#")
- [ ] Verificar consistência NAP

---

## 7. Monitoramento Recomendado

### Ferramentas Gratuitas:
1. **Google Search Console** - Desempenho nas buscas
2. **Google Analytics 4** - Comportamento do usuário (já configurado)
3. **Bing Webmaster Tools** - Ecossistema Microsoft
4. **PageSpeed Insights** - Core Web Vitals

### Métricas a Acompanhar:

| Métrica | Ferramenta | Frequência |
|---------|------------|------------|
| Impressões | Search Console | Semanal |
| Cliques | Search Console | Semanal |
| Posição média | Search Console | Semanal |
| Core Web Vitals | Search Console | Mensal |
| Avaliações | Google Business | Semanal |
| Conversões | Analytics | Semanal |

### Palavras-chave a Monitorar:
- "contabilidade belo horizonte"
- "contabilidade digital bh"
- "contador mei bh"
- "abrir empresa belo horizonte"
- "gcdigicont"
- "contabilidade simples nacional bh"

---

## 8. Arquivos Modificados

| Arquivo | Tipo de Mudança |
|---------|-----------------|
| `/public/sitemap.xml` | Data atualizada |
| `/public/robots.txt` | Otimização completa |
| `/src/app/layout.tsx` | Meta tags, schemas, performance |

---

## 9. Próximos Passos Recomendados

### Prioridade Alta (Fazer Agora):
1. Configurar Google Search Console
2. Criar/verificar Google Business Profile
3. Atualizar links de redes sociais no Footer

### Prioridade Média (Próximas 2 semanas):
1. Configurar Bing Webmaster Tools
2. Cadastrar em 3-5 diretórios principais
3. Otimizar imagens (WebP, compressão)

### Prioridade Baixa (Próximo mês):
1. Implementar rastreamento de eventos no GA4
2. Criar conteúdo adicional (blog/artigos)
3. Estratégia de link building
4. Monitorar e ajustar com base em dados

---

## 10. Recursos e Referências

### Documentação Oficial:
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org)
- [Bing Webmaster](https://www.bing.com/webmasters)

### Ferramentas de Teste:
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Validator](https://validator.schema.org)
- [PageSpeed Insights](https://pagespeed.web.dev)

### Guias Detalhados:
- [01-google-search-console.md](./01-google-search-console.md)
- [02-google-business-profile.md](./02-google-business-profile.md)
- [03-bing-e-outras-plataformas.md](./03-bing-e-outras-plataformas.md)

---

*Documento gerado em: Janeiro 2026*
*Versão: 1.0*
