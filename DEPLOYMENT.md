# HouseRx Deployment Guide

For a non-technical founder. End-to-end. Roughly 90 minutes from zero to live website.

---

## What you need before starting

1. A laptop (Mac or Windows)
2. A credit/debit card (for domain purchase, roughly ₹1,000/year)
3. A Gmail account
4. 90 minutes of uninterrupted time

---

## Step 1 — Update site config (10 minutes)

Open the project folder. Find the file `lib/site.ts`. Open it in any text editor (Notepad, TextEdit, VS Code).

Replace these placeholder values with your real details:

```typescript
phone: '+91 98765 43210',           // your real phone number
phoneLink: '+919876543210',         // same number, no spaces or dashes
whatsapp: '919876543210',           // same number, no + sign
email: 'hello@houserx.in',          // your real email
url: 'https://houserx.in',          // your real domain (decide this now)
```

**Save the file.**

---

## Step 2 — Install Node.js (10 minutes)

You only do this once on your laptop.

1. Go to **https://nodejs.org**
2. Click the **LTS** (recommended) download button
3. Run the installer, accept defaults
4. Open Terminal (Mac) or Command Prompt (Windows)
5. Type: `node --version` and press Enter
6. If you see a version number (like `v20.11.0`), you're done

---

## Step 3 — Test the site locally (10 minutes)

1. Open Terminal/Command Prompt
2. Navigate to the project folder. Example:
   ```
   cd /Users/yourname/Downloads/houserx-site
   ```
3. Type: `npm install` and press Enter. Wait 1-2 minutes.
4. Type: `npm run dev` and press Enter
5. Open your browser, go to **http://localhost:3000**
6. You should see the homepage

Click through every page. Make sure everything works. Press `Ctrl+C` in the terminal to stop.

---

## Step 4 — Create a GitHub account and upload code (15 minutes)

GitHub is where your code lives. Vercel reads from GitHub to deploy.

1. Go to **https://github.com/signup**
2. Sign up with your Gmail
3. Verify email
4. Click the **+** icon top-right → **New repository**
5. Repository name: `houserx-website`
6. Set to **Public** (free tier requires this)
7. Do NOT initialize with README (we already have one)
8. Click **Create repository**

GitHub will show you commands. Use these:

In your Terminal (still in the project folder):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/houserx-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username. You'll be prompted for credentials — use a GitHub Personal Access Token (Settings → Developer Settings → Tokens → Generate new token).

---

## Step 5 — Deploy to Vercel (10 minutes)

1. Go to **https://vercel.com/signup**
2. Click **Continue with GitHub**
3. Authorize Vercel to access your repositories
4. On the Vercel dashboard, click **Add New → Project**
5. Find your `houserx-website` repo, click **Import**
6. Leave all settings as default. Click **Deploy**
7. Wait 1-2 minutes. Done.

Vercel gives you a free URL like `houserx-website.vercel.app`. Your site is live.

---

## Step 6 — Buy your domain (15 minutes)

Best registrar in India for a `.in` domain: **GoDaddy India** or **Namecheap**.

1. Go to **https://www.godaddy.com** or **https://www.namecheap.com**
2. Search for `houserx.in`
3. Add to cart. Roughly ₹800-1,200 for the first year.
4. Skip add-ons (email hosting, privacy protection, etc. — you don't need them yet)
5. Pay with card or UPI
6. Save the login credentials carefully

Recommended: also buy `houserx.com` if available (₹1,000/year, defensive purchase).

---

## Step 7 — Connect domain to Vercel (15 minutes)

1. In Vercel, open your project → **Settings → Domains**
2. Type `houserx.in` → Click **Add**
3. Vercel shows you two DNS records (A record and CNAME). Keep this tab open.

4. In a new tab, log in to GoDaddy (or your registrar)
5. Go to **My Products → Domains → DNS**
6. Delete any existing A records and CNAME records pointing to "parked" or default GoDaddy pages
7. Add the records Vercel showed you:
   - **A record:** Host = `@`, Points to = the IP Vercel gave you
   - **CNAME:** Host = `www`, Points to = `cname.vercel-dns.com`
8. Save

Wait 10-60 minutes for DNS to propagate worldwide.

Back in Vercel, after a few minutes you'll see a green checkmark next to `houserx.in`. Live.

---

## Step 8 — Verify everything works (10 minutes)

Open `https://houserx.in` in an incognito window. Check:

- [ ] Homepage loads
- [ ] All navigation links work (Services, How It Works, etc.)
- [ ] WhatsApp button opens WhatsApp with the right phone number
- [ ] Phone button opens dialer with the right number
- [ ] Sample Report page shows mock content correctly
- [ ] FAQ accordions expand and collapse
- [ ] Footer links work
- [ ] Mobile version: open on your phone, check that bottom CTA bar appears

---

## How to update the website later

Once everything is set up, updates are simple:

1. Open the project folder on your laptop
2. Edit the file you want to change (e.g., `app/page.tsx` for homepage)
3. Save
4. In Terminal, run:
   ```
   git add .
   git commit -m "Updated homepage copy"
   git push
   ```
5. Vercel automatically detects the push and deploys within 60 seconds

The site is live in under a minute every time you push.

---

## Common edits

| What you want to change | Which file to edit |
|---|---|
| Phone number, email, address | `lib/site.ts` |
| Homepage hero text | `app/page.tsx` |
| Service pricing | `app/services/buyer-audit/page.tsx` (and the other 2 service pages) |
| FAQ questions | `app/faq/page.tsx` |
| Founder bio | `app/about/page.tsx` |
| Privacy policy | `app/privacy/page.tsx` |
| Add a new page | Create a new folder in `app/`, add a `page.tsx` |

---

## Monthly maintenance checklist

Spend 30 minutes a month:

- [ ] Click through every page in an incognito window
- [ ] Test all WhatsApp links from your phone
- [ ] Check Google Search Console for any errors
- [ ] Review FAQ — add new questions customers actually asked
- [ ] Update testimonials section (once you have customers)
- [ ] Check that your phone number is still correct everywhere

---

## When to invest in upgrades

Stay simple until you cross specific milestones:

- **At 30+ paid customers:** Add real testimonials (Why HouseRx page)
- **At 50+ paid customers:** Add a blog (`app/blog/` folder) for SEO
- **At 100+ paid customers:** Add a customer dashboard for repeat audits
- **At 200+ paid customers:** Add online booking calendar
- **At 500+ paid customers:** Consider a marketing-led redesign

Until then, the site you just deployed is enough.

---

## What this costs you per year

- Domain (`.in`): ₹800-1,200
- Vercel hosting: ₹0 (free tier covers up to 100GB bandwidth/month)
- Custom email (Google Workspace): ₹125/user/month optional (₹1,500/year for `hello@houserx.in`)

**Total: roughly ₹2,500-3,000 per year.** That's it.

---

## If something goes wrong

1. **Site is down:** Check `https://vercel.com/status` — likely a temporary Vercel issue, will resolve in minutes.
2. **WhatsApp link doesn't work:** Re-check `lib/site.ts` — common error is leaving the + sign in the `whatsapp` value.
3. **Domain not resolving:** DNS can take up to 48 hours to propagate fully. Be patient.
4. **Want to roll back a change:** In Vercel dashboard, go to Deployments → find the previous working one → click "Promote to Production."

For anything else, the Vercel community and Stack Overflow have answers to almost every issue you'll hit.
