# Swetha Maruthaiyan | Portfolio Website

A responsive portfolio built with plain HTML5, CSS3 and JavaScript. It needs no build step and no dependencies, so it can be hosted for free on GitHub Pages.

## Folder structure

```
portfolio-site/
  index.html                          Page content and structure
  css/style.css                       All styling (colors and fonts are at the top)
  js/script.js                        Menu, scroll effects, copy email, GitHub link
  assets/Swetha_Maruthaiyan_Resume.pdf   File used by the Download Resume buttons
  README.md
```

## Common edits

- **Add your GitHub link:** open `js/script.js` and set `github` to your profile address, for example `"https://github.com/your-username"`. The GitHub card in the Contact section appears automatically.
- **Update your resume:** replace `assets/Swetha_Maruthaiyan_Resume.pdf` with the new file and keep the same file name.
- **Change colors or fonts:** edit the variables inside `:root` at the top of `css/style.css`.
- **Edit text:** every section in `index.html` is marked with a comment such as `<!-- ============ SKILLS ============ -->`.

## Publish for free with GitHub Pages

1. Create a free account at https://github.com if you do not have one.
2. Click **New repository**. Name it `portfolio` (or `your-username.github.io` for a shorter address). Set it to **Public** and click **Create repository**.
3. On the new repository page, click **uploading an existing file**. Drag in the contents of this folder: `index.html`, the `css`, `js` and `assets` folders. Click **Commit changes**.
4. Open **Settings**, then **Pages** in the left menu.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
6. Wait one to two minutes and refresh the Pages screen. Your website address appears at the top:
   - `https://your-username.github.io/portfolio/` for a repository named `portfolio`
   - `https://your-username.github.io/` for a repository named `your-username.github.io`
7. Add that address to your resume, LinkedIn profile and job applications.

To update the site later, open a file in the repository, click the pencil icon, edit it and commit. The site refreshes within a minute or two.

### Using Git on the command line instead

```bash
cd portfolio-site
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

Then follow steps 4 to 6 above.
