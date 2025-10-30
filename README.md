# MERN Stack Developer Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, designed specifically for MERN Stack developers.

## Features

- **Modern Design**: Clean, professional aesthetic inspired by shadcn/ui
- **Dark/Light Mode**: Fully functional theme toggle with system preference detection
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Command Palette**: Quick navigation with ⌘K shortcut
- **Interactive Components**: Smooth animations and hover effects
- **SEO Optimized**: Semantic HTML and proper meta tags

## Sections

- **Hero**: Professional introduction with call-to-action buttons
- **About**: Detailed background and expertise overview
- **Skills**: Categorized technical skills with progress indicators
- **Experience**: Professional timeline with detailed descriptions
- **Projects**: Showcase of MERN stack applications
- **Education**: Academic background and certifications
- **Contact**: Contact form and social links

## Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Command Palette**: Custom implementation with cmdk
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mern-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Replace the following placeholders throughout the codebase:

- `[YOUR NAME HERE]` - Your full name
- `[YOUR-EMAIL]` - Your email address
- `[YOUR-PHONE]` - Your phone number
- `[YOUR-CITY], [YOUR-COUNTRY]` - Your location
- `[YOUR-GITHUB-USERNAME]` - Your GitHub username
- `[YOUR-LINKEDIN-USERNAME]` - Your LinkedIn username
- `[YOUR-TWITTER-USERNAME]` - Your Twitter username
- `[YOUR-RESUME-LINK]` - Link to your resume
- `[COMPANY NAME]` - Your current/previous companies
- `[UNIVERSITY NAME]` - Your university name
- `[BOOTCAMP NAME]` - Bootcamp name (if applicable)

### Styling

The portfolio uses Tailwind CSS with custom CSS variables for theming. You can customize:

- Colors in `tailwind.config.js`
- CSS variables in `src/index.css`
- Component-specific styles in individual component files

### Content

Update the following sections with your information:

1. **Hero Section**: Update the headline and professional summary
2. **About Section**: Modify the description and features
3. **Skills Section**: Add/remove skills and adjust proficiency levels
4. **Experience Section**: Update job history and descriptions
5. **Projects Section**: Replace with your actual projects
6. **Education Section**: Update academic background
7. **Contact Section**: Update contact information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms

The built files can be deployed to any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

## Support

If you have any questions or need help customizing the portfolio, please open an issue or contact me directly.

---

Built with ❤️ using React and Tailwind CSS