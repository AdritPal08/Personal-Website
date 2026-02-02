# Adrit Pal — Personal Portfolio Website

A high-end, scroll-driven personal portfolio website showcasing my work as an **AI Solutions Engineer & Data Analyst**. Built with Next.js 14, Framer Motion, and Tailwind CSS, featuring cinematic scrollytelling animations and a modern dark aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-FF0055?logo=framer)

---

## ✨ Features

### Core Experience
- **Scroll-Linked Image Sequence Animation** — Cinematic hero section that scrubs through 89 image frames as you scroll, rendered on HTML5 Canvas for optimal performance.
- **Parallax Text Overlays** — Smooth fade-in/out text sections with motion effects layered over the scrolling animation.
- **Apple-Style Pill Navigation** — Floating, glassmorphic navbar with animated active-state indicators.

### Content Pages
| Page | Description |
|------|-------------|
| **Home** | Scrollytelling hero + Featured Projects section |
| **About** | Professional summary, bio, languages, and education |
| **Skills** | 12 categorized skill blocks with purpose descriptions |
| **Experience** | Vertical timeline of roles with detailed achievements |
| **Projects** | 6 detailed GenAI project cards (Problem → Solution → Features → Stack) |
| **Dashboards** | 9 Power BI & Looker Studio reports with insights preview |
| **Contact** | Contact information and social links |

### Design & UX
- **Dark Theme** — Premium dark aesthetic with `#121212` background
- **Glassmorphism** — Backdrop blur effects on navigation and cards
- **Responsive Design** — Mobile-first approach with adaptive layouts
- **Smooth Animations** — Framer Motion transitions throughout

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Rendering** | HTML5 Canvas (for image sequence) |
| **Icons** | React Icons |
| **Font** | Inter (Google Fonts) |

---

## 📁 Project Structure

```
Personal Website/
├── app/                      # Next.js App Router pages
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── dashboards/
│   │   └── page.tsx          # Dashboards & Reports page
│   ├── experience/
│   │   └── page.tsx          # Experience timeline page
│   ├── projects/
│   │   └── page.tsx          # GenAI Projects page
│   ├── skills/
│   │   └── page.tsx          # Technical Skills page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with Navbar
│   └── page.tsx              # Home page with scrollytelling
│
├── components/               # Reusable React components
│   ├── Navbar.tsx            # Apple-style pill navigation
│   ├── Overlay.tsx           # Parallax text overlays for hero
│   ├── Projects.tsx          # Project cards grid (legacy)
│   └── ScrollyCanvas.tsx     # Canvas-based scroll animation
│
├── lib/
│   └── data.ts               # Centralized content data (resume, projects, etc.)
│
├── public/
│   └── sequence/             # 89 PNG frames for scroll animation
│       ├── frame_00_delay-0.067s.png
│       ├── frame_01_delay-0.066s.png
│       └── ... (89 frames total)
│
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdritPal08/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 📝 Customization

### Updating Content

All website content is managed in a single file: **`lib/data.ts`**

```typescript
// Update your personal info
export const personalInfo = {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ...
};

// Update your skills
export const skills = {
    programming: {
        title: "Programming & Querying",
        items: ["Python", "SQL", "JavaScript"],
        purpose: "Use for: ..."
    },
    // ...
};

// Update your experience, projects, dashboards, etc.
```

### Updating the Scroll Animation

1. Place your image sequence in `public/sequence/`
2. Images should be named sequentially (e.g., `frame_00.png`, `frame_01.png`, ...)
3. Supported formats: PNG, WebP
4. The component auto-detects and sorts frames numerically

### Styling

- **Colors**: Modify `tailwind.config.ts` or use inline Tailwind classes
- **Animations**: Adjust Framer Motion configs in component files
- **Layout**: Edit page components in `app/` directory

---

## 📊 Content Overview

### Projects Featured
| Project | Description | Tech |
|---------|-------------|------|
| AI Medical Chatbot (RAG) | Reference-backed Q&A with vector search | LangChain, FAISS, Streamlit |
| AI Medical Chatbot (Vision & Voice) | Multimodal healthcare assistant | Gradio, FastAPI, ElevenLabs |
| AI Data Assistant | Natural language data analysis | LangChain, Pandas, Plotly |
| Smart Web Scraper | Prompt-based web scraping | BeautifulSoup, Selenium, Pydantic |
| AI Newsletter Generator | Multi-agent news summarization | CrewAI, Serper API |
| AI Travel Planner | Automated trip planning | CrewAI, LangChain, Streamlit |

### Dashboards
- 4 Looker Studio reports (Sales, AR Aging, P&L, Cash Flow)
- 5 Power BI dashboards (HR, Crypto, Personal Finance, Supply Chain, Trade)

---

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contact

**Adrit Pal**  
AI Solutions Engineer & Data Analyst

- **GitHub**: [github.com/AdritPal08](https://github.com/AdritPal08)
- **LinkedIn**: [linkedin.com/in/adrit-pal](https://www.linkedin.com/in/adrit-pal)
- **Location**: Kolkata, India

---

<p align="center">
  Built with ❤️ using Next.js, Framer Motion & Tailwind CSS
</p>
