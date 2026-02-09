# Pranav Bhat - Portfolio Website

A professional, responsive portfolio website showcasing my skills and experience as a Full Stack Developer with 8+ years of experience.

## 🌟 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling and mobile-friendly hamburger menu
- **Sections Include**:
  - About Me
  - Professional Experience (Timeline view)
  - Technical Skills
  - Featured Projects
  - Contact Information

## 🚀 Quick Start

### Option 1: View Locally

1. Open `index.html` in your web browser
2. That's it! No build process required.

### Option 2: Use Live Server (Recommended for development)

If you're using VS Code:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📝 Customization

### Step 1: Update Personal Information

Open `index.html` and update the following sections with your information:

1. **Header/Hero Section** (around line 30-50):
   - Your name
   - Job title
   - Short description
   - Social media links (GitHub, LinkedIn, Email, Phone)

2. **About Section** (around line 62-75):
   - Update the paragraph with your personal bio

3. **Experience Section** (around line 81-140):
   - Update company names, job titles, dates, and responsibilities
   - Add or remove timeline items as needed

4. **Skills Section** (around line 146-200):
   - Update technical skills to match your expertise
   - Add or remove skill tags

5. **Projects Section** (around line 208-280):
   - Update project names, descriptions, and technologies
   - Add links to GitHub repos and live demos
   - You can add project images by replacing the placeholder divs

6. **Contact Section** (around line 288-310):
   - Update email, phone, and location
   - Update social media links

### Step 2: Add Your Resume PDF (Optional)

1. Export your resume as a PDF named `resume.pdf`
2. Place it in the same directory as `index.html`
3. The "Download Resume" button will now work

### Step 3: Customize Colors (Optional)

Open `style.css` and modify the CSS variables at the top (around line 2-10):

```css
:root {
  --primary-color: #2563eb; /* Main brand color */
  --secondary-color: #1e40af; /* Secondary brand color */
  --accent-color: #3b82f6; /* Accent color */
  /* ... other colors */
}
```

## 🌐 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `your-username.github.io` (for personal site) or any name you prefer
4. Make it public
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Push Your Code to GitHub

Open a terminal in this project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `your-username` and `your-repo-name` with your actual GitHub username and repository name.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for deployment
7. Your site will be available at: `https://your-username.github.io/your-repo-name/`

If you named your repo `your-username.github.io`, your site will be at: `https://your-username.github.io/`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎨 Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Font Awesome Icons

## 📄 File Structure

```
my-resume/
│
├── index.html              # Main HTML file
├── style.css               # Styles and animations
├── script.js               # Interactive functionality
├── README.md               # This file
├── resume.pdf              # Your resume (add this)
└── PranavBhat-fullstack-8-year.docx  # Original resume
```

## ✅ Checklist Before Publishing

- [ ] Updated all personal information in index.html
- [ ] Added resume.pdf file
- [ ] Updated social media links
- [ ] Tested on different screen sizes
- [ ] Checked all links work correctly
- [ ] Reviewed all content for typos
- [ ] Added project screenshots (optional)
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages
- [ ] Tested live site

## 🔧 Advanced Customization

### Adding Project Images

Replace the placeholder divs in the project cards:

```html
<!-- Replace this: -->
<div class="project-placeholder">
  <i class="fas fa-project-diagram"></i>
</div>

<!-- With this: -->
<img src="path/to/your/image.jpg" alt="Project Name" />
```

### Adding More Sections

You can add more sections by following the existing pattern:

```html
<section id="new-section" class="section">
  <div class="container">
    <h2 class="section-title">Section Title</h2>
    <!-- Your content here -->
  </div>
</section>
```

Don't forget to add a link in the navigation!

## 📞 Support

If you need help or have questions, feel free to:

- Open an issue on GitHub
- Reach out via the contact information on your site

## 📜 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio!

---

**Good luck with your portfolio! 🚀**
