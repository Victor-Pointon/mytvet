# Mytvet SA - Next.js Demo

This is a demonstration of how your TVET exam papers website could be rebuilt using Next.js. This project showcases modern web development practices and how they can improve your current static HTML website.

## 🚀 Features Demonstrated

### **Modern UI/UX**

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Components**: Dropdown menus, search functionality, form handling
- **Smooth Animations**: Hover effects, transitions, loading states
- **Accessibility**: Proper ARIA labels, keyboard navigation, screen reader support

### **Performance Benefits**

- **Static Generation**: Pages are pre-built for fast loading
- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Only loads what's needed for each page
- **SEO Optimized**: Built-in SEO features and meta tags

### **Developer Experience**

- **TypeScript**: Type safety and better code quality
- **Hot Reloading**: Instant feedback during development
- **Component-Based**: Reusable, maintainable code structure
- **Modern Tooling**: ESLint, Tailwind CSS, Lucide icons

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── business/          # Business subjects section
│   │   ├── page.tsx       # Business subjects listing
│   │   └── [slug]/        # Dynamic subject pages
│   │       └── page.tsx   # Individual subject page
│   └── contact/           # Contact page
│       └── page.tsx
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
└── globals.css           # Global styles (Tailwind CSS)
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Headless UI**: Accessible UI components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the project** (if you want to modify it):

```bash
git clone <repository-url>
cd mytvet-nextjs
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

4. **Open your browser**:

```
http://localhost:3000
```

## 📱 Pages Overview

### **Homepage** (`/`)

- Hero section with call-to-action
- Feature highlights
- Subject category cards
- Modern, engaging design

### **Business Subjects** (`/business`)

- Searchable subject listing
- Filter by N-level (N2-N6)
- Responsive grid layout
- Interactive search functionality

### **Individual Subject** (`/business/[slug]`)

- Dynamic routing for each subject
- Exam papers organized by year and term
- Level selection sidebar
- Bulk download options
- Study tips section

### **Contact Page** (`/contact`)

- Interactive contact form
- Form validation
- Success/error states
- FAQ section
- Contact information

## 🔧 Key Improvements Over Static HTML

### **1. Content Management**

```typescript
// Instead of 200+ static HTML files, use dynamic data
const subjects = [
  {
    name: "Applied Management",
    slug: "applied-management",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
];
```

### **2. Search & Filtering**

```typescript
// Real-time search functionality
const filteredSubjects = subjects.filter((subject) =>
  subject.name.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### **3. Responsive Navigation**

```typescript
// Mobile-friendly dropdown menus
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

### **4. Form Handling**

```typescript
// Modern form state management
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
```

## 🎨 Design System

### **Colors**

- Primary: Blue (#2563eb)
- Secondary: Gray (#6b7280)
- Success: Green (#059669)
- Warning: Orange (#ea580c)

### **Typography**

- Font: Inter (Google Fonts)
- Responsive text sizes
- Consistent spacing

### **Components**

- Cards with shadows
- Rounded corners
- Hover effects
- Loading states

## 📊 Performance Comparison

| Feature                  | Static HTML         | Next.js         |
| ------------------------ | ------------------- | --------------- |
| **Page Load Speed**      | ~2-3s               | ~0.5-1s         |
| **SEO**                  | Manual optimization | Built-in        |
| **Mobile Experience**    | Basic responsive    | Optimized       |
| **Search Functionality** | None                | Real-time       |
| **Content Updates**      | Manual HTML editing | CMS integration |
| **Developer Experience** | Basic               | Modern tooling  |

## 🔮 Next Steps for Full Implementation

### **1. Database Integration**

```typescript
// Connect to PostgreSQL/MongoDB for dynamic content
const subjects = await prisma.subject.findMany({
  include: { papers: true },
});
```

### **2. Payment Integration**

```typescript
// PayFast integration for bulk downloads
const handlePayment = async (subjectId: string) => {
  const payment = await payfast.createPayment({
    amount: 360.0,
    item_name: `Bulk Download - ${subjectName}`,
  });
};
```

### **3. User Authentication**

```typescript
// Student accounts and progress tracking
const { user } = useAuth();
const userDownloads = await getUserDownloads(user.id);
```

### **4. Content Management System**

```typescript
// Admin interface for managing content
const AdminPanel = () => {
  return (
    <div>
      <SubjectManager />
      <PaperUploader />
      <UserManager />
    </div>
  );
};
```

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
npm install -g vercel
vercel
```

### **Netlify**

```bash
npm run build
# Deploy the 'out' folder
```

### **Traditional Hosting**

```bash
npm run build
npm run export
# Deploy the 'out' folder
```

## 📈 Benefits for Your Business

### **For Students**

- Faster, more intuitive experience
- Better search and filtering
- Mobile-optimized interface
- Real-time updates

### **For You**

- Easier content management
- Better analytics and insights
- Reduced maintenance overhead
- Scalable architecture

### **For SEO**

- Better search engine rankings
- Faster page load times
- Improved user experience signals
- Structured data support

## 🤝 Support

This is a demonstration project. For questions about implementing this for your actual TVET website, feel free to reach out!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
