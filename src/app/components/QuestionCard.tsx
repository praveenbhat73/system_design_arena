"use client";

import { useRouter } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuestionCard({ question }: any) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/arena/${question.id}`)}
      className="cursor-pointer bg-gray-900 hover:bg-gray-800 transition rounded-xl p-6 border border-gray-800"
    >
      <h2 className="text-xl font-semibold mb-2">
        {question.title}
      </h2>
      <p className="text-gray-400 text-sm">
        {question.description}
      </p>

      <div className="mt-4 text-sm text-indigo-400">
        ▶ Start Design
      </div>
    </div>
  );
}
