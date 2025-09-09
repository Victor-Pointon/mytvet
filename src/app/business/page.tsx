"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, BookOpen, Download } from "lucide-react";

// Sample business subjects data - in a real app, this would come from a database
const businessSubjects = [
  {
    id: 1,
    name: "Applied Management",
    slug: "applied-management",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 2,
    name: "Financial Accounting",
    slug: "financial-accounting",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 3,
    name: "Marketing Management",
    slug: "marketing-management",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 4,
    name: "Business Management",
    slug: "business-management",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 5,
    name: "Computer Practice",
    slug: "computer-practice",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 6,
    name: "Communication",
    slug: "communication",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 7,
    name: "Economics",
    slug: "economics",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 8,
    name: "Mercantile Law",
    slug: "mercantile-law",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 9,
    name: "Cost and Management Accounting",
    slug: "cost-and-management-accounting",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 10,
    name: "Information Processing",
    slug: "information-processing",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 11,
    name: "Public Administration",
    slug: "public-administration",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 12,
    name: "Personnel Management",
    slug: "personnel-management",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 13,
    name: "Sales Management",
    slug: "sales-management",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 14,
    name: "Labour Relations",
    slug: "labour-relations",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
  {
    id: 15,
    name: "Legal Practice",
    slug: "legal-practice",
    levels: ["N2", "N3", "N4", "N5", "N6"],
  },
];

export default function BusinessPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredSubjects = businessSubjects.filter((subject) => {
    const matchesSearch = subject.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLevel =
      selectedLevel === "all" || subject.levels.includes(selectedLevel);
    return matchesSearch && matchesLevel;
  });

  const levels = ["all", "N2", "N3", "N4", "N5", "N6"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Business Subjects (Nated)
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Browse past exam papers and memos for Business subjects from 2015
              to 2024
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for a subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLevel === level
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {level === "all" ? "All Levels" : level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredSubjects.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No subjects found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {subject.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {subject.levels.map((level) => (
                        <span
                          key={level}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                  <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0" />
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/business/${subject.slug}`}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    View Papers
                  </Link>

                  <div className="text-xs text-gray-500 text-center">
                    Papers available from 2015-2024
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About Business Subjects
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our Business subject collection covers all Nated levels (N2-N6)
              with comprehensive exam papers and memos. Each subject includes
              question papers and answer memos from multiple exam sessions,
              helping you prepare thoroughly for your TVET examinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
