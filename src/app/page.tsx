import Link from "next/link";
import { BookOpen, Download, Search, Users } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Past Exam Papers",
      description:
        "Access thousands of past exam papers and memos from 2015 to 2024",
    },
    {
      icon: Download,
      title: "Easy Downloads",
      description:
        "Download individual papers or bulk packages for complete subjects",
    },
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Find exactly what you need with our advanced search functionality",
    },
    {
      icon: Users,
      title: "Student Community",
      description: "Join thousands of students preparing for their TVET exams",
    },
  ];

  const subjectCategories = [
    {
      name: "Business (Nated)",
      href: "/business",
      description: "Accounting, Management, Marketing, and more",
      count: "70+ Subjects",
      color: "bg-blue-500",
    },
    {
      name: "Engineering (Nated)",
      href: "/engineering",
      description: "Electrical, Mechanical, Civil Engineering",
      count: "60+ Subjects",
      color: "bg-green-500",
    },
    {
      name: "NCV Business",
      href: "/ncv-business",
      description: "National Certificate Vocational Business",
      count: "50+ Subjects",
      color: "bg-purple-500",
    },
    {
      name: "NCV Engineering",
      href: "/ncv-engineering",
      description: "National Certificate Vocational Engineering",
      count: "40+ Subjects",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TVET Past Exam Papers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your trusted source for South African TVET and FET college exam
              papers and memos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/business"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Papers
              </Link>
              <Link
                href="/guidance"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Study Guidance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Mytvet SA?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to excel in your TVET exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find exam papers for your specific field of study
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjectCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {category.count}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  Browse Papers
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Exams?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who trust Mytvet SA for their exam
            preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Studying Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
