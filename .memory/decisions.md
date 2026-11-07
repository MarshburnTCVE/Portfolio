# Decisions

Architectural commitments made in this project.


- [portfolio-content-integrity] Portfolio content must be verified before ship: real project URLs and a real resume PDF asset are required, not placeholder links.

- [resume-preview-modal] The portfolio Resume control opens a native modal dialog with an embedded PDF preview and a direct download link.

- [certificate-pdf-preview] Certificate titles with a pdf field open the same native PDF preview dialog pattern as Resume; certificates without a pdf remain external links.
