# Personal Website Refresh Plan

## Summary
Rebuild the site as a clean, static, single-page professional profile for Tapajit Dey, hosted directly from GitHub Pages and testable with a local static server. The page uses the current site, CV, LinkedIn PDF, and `researcher_profile.md` as source material, with a broader professional tone covering SEI-CMU software architecture research, empirical software engineering, open source/InnerSource, mining software repositories, and applied generative AI work.

## Implemented Direction
- Replace the old Bootstrap/CDN-heavy homepage with semantic static HTML, local CSS, and minimal local JavaScript.
- Use sections for Bio, Upcoming, Research, Projects, Teaching & Mentoring, Selected Publications, Publication Records, Recognitions, and Service.
- Use the CMU email address as the primary email, obfuscated so the raw address is not present in public HTML source.
- Omit phone numbers from the public webpage.
- Mention that Tapajit co-supervised Robert Healy through doctoral completion.
- Keep the CV PDF as the primary full-record document and place it under the profile image.
- Archive legacy/generated pages rather than deleting them.

## Preservation Notes
- Presentation, video, preprint, DOI, and BibTeX links from the previous publication page are preserved in the homepage Publication Records table where they had clear archival value.
- The old generated publication and miscellaneous pages are preserved under `archive/legacy/`.
- `files/pubs.bib` and `files/misc.bib` are preserved.

## Local Testing
Run this from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Checks
- Verify the page loads locally with no build step.
- Check desktop and mobile layouts.
- Verify all section anchors work.
- Verify the CV link opens `files/Tapajit_Dey_CV.pdf`.
- Verify the publication records preserve old slides/video links.
- Verify Robert Healy's graduation is mentioned in mentoring/supervision.
- Verify the raw email address and phone numbers are absent from public HTML source.

The address should be assembled at runtime rather than written as a literal string.
