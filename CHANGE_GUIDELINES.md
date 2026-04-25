# Change Guidelines

This site is intentionally static. Most routine updates can be made by editing `index.html` directly and testing with a local static server.

## Common Updates

- **Bio or top-level text:** edit the `About` section in `index.html`. Keep links in the bio because this text is often reused for talks and event programs.
- **Upcoming roles and accepted work:** edit the `Upcoming` section. Use this for current-year and next-year service roles and accepted papers that are not yet fully published.
- **Awards and evidence:** edit the `Recognitions` section. Preserve evidence links when available, even if the link is only to a conference page or announcement.
- **Teaching and mentoring:** edit the `Teaching & Mentoring` section. Prefer full course and supervision records over summaries because this site is an authoritative source for those details.
- **Projects and funding:** edit the `Projects` section. Include funding bodies, years, amounts, and collaborator context when public and appropriate.
- **Publications and talks:** edit both `Selected Publications` and the `Publication Records` table when adding a major item. The records table is the durable place for DOI, preprint, slides, video, and BibTeX links.

## Email Address

The public email is assembled at runtime by `assets/js/site.js`. Do not write the raw email address into HTML, Markdown, or comments. Use the split `data-user`, `data-domain`, and `data-tld` attributes on the email link instead.

## Publication Archive

Older generated pages are preserved under `archive/legacy/`. Do not delete them casually; they contain historical BibTeX, slides, videos, and preprint links.

When adding a publication-record row, use this pattern:

```html
<tr>
  <td>Title of work</td>
  <td>Venue or talk series, Month Year</td>
  <td><a href="...">DOI</a> <a href="...">Slides</a> <a href="...">Video</a></td>
</tr>
```

Omit unavailable links rather than adding placeholders.

## Local Testing

Run from the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Before committing, check:

```bash
rg "raw-email-pattern|raw-phone-pattern" .
```

Also verify that local links resolve and the CV opens from `files/Tapajit_Dey_CV.pdf`.
