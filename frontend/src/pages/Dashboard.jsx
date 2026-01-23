import React from "react";
import { dashboardContents } from "../constants/contents";

function Dashboard() {
  return (
    <section className="h-full flex flex-col justify-center items-center p-5">
      <h1 className="text-2xl font-bold mb-2 text-center">
        Find the AI Tool That Boosts Your Learning
      </h1>
      <p className="text-center mb-6 ">
        Unlock your potential with AI-powered tools designed to help you excel
        academically and achieve your scholar goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {dashboardContents.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
