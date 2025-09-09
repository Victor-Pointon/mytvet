"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Calendar,
  FileText,
  CreditCard,
} from "lucide-react";

// Sample exam papers data - in a real app, this would come from a database
const examPapers = {
  "applied-management": {
    name: "Applied Management",
    description:
      "Applied Management past exam papers and memos for TVET, FET Colleges in South Africa.",
    levels: [
      {
        level: "N2",
        years: [
          {
            year: 2024,
            papers: [
              { term: "Apr", hasPaper: true, hasMemo: true },
              { term: "Jun", hasPaper: true, hasMemo: true },
              { term: "Nov", hasPaper: false, hasMemo: false },
            ],
          },
          {
            year: 2023,
            papers: [
              { term: "Apr", hasPaper: true, hasMemo: true },
              { term: "Jun", hasPaper: true, hasMemo: true },
              { term: "Nov", hasPaper: true, hasMemo: true },
            ],
          },
          {
            year: 2022,
            papers: [
              { term: "Apr", hasPaper: true, hasMemo: true },
              { term: "Jun", hasPaper: true, hasMemo: true },
              { term: "Nov", hasPaper: true, hasMemo: true },
            ],
          },
        ],
      },
      {
        level: "N3",
        years: [
          {
            year: 2024,
            papers: [
              { term: "Apr", hasPaper: true, hasMemo: true },
              { term: "Jun", hasPaper: true, hasMemo: true },
              { term: "Nov", hasPaper: false, hasMemo: false },
            ],
          },
          {
            year: 2023,
            papers: [
              { term: "Apr", hasPaper: true, hasMemo: true },
              { term: "Jun", hasPaper: true, hasMemo: true },
              { term: "Nov", hasPaper: true, hasMemo: true },
            ],
          },
        ],
      },
    ],
  },
};

export default function SubjectPage({ params }: { params: { slug: string } }) {
  const [selectedLevel, setSelectedLevel] = useState("N2");
  const subjectData = examPapers[params.slug as keyof typeof examPapers];

  if (!subjectData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Subject Not Found
          </h1>
          <Link href="/business" className="text-blue-600 hover:text-blue-800">
            Back to Business Subjects
          </Link>
        </div>
      </div>
    );
  }

  const currentLevel = subjectData.levels.find(
    (l) => l.level === selectedLevel
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center mb-4">
            <Link
              href="/business"
              className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Business
            </Link>
            <span className="text-gray-400">/</span>
            <span className="ml-4 text-gray-600">{subjectData.name}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {subjectData.name}
          </h1>
          <p className="text-gray-600">{subjectData.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Levels
              </h3>
              <div className="space-y-2">
                {subjectData.levels.map((level) => (
                  <button
                    key={level.level}
                    onClick={() => setSelectedLevel(level.level)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLevel === level.level
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {level.level}
                  </button>
                ))}
              </div>

              {/* Bulk Download */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Bulk Download
                </h4>
                <p className="text-sm text-blue-800 mb-3">
                  Download all papers for {subjectData.name} {selectedLevel}
                </p>
                <div className="text-lg font-bold text-blue-900 mb-3">
                  R360.00
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Purchase All Papers
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentLevel ? (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {subjectData.name} {selectedLevel}
                  </h2>

                  <div className="space-y-6">
                    {currentLevel.years.map((year) => (
                      <div
                        key={year.year}
                        className="border border-gray-200 rounded-lg"
                      >
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {year.year}
                          </h3>
                        </div>

                        <div className="p-4">
                          <div className="grid grid-cols-3 gap-4">
                            {year.papers.map((paper) => (
                              <div key={paper.term} className="text-center">
                                <div className="text-sm font-medium text-gray-900 mb-2">
                                  {paper.term}
                                </div>
                                <div className="space-y-2">
                                  {paper.hasPaper ? (
                                    <button className="w-full bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center justify-center">
                                      <FileText className="w-4 h-4 mr-1" />
                                      Question Paper
                                    </button>
                                  ) : (
                                    <div className="w-full bg-gray-200 text-gray-500 px-3 py-2 rounded text-sm flex items-center justify-center">
                                      <FileText className="w-4 h-4 mr-1" />
                                      Not Available
                                    </div>
                                  )}

                                  {paper.hasMemo ? (
                                    <button className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center">
                                      <Download className="w-4 h-4 mr-1" />
                                      Memo
                                    </button>
                                  ) : (
                                    <div className="w-full bg-gray-200 text-gray-500 px-3 py-2 rounded text-sm flex items-center justify-center">
                                      <Download className="w-4 h-4 mr-1" />
                                      Not Available
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Study Tips */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Study Tips for {subjectData.name}
                  </h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>
                      • Practice with past papers to understand exam format
                    </li>
                    <li>• Review memos to learn correct answer techniques</li>
                    <li>• Focus on topics that appear frequently</li>
                    <li>• Time yourself to improve exam speed</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No papers available
                </h3>
                <p className="text-gray-600">
                  Papers for this level are not yet available.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
