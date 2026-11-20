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
2. The details are also emailed via Web3Forms, using the access key in `lib/site.js`
   (public by design). The receiving email address is set in the Web3Forms dashboard.
