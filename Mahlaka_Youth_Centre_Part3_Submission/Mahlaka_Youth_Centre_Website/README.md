# Mahlaka Youth Centre — Part 3 Website Project

**Student:** Mahle Bhobhi  
**Student number:** ST10402247  
**Project:** Mahlaka Youth Centre  
**Part:** 3 — website improvements, JavaScript functionality, SEO and forms

## 1. Project overview
This project develops the Part 2 Mahlaka Youth Centre website. The original green, gold and cream visual identity, page content, responsive image assets and four-page structure have been retained. Part 3 adds interactive features, searchable programme content, SEO metadata, enquiry/contact form validation and supporting documentation.

## 2. Files in this project
- `index.html` — home page and interactive image gallery/lightbox
- `about.html` — centre information and accessible FAQ accordion
- `programmes.html` — programme cards with live keyword filtering
- `contact.html` — contact form with HTML5 validation and email preparation
- `enquiry.html` — programme/volunteer/sponsorship enquiry form
- `style.css` — shared responsive styles and Part 3 component styles
- `script.js` — mobile navigation, accordion, gallery, search and form processing
- `assets/` — local responsive images reused from Part 2
- `robots.txt` and `sitemap.xml` — basic search engine crawler support
- `README.md` — project explanation, changelog and testing checklist

## 3. Section 1 — Working through feedback from Part 2
The Part 2 site provided a responsive foundation with Home, About, Programmes and Contact pages. For this continuation, the site has been improved by:
- extending the navigation to include a dedicated enquiry page;
- improving accessibility with a skip link, accessible labels and live status messages;
- adding an accordion to make information easier to browse;
- adding a gallery with a lightbox image viewer;
- adding programme search/filter functionality;
- improving contact form validation and adding an enquiry form;
- adding page-specific SEO metadata and crawler files.

**Feedback note:** The lecturer's individual feedback sheet was not included in the supplied ZIP. The changelog therefore records the improvements made for Part 3 and does not invent comments or corrections supposedly received from the lecturer. Add any exact lecturer feedback here if it was supplied separately.

## 4. Section 2 — Functionality and JavaScript enhancements

### 2.1 Interactive elements
- **FAQ accordion:** On the About page, each question opens and closes its answer. `aria-expanded` and `aria-controls` communicate state to assistive technology.
- **Gallery/lightbox:** The Home page gallery opens a larger image in a dialog. It can be closed using the close control, clicking the backdrop or pressing Escape.
- **Mobile navigation:** The menu opens/closes and updates its expanded state.
- **CSS transitions:** Cards and gallery images use transitions to provide visual feedback.

### 2.2 Dynamic content and search
The Programmes page includes a search input. JavaScript checks the text and search keywords for each programme card as the visitor types. Non-matching cards are hidden, and a helpful message appears when no results match. This is client-side filtering of the programme content already included in the project; it does not fetch records from a server or database.

## 5. Section 3 — Search Engine Optimisation (SEO)

### 3.1 On-page SEO
- Unique descriptive title and meta description on each page.
- Relevant meta keywords included as supplementary metadata (modern search engines may ignore this tag).
- Clear page heading structure, with one main H1 and supporting H2/H3 headings.
- Descriptive image alt text and meaningful local image filenames.
- Descriptive page filenames and internal links between pages.
- Responsive layout and mobile-friendly navigation.
- Semantic HTML elements and a skip-to-content link.

### 3.2 Off-page SEO
Recommended promotion actions:
1. Share the official website link on the centre's verified social media accounts.
2. Ask legitimate community partners, schools and youth organisations to link to the website where appropriate.
3. Keep organisation name and contact information consistent across approved local directories.
4. Publish useful programme updates that community organisations may choose to reference.

No backlinks or social media accounts have been created by this student project. These are recommendations to complete when the organisation has official accounts and a live domain.

### 3.3 Technical SEO
- `robots.txt` allows normal crawling and points to the sitemap.
- `sitemap.xml` lists the five website pages.
- Images are local and responsive; CSS uses responsive layouts and avoids large external libraries.
- Use HTTPS when the site is published on a real hosting provider.

**Publishing note:** Replace `https://www.example.com/` in `robots.txt` and `sitemap.xml` with the final published domain before deployment. These files cannot provide live SEO benefits until the website is hosted publicly.

## 6. Section 4 — Form functionality and validation

### Contact form
The Contact page collects name, email, optional phone number, reason for contact and message. Required fields and email format are checked by HTML5. JavaScript calls the browser's validity check and prepares an email addressed to `info@mahlakayouthcentre.org`.

### Enquiry form
The new Enquiry page collects name, email, phone number, enquiry type, programme of interest and a message. It uses required fields, minimum/maximum lengths, email validation and a phone-number pattern. On valid submission it prepares an email with all submitted fields.

### Important technical limitation
This is a static HTML/CSS/JavaScript website and has no server-side application or email API. The forms use a `mailto:` link to open the visitor's configured email application. The visitor must review and press Send. Reliable automatic delivery, database storage and AJAX submission require a server or trusted form-processing service; these are not falsely represented as implemented.

## 7. Section 5 — GitHub repository and version control
The original Part 2 repository reference was:
https://github.com/mahlebhobhi/Youth_center.git

After reviewing and testing the final files, upload/replace the project files in that repository and commit regularly. Suggested commit messages:
- `Part 3: add programme search and FAQ accordion`
- `Part 3: add gallery lightbox and enquiry form`
- `Part 3: improve SEO metadata and documentation`

The project ZIP itself does not create GitHub commits. Push the completed folder to the repository using GitHub Desktop or Git commands.

## 8. Changelog
| Version | File/area | Change made | Purpose |
|---|---|---|---|
| Part 2 baseline | HTML pages | Retained Home, About, Programmes and Contact content | Preserve original project identity |
| Part 3 | All pages | Added page-specific title, description, keywords, author and robots metadata | Improve on-page SEO |
| Part 3 | All pages | Added skip link and main-content target | Improve keyboard accessibility |
| Part 3 | `about.html`, `script.js` | Added interactive FAQ accordion | Allow visitors to reveal answers when needed |
| Part 3 | `index.html`, `script.js` | Added gallery and dialog lightbox | Improve image browsing |
| Part 3 | `programmes.html`, `script.js` | Added live search/filter and no-results message | Help visitors find relevant programmes |
| Part 3 | `enquiry.html` | Added enquiry form for programmes, volunteering and sponsorship | Meet enquiry-form requirement |
| Part 3 | `contact.html`, `script.js` | Added optional phone field and mailto email preparation | Improve contact handling |
| Part 3 | `style.css` | Added accessible focus, gallery, accordion, search and lightbox styling | Consistent responsive design |
| Part 3 | `robots.txt`, `sitemap.xml` | Added crawler guidance and page list | Support technical SEO |
| Part 3 | `README.md` | Added rubric mapping, limitations, changelog and test checklist | Document work for assessment |

## 9. Testing checklist
Test locally by opening `index.html` in a modern browser.

| Test | Expected result | Status |
|---|---|---|
| Home/About/Programmes/Contact/Enquiry navigation | Correct page opens | To test in browser |
| Mobile menu | Opens and closes on small screens | To test in browser |
| FAQ accordion | Each answer expands/collapses | To test in browser |
| Gallery | Clicking a thumbnail opens a larger image | To test in browser |
| Lightbox close | Close button, Escape and backdrop work | To test in browser |
| Programme search | Cards filter while typing | To test in browser |
| No search match | No-results message appears | To test in browser |
| Contact form | Empty/invalid required fields are rejected | To test in browser |
| Enquiry form | Invalid phone/email and short message are rejected | To test in browser |
| Email preparation | Email app opens with recipient, subject and form data | Depends on device email setup |
| Responsive layout | No horizontal overflow at desktop/tablet/mobile | To test in browser |
| SEO files | Sitemap and robots file contain the pages | Check before publishing |

## 10. References
- MDN Web Docs. “HTML forms” — https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
- MDN Web Docs. “Constraint validation” — https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- MDN Web Docs. “HTML dialog element” — https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
- MDN Web Docs. “Using the Fetch API” — https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (background reference; no server fetch is claimed in this static project)
- Google Search Central. “SEO Starter Guide” — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central. “Build and submit a sitemap” — https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## 11. Final submission reminder
Before submission, replace the example domain in the sitemap/robots file if a real domain is available, test the website in a browser, capture any screenshots required by the lecturer, and push the final files to the GitHub repository. Confirm any real contact details with the organisation; the supplied Part 2 telephone number and email are retained as project contact details.
