# Math for Grade 10 · מתמטיקה ליונתן

A static website for building and publishing HTML pages that teach mathematics to Grade 10 students in Israel at the **4-unit** (4 יחידות לימוד) level.

The pages are in English (left-to-right). Each unit has an explanation page (ideas, formulas, worked examples, common mistakes and short exercises) and a workbook of graded practice questions with full, hidden solutions.

## Purpose and working rules

These come from the project instructions:

1. The project is a site builder for working on and publishing HTML files that teach mathematics to Grade 10 students in Israel at the 4-unit level.
2. Every document is saved as a file in `D:\Sites\math10gradeenglish`.
3. `index.html` is the reference page for all documents on the site.
4. Whenever a file is saved, a link to it is added to `index.html`, with a description of the file.
5. All documents are written in English.
6. The site at `D:\Sites\math11grade` is the reference for layout and visual style.

> **Note:** the pages built so far (the topic list and units 01–20) follow the **5-unit** Grade 10 syllabus. The 4-unit Grade 10 syllabus covers integrated geometry (coordinates, lines, midsegments, similarity), pre-calculus (functions, transformations), an introduction to calculus, basic trigonometry, and statistics and probability. The existing pages need to be adapted to it, or 4-unit pages added.

## Viewing the site

Open `index.html` in any browser. No build step, server or installation is needed. Formulas are typeset by [KaTeX](https://katex.org), which loads from a CDN, so an internet connection is needed for them to display.

## Contents

| Area | Files | Description |
|---|---|---|
| Reference | `curriculum-grade10-5units.html` | The Grade 10 (5-unit) topic list: 6 subject areas in 20 teaching units, with links to every page |
| Analytic geometry | `01-straight-line-*`, `02-systems-and-circle-*` | The straight line; systems of equations and the circle |
| Introduction to functions | `03-polynomial-functions-*` … `06-composition-and-inverse-*` | Polynomials, non-polynomial functions, transformations, composition and inverse |
| Differential calculus | `07-derivative-concept-*` … `13-optimization-*` | The derivative, rules, investigating polynomials, tangents and antiderivatives, rational and root functions, optimization |
| Trigonometry | `14-trigonometric-functions-*` … `16-sine-and-cosine-laws-*` | The unit circle, trigonometric equations, area formula and the laws of sines and cosines |
| Euclidean geometry | `17-deductive-reasoning-*` … `20-proportion-and-similarity-*` | Proof skills, loci and triangle centres, the circle, similarity |

Each unit `NN-<name>` has two files: `NN-<name>-explanation.html` and `NN-<name>-workbook.html` (30 questions).

## Structure of a page

**Explanation page:** links to the main page and the workbook, contents, numbered sections with explanations, formulas, graphs and worked examples, a "Common mistakes" section, and 8 "Check yourself" exercises.

**Workbook:** three levels, Level A (basic), Level B (practice) and Level C (exam level), 10 questions each. Every solution is hidden in a `<details>` element ("Show solution"). A toolbar shows or hides all solutions, and an "I solved it" tick box per question keeps a progress count in the browser. When a page is printed, all solutions are shown.

## Folder layout

```
math10gradeenglish/
├── index.html                        home page: list of all documents
├── curriculum-grade10-5units.html    topic list (5-unit syllabus)
├── NN-<name>-explanation.html        explanation page of unit NN (01–20)
├── NN-<name>-workbook.html           workbook of unit NN
├── assets/
│   ├── site.css                      shared style (light and dark mode)
│   └── site.js                       KaTeX rendering, show/hide all solutions, progress ticks
└── README.md
```

## Adding a new page

1. Name the file `NN-<short-name>-explanation.html` or `NN-<short-name>-workbook.html`.
2. Copy the `<head>` of an existing page: it links `assets/site.css`, `assets/site.js` and KaTeX.
3. Write math in LaTeX inside `\( … \)` (inline) or `\[ … \]` (display). Inside formulas write `\lt` and `\gt` instead of `<` and `>`.
4. Add the page to `index.html`, with a short description, in the section of its subject area.

## Note

The division of topics between exam papers (שאלונים) and school years may change. Check against the current Ministry of Education syllabus.
