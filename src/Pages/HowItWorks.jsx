import React from "react";

const HowItWorks = () => {
  return (
    <section className="shadow-xl  py-16 px-6 md:px-12 lg:px-20 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className=" p-8 rounded-lg shadow-xl shadow-slate-400">
            <h3 className="text-2xl font-semibold  mb-4">Step 1: Donate</h3>
            <p className=" text-lg">
              Start by donating any surplus food you have. Simply fill out the
              donation form and we'll connect you with those in need.
            </p>
          </div>
          {/* Step 2 */}
          <div className=" p-8 rounded-lg shadow-xl shadow-slate-400">
            <h3 className="text-2xl font-semibold  mb-4">Step 2: Pickup</h3>
            <p className=" text-lg">
              Our team will arrange for a pickup at your convenient location.
              You don’t have to worry about anything!
            </p>
          </div>
          {/* Step 3 */}
          <div className="p-8 rounded-lg shadow-xl shadow-slate-400">
            <h3 className="text-2xl font-semibold mb-4">Step 3: Share</h3>
            <p className=" text-lg">
              Your donated food will be shared with those in need, ensuring that
              every meal makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
