# SEO Setup Instructions

This document outlines the steps needed to complete the SEO optimization for GCDIGICONT.

## ✅ Completed Automatically

The following have been implemented in the codebase:

1. ✅ **Structured Data (Schema.org JSON-LD)** - Added to `src/app/layout.tsx`
2. ✅ **Updated Sitemap** - Fixed `public/sitemap.xml` (removed hash URLs, updated dates)
3. ✅ **Page Metadata** - Added to Privacy and Terms pages
4. ✅ **Viewport and Theme Color** - Configured in layout
5. ✅ **Manifest.json** - Created for PWA support
6. ✅ **Icon References** - Updated in metadata

---

## 📋 Manual Steps Required

### 1. Generate Favicon Files

You need to create the following favicon files from your existing logo:

**Required files to create:**
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png` (180x180)
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`

**How to generate them:**

**Option A: Using online tool (Recommended)**
1. Visit https://realfavicongenerator.net/
2. Upload your logo (preferably the `public/logo.png` or `public/logo-dark.png`)
3. Customize settings if needed
4. Download the generated files
5. Place them in the `public/` folder

**Option B: Using Canva/Figma**
1. Create designs with the following sizes: 16x16, 32x32, 180x180, 192x192, 512x512
2. Export as PNG
3. Name them according to the list above
4. Place them in the `public/` folder

---

### 2. Create Open Graph Image

Create a social sharing image for better appearance when your site is shared on social media.

**Required file:**
- `public/og-image.png` (1200x630 pixels)

**How to create it:**
1. Open the provided template: `og-image-template.html` in your browser
2. Use one of these methods:
   - **Screenshot**: Capture just the blue area (1200x630)
   - **DevTools**: Right-click the blue box → "Capture node screenshot"
   - **Custom design**: Use Canva/Figma to create a custom 1200x630px image
3. Save as `public/og-image.png`
4. Delete `og-image-template.html` after creating the image

**Design specifications:**
- Size: 1200x630 pixels
- Background color: #0e2b3a (dark blue)
- Accent color: #c79d4b (gold)
- Include logo and tagline

---

### 3. Update Contact Information

Edit `src/app/layout.tsx` and replace placeholder values in the structured data (around line 140):

```typescript
telephone: "+55-31-XXXX-XXXX",  // Replace with actual phone number
email: "contato@gcdigicont.com.br",  // Verify this is correct
```

Also update social media URLs (around line 225):
```typescript
sameAs: [
  "https://www.facebook.com/gcdigicont",     // Replace with actual URLs
  "https://www.instagram.com/gcdigicont",    // or remove if not available
  "https://www.linkedin.com/company/gcdigicont",
],
```

---

### 4. Google Search Console Setup

Since you already have Google Search Console configured:

1. **Get verification meta tag** (if not already verified):
   - Go to https://search.google.com/search-console
   - Select your property
   - Go to Settings → Verification
   - Copy the verification meta tag

2. **Add verification tag to layout.tsx** (if needed):
   ```typescript
   export const metadata: Metadata = {
     // ... existing metadata
     verification: {
       google: "your-verification-code-here",
     },
   }
   ```

3. **Submit sitemap**:
   - In Search Console, go to Sitemaps
   - Submit: `https://gcdigicont.com.br/sitemap.xml`

4. **Request indexing**:
   - In Search Console, go to URL Inspection
   - Enter your homepage URL
   - Click "Request Indexing"
   - Repeat for `/privacidade/` and `/termos/` pages

---

### 5. Update Environment Variables

Add the missing WhatsApp environment variable to your `.env` file and GitHub Secrets:

**Local (.env file):**
```bash
NEXT_PUBLIC_WHATSAPP_BUTTON_NUMBER=5531999999999  # Replace with actual number
```

**GitHub Secrets:**
Add to your repository settings → Secrets and variables → Actions:
- `NEXT_PUBLIC_WHATSAPP_BUTTON_NUMBER`: Your WhatsApp number in international format

**Update deployment workflow:**
Edit `.github/workflows/deploy.yml` and add the WhatsApp variable to the `env` section (lines 8-11 and 30-34):

```yaml
env:
  # ... existing variables
  NEXT_PUBLIC_WHATSAPP_BUTTON_NUMBER: ${{ secrets.NEXT_PUBLIC_WHATSAPP_BUTTON_NUMBER }}
```

---

### 6. Build and Deploy

After completing the above steps:

1. **Test locally:**
   ```bash
   yarn build
   yarn start
   ```

2. **Verify the build:**
   - Check that all images load correctly
   - Verify WhatsApp button works
   - Test metadata using browser DevTools

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: Add SEO optimizations and structured data"
   git push origin main
   ```

4. **Verify deployment:**
   - Wait for GitHub Actions to complete
   - Check your live site at https://gcdigicont.com.br
   - Test Open Graph preview: https://www.opengraph.xyz/

---

## 🔍 Validation Tools

After deployment, verify your SEO improvements:

### Schema.org Validation
- https://validator.schema.org/
- Paste your homepage URL
- Verify no errors in structured data

### Open Graph Testing
- https://www.opengraph.xyz/
- Test how your site appears when shared on social media

### Google Rich Results Test
- https://search.google.com/test/rich-results
- Test your homepage URL

### Mobile-Friendly Test
- https://search.google.com/test/mobile-friendly
- Verify mobile optimization

### PageSpeed Insights
- https://pagespeed.web.dev/
- Test performance and SEO score

---

## 📊 Expected Improvements

After implementing these changes, you should see:

1. ✅ **Better search rankings** - Structured data helps Google understand your business
2. ✅ **Enhanced search results** - May show rich snippets with services and ratings
3. ✅ **Improved social sharing** - Professional-looking cards on Facebook, Twitter, LinkedIn
4. ✅ **Local SEO boost** - Area served information helps with local searches
5. ✅ **Better mobile experience** - PWA capabilities with manifest.json
6. ✅ **Faster indexing** - Updated sitemap helps Google crawl efficiently

---

## 🆘 Troubleshooting

### Images not appearing in social shares
- Wait 24-48 hours for Facebook/LinkedIn to refresh cache
- Use the Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

### Favicons not updating
- Clear browser cache (Ctrl+Shift+Del)
- Hard refresh (Ctrl+Shift+R)
- Check files exist in `public/` folder

### Structured data errors
- Use Schema.org validator
- Ensure all URLs are absolute (include https://)
- Verify JSON syntax is correct

---

## 📝 Maintenance

**Monthly:**
- Check Google Search Console for errors
- Review search performance and rankings
- Update content if needed

**Quarterly:**
- Verify all links work
- Update sitemap lastmod dates if significant changes
- Review and update keywords based on search trends

**Yearly:**
- Update Privacy Policy and Terms if needed
- Review structured data for accuracy
- Check for new SEO best practices

---

## 🎯 Next Steps (Optional)

Consider these additional SEO enhancements:

1. **Blog/News Section** - Regular content improves SEO
2. **Google Business Profile** - Even for online businesses, helps local SEO
3. **Customer Reviews** - Add schema for aggregate ratings
4. **FAQ Section** - Implements FAQ schema for rich snippets
5. **Local Citations** - List on business directories (GuiaMais, Yelp, etc.)
6. **Backlinks** - Partner websites linking to gcdigicont.com.br
7. **Core Web Vitals** - Optimize for loading speed and user experience

---

For questions or issues, refer to:
- Next.js SEO docs: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Schema.org types: https://schema.org/ProfessionalService
- Google Search Central: https://developers.google.com/search
