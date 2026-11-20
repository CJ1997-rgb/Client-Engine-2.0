# Stamfort Technical Solutions website

Company website for Stamfort Technical Solutions, Bengaluru: industrial machine repair and maintenance.
Built with Next.js and hosted on Vercel. Every push to `main` goes live.

## Where things are

- `lib/site.js`: all the words, lists, contact details and photo captions. Edit this to change content.
- `app/page.js`: the page layout (sections: hero, services, work, about, contact)
- `app/EnquiryForm.js`: the enquiry form
- `app/globals.css`: colours, fonts and layout
- `public/work/`: project photos (compressed)

## Enquiry form

When a visitor sends the form:
1. WhatsApp opens with their details filled in, addressed to the client's number. The visitor taps Send.
2. If `NEXT_PUBLIC_WEB3FORMS_KEY` is set in Vercel, the details are also emailed to the client via Web3Forms.
   Get the key at web3forms.com using the client's email address. The key is public by design.
