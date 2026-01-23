import React from "react";
import { examContents } from "../constants/contents";
import { Button } from "@/components/ui/button";

function Exams() {
  return (
    <section className="space-y-6 p-10">
      <p>Explore entrance exams and scholarships in the Philippines.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {examContents.map((exam, index) => (
          <div
            key={index}
            className="bg-neutral-primary-soft max-w-sm p-6 border border-default rounded-base shadow-xs flex flex-col"
          >
            <h5 className="text-2xl font-semibold tracking-tight text-heading mb-2">
              {exam.name}
            </h5>

            <p className="text-body mt-2 mb-4 flex-1">{exam.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {exam.coverage?.map((subject, i) => (
                <span
                  key={i}
                  className="bg-neutral-secondary-medium text-heading text-sm font-medium px-3 py-1 rounded-full"
                >
                  {subject}
                </span>
              ))}
            </div>

            <Button variant="secondary">Take Now!</Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Exams;
