# Tutorial Completo: Google Search Console

## O que é o Google Search Console?

O Google Search Console (anteriormente conhecido como Google Webmaster Tools) é uma ferramenta gratuita do Google que permite monitorar, manter e solucionar problemas relacionados à presença do seu site nos resultados de pesquisa do Google.

### Benefícios principais:
- Verificar se o Google consegue encontrar e rastrear seu site
- Corrigir problemas de indexação
- Ver quais consultas de pesquisa levam ao seu site
- Analisar o desempenho do site nas buscas
- Receber alertas sobre problemas críticos
- Enviar sitemaps para indexação mais rápida

---

## Passo 1: Acessar o Google Search Console

1. Acesse [https://search.google.com/search-console](https://search.google.com/search-console)
2. Faça login com sua conta Google (preferencialmente a mesma usada no Google Analytics)
3. Se for seu primeiro acesso, você verá a tela de boas-vindas

---

## Passo 2: Adicionar a Propriedade (Site)

### Opção A: Propriedade de Domínio (Recomendado)

Esta opção rastreia todas as versões do seu domínio (www, não-www, http, https e subdomínios).

1. Clique em **"Adicionar propriedade"**
2. Selecione **"Domínio"**
3. Digite: `gcdigicont.com.br` (sem http/https)
4. Clique em **"Continuar"**

**Verificação por DNS:**
1. O Google fornecerá um registro TXT
2. Copie o código fornecido (ex: `google-site-verification=XXXXX`)
3. Acesse o painel da Hostinger
4. Vá em **Domínios** > **gcdigicont.com.br** > **DNS/Nameservers**
5. Adicione um novo registro:
   - **Tipo:** TXT
   - **Nome/Host:** @ (ou deixe vazio)
   - **Valor/Conteúdo:** Cole o código de verificação
   - **TTL:** 3600 (ou padrão)
6. Salve as alterações
7. Aguarde 5-15 minutos (pode levar até 48h em alguns casos)
8. Volte ao Search Console e clique em **"Verificar"**

### Opção B: Prefixo de URL

Se preferir uma verificação mais simples:

1. Selecione **"Prefixo de URL"**
2. Digite: `https://gcdigicont.com.br`
3. Escolha um dos métodos de verificação:

**Método 1: Tag HTML (Mais Fácil)**

1. Copie a meta tag fornecida (ex: `<meta name="google-site-verification" content="XXXXX">`)
2. No arquivo `src/app/layout.tsx`, atualize a seção `verification`:
```typescript
verification: {
  google: "XXXXX", // Substitua pelo seu código
},
```
3. Faça deploy do site
4. Clique em **"Verificar"** no Search Console

**Método 2: Arquivo HTML**

1. Baixe o arquivo `googleXXXXX.html` fornecido
2. Coloque na pasta `public/` do projeto
3. Faça deploy
4. Clique em **"Verificar"**

---

## Passo 3: Enviar o Sitemap

Após a verificação ser bem-sucedida:

1. No menu lateral, clique em **"Sitemaps"**
2. No campo "Adicionar um novo sitemap", digite: `sitemap.xml`
3. Clique em **"Enviar"**
4. O status deve mudar para **"Enviado"** e depois **"Êxito"**

**Dica:** O sitemap do GCDIGICONT está em: `https://gcdigicont.com.br/sitemap.xml`

---

## Passo 4: Configurações Importantes

### 4.1 Solicitar Indexação de Páginas

Para indexar páginas específicas rapidamente:

1. Use a **"Ferramenta de inspeção de URL"** no topo
2. Cole a URL que deseja indexar (ex: `https://gcdigicont.com.br/`)
3. Clique em **"Testar URL ativa"**
4. Se estiver tudo certo, clique em **"Solicitar indexação"**

### 4.2 Verificar Cobertura do Índice

1. Vá em **"Indexação"** > **"Páginas"**
2. Verifique:
   - **Páginas indexadas:** Páginas que aparecem no Google
   - **Páginas não indexadas:** Páginas excluídas ou com problemas
3. Investigue erros como:
   - "Página com redirecionamento"
   - "Não encontrada (404)"
   - "Bloqueada por robots.txt"

### 4.3 Configurar Alertas por Email

1. Clique no ícone de engrenagem (Configurações)
2. Em **"Preferências de email"**, ative:
   - Problemas críticos
   - Melhorias disponíveis
   - Notificações mensais de desempenho

---

## Passo 5: Monitoramento Contínuo

### Métricas importantes para acompanhar:

**Desempenho (Relatório de Pesquisa)**
- **Cliques:** Quantas vezes usuários clicaram no seu site
- **Impressões:** Quantas vezes seu site apareceu nos resultados
- **CTR (Taxa de Cliques):** Porcentagem de impressões que resultaram em cliques
- **Posição média:** Posição média nas buscas

**Filtros úteis:**
- Por consulta (palavras-chave)
- Por página
- Por país
- Por dispositivo (desktop/mobile)
- Por período

### Consultas para monitorar (GCDIGICONT):

1. "contabilidade belo horizonte"
2. "contabilidade digital bh"
3. "contador mei bh"
4. "abrir empresa belo horizonte"
5. "gcdigicont"

---

## Passo 6: Core Web Vitals

O Google usa Core Web Vitals como fator de ranqueamento:

1. Vá em **"Experiência"** > **"Core Web Vitals"**
2. Verifique as métricas para mobile e desktop:
   - **LCP (Largest Contentful Paint):** < 2.5s (bom)
   - **INP (Interaction to Next Paint):** < 200ms (bom)
   - **CLS (Cumulative Layout Shift):** < 0.1 (bom)

3. Se houver problemas, use o PageSpeed Insights para diagnóstico:
   - [https://pagespeed.web.dev/](https://pagespeed.web.dev/)

---

## Passo 7: Links e Referências

### Verificar Backlinks

1. Vá em **"Links"** no menu lateral
2. Veja:
   - **Sites com mais links externos:** Quem está linkando para você
   - **Principais páginas de destino:** Suas páginas mais linkadas
   - **Principais textos de link:** Anchor texts usados

### Links Internos

- Verifique se todas as páginas importantes têm links internos
- Páginas órfãs (sem links) têm dificuldade de indexação

---

## Passo 8: Segurança e Ações Manuais

### Verificar problemas de segurança:

1. Vá em **"Segurança e ações manuais"**
2. Verifique se não há:
   - Malware detectado
   - Conteúdo hackeado
   - Ações manuais (penalidades)

**Importante:** Se houver qualquer alerta aqui, resolva imediatamente!

---

## Checklist de Verificação

Após configurar o Search Console, verifique:

- [ ] Propriedade verificada com sucesso
- [ ] Sitemap enviado e processado
- [ ] Pelo menos a página inicial indexada
- [ ] Sem erros críticos na cobertura
- [ ] Core Web Vitals sem problemas graves
- [ ] Nenhuma ação manual ou problema de segurança
- [ ] Alertas por email configurados

---

## Manutenção Mensal Recomendada

1. **Semanalmente:**
   - Verificar se há novos erros de indexação
   - Monitorar posições das principais palavras-chave

2. **Mensalmente:**
   - Analisar relatório de desempenho completo
   - Verificar Core Web Vitals
   - Revisar páginas não indexadas
   - Comparar desempenho com mês anterior

3. **Trimestralmente:**
   - Revisar estratégia de palavras-chave
   - Atualizar sitemap se houver novas páginas
   - Verificar backlinks e oportunidades de link building

---

## Recursos Úteis

- [Central de Ajuda do Search Console](https://support.google.com/webmasters)
- [Guia de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Blog do Google Search Central](https://developers.google.com/search/blog)
- [Ferramenta de Teste de Dados Estruturados](https://search.google.com/test/rich-results)

---

## Problemas Comuns e Soluções

### "Página não está no Google"
- Verifique se não está bloqueada no robots.txt
- Confirme que não há `noindex` na página
- Solicite indexação manualmente

### "Erros de rastreamento"
- Verifique se o servidor está respondendo
- Confirme que não há redirecionamentos em loop
- Verifique se a página existe (não é 404)

### "Sitemap não processado"
- Verifique se a URL do sitemap está correta
- Confirme que o formato XML está válido
- Verifique se todas as URLs no sitemap são acessíveis

---

*Última atualização: Janeiro 2026*
*Baseado nas melhores práticas do Google Search Console*
