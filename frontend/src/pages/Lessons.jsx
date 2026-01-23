import React from "react";
import { lessonsContents } from "../constants/contents.js";
import { Button } from "@/components/ui/button"

function Lessons() {
  return (
    <section className="space-y-6 p-10">
      <p>Explore lessons designed to build your knowledge step by step.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {lessonsContents.map((lesson, index) => (
          <div
            className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs flex flex-col"
            key={index}
          >
            <a href="#">
              <img className="rounded-base" src={lesson.icon} alt={lesson.name} />
            </a>

            <a href="#" className="mt-4">
              <h5 className="text-2xl font-semibold tracking-tight text-heading">
                {lesson.name}
              </h5>
            </a>

            <p className="text-body mt-2 mb-4 flex-1 ">{lesson.description}</p>
            <Button variant="secondary" className="p-5">Study Now!</Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Lessons;
