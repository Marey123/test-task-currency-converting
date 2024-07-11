import React from "react";
import Layout from "../../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className=" text-gray-900">
        <section className="bg-gradient-info rounded-lg text-white p-6 mb-3">
          <h1 className="text-3xl font-bold">💰 Currency Converting App</h1>
          <p className="text-lg mt-2">Simplifying Global Transactions</p>
        </section>
        <div className="container bg-transparent mx-auto p-2">
          <section className="mb-8">
            <h2 className="text-2xl  font-bold mb-4">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="font-semibold text-xl">Real-Time Exchange Rates</h3>
                <p>
                  Stay informed with live exchange rates for over 150
                  currencies.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="font-semibold text-xl">User-Friendly Interface</h3>
                <p>Sleek and intuitive design for easy currency conversions.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="font-semibold text-xl">Historical Data</h3>
                <p>
                  Access historical exchange rates to analyze trends over time.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="font-semibold text-xl">Multi-Currency Support</h3>
                <p>Convert multiple currencies at once.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="font-semibold text-xl">Offline Mode</h3>
                <p>
                  Provides recent exchange rates even without an internet
                  connection.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="font-semibold text-xl">Currency Alerts</h3>
                <p>Set up notifications for your desired exchange rates.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="font-semibold text-xl">Comprehensive Calculator</h3>
                <p>
                  Built-in calculator for quick conversions and arithmetic
                  operations.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="font-semibold text-xl">Secure and Private</h3>
                <p>
                  State-of-the-art encryption and security protocols to protect
                  your data.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Benefits for Users</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold">Travelers</h3>
                <p>
                  Easily convert your home currency to the local currency of
                  your travel destination. Manage your budget more effectively
                  and avoid overpaying for goods and services.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold">Online Shoppers</h3>
                <p>
                  Compare prices from international retailers and ensure you're
                  getting the best deal. Save money by knowing the exact cost in
                  your preferred currency.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold">
                  Business Professionals
                </h3>
                <p>
                  Streamline your international transactions and accounting.
                  Keep track of exchange rates and make informed financial
                  decisions.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Why Choose Our App? 🤷‍♀️</h2>
            <p className="mb-4 text-xl">
              Our currency converting app stands out for its accuracy,
              reliability, and ease of use. With a commitment to providing the
              best user experience, we've incorporated features that cater to
              the diverse needs of our global audience. Whether you're a
              frequent traveler, an online shopper, or a business professional,
              our app is designed to make your financial transactions smooth and
              hassle-free.
            </p>
            <a
              href="#"
              className="text-xl inline-block bg-gradient-info text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Download our currency converting app today and take control of
              your international finances. Experience the convenience of
              real-time exchange rates, comprehensive tools, and a user-friendly
              interface—all in one powerful app.
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
