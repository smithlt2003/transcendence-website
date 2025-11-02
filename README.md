# Transcendence Website (Next.js + Tailwind)

A production-ready starter for mytranscendence.org with:
- Landing page for Providers & DCS
- Provider Packages section + comparison table
- Contact & Apply forms with resume upload
- Next.js API route using Resend for email delivery

## Quick Start
1. Install dependencies
   ```bash
   npm install
   ```

2. Add environment variable
   - Create `.env.local` in the project root:
     ```
     RESEND_API_KEY=your_resend_key_here
     ```

3. Run locally
   ```bash
   npm run dev
   ```

4. Deploy (Vercel recommended)
   - Create a new project from this folder
   - Add `RESEND_API_KEY` in Project Settings → Environment Variables

## Notes
- Forms post to `/api/form` and send emails to `talent@mytranscendence.org`.
- File uploads (resume) allowed: PDF, DOC, DOCX up to 5MB.
- UI components are minimal local equivalents of Button/Card.
- Replace the logo placeholder in the navbar with your brand asset.
