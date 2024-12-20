import React, { useState } from 'react';
import './Test.css';  // Import the CSS file

const industries = [
  { name: 'Healthcare', description: 'Explore medical advancements and patient care innovations' },
  { name: 'Technology', description: 'Discover the latest in tech innovations and digital transformations' },
  { name: 'Finance', description: 'Learn about markets, investments, and economic trends' },
  { name: 'Education', description: 'Understand modern learning methodologies and educational technologies' },
  { name: 'Environment', description: 'Study climate change, sustainability, and conservation efforts' },
  { name: 'Arts & Culture', description: 'Dive into the world of creativity, history, and cultural expressions' },
];

function Test() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <div className="test-container">
      {/* Header */}
      <header className="header">
        <div className="main-container">
          <div className="header-content">
            <main className="main-content">
              <div className="sm-text-center lg-text-left">
                <h1 className="heading">
                  <span className="block xl-inline">Empower Your Learning with</span>{' '}
                  <span className="block xl-inline">AI-Driven Education</span>
                </h1>
                <p className="description">
                  Experience personalized learning journeys tailored to your unique needs and goals. Our AI-powered platform adapts to your learning style, providing targeted insights and resources across various industries.
                </p>
                <div className="cta-container">
                  <button className="cta-button">
                    Get started
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </header>

      {/* Approach Section */}
      <section className="approach-section">
        <div className="container">
          <div className="lg-text-center">
            <h2 className="heading">Our Approach</h2>
            <p className="subheading">A smarter way to learn and grow</p>
            <p className="description">
              Our AI-driven platform revolutionizes the learning experience, making it more efficient, engaging, and tailored to your individual needs.
            </p>
          </div>

          <div className="feature-list">
            {/* Features List */}
            <div className="feature-item">
              <p className="feature-title">Personalized Learning Paths</p>
              <p className="feature-description">
                Our AI analyzes your learning style, pace, and goals to create a customized curriculum that evolves with you.
              </p>
            </div>
            <div className="feature-item">
              <p className="feature-title">Adaptive Assessments</p>
              <p className="feature-description">
                Dynamic quizzes and tests adjust in real-time based on your performance, ensuring accurate evaluation of your knowledge.
              </p>
            </div>
            <div className="feature-item">
              <p className="feature-title">Real-time Feedback</p>
              <p className="feature-description">
                Receive instant, constructive feedback on your progress, helping you identify areas for improvement and celebrate your achievements.
              </p>
            </div>
            <div className="feature-item">
              <p className="feature-title">AI-Powered Tutoring</p>
              <p className="feature-description">
                Access our intelligent chatbot for 24/7 support, answering questions and providing explanations tailored to your learning style and current understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container" >
          <div className="lg-text-center">
            <h2 className="heading">Explore Industries</h2>
            <p className="subheading">Dive into Your Field of Interest</p>
            <p className="description">
              Choose from a variety of industries and start your personalized learning journey today.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndustry(industry.name)}
                className="industry-card"
              >
                <h3 className="industry-title">{industry.name}</h3>
                <p className="industry-description">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;
