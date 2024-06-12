import React from 'react';
import './AccordionStyle.css';

const data = [
    {
        question: "How do I choose the right university for higher studies?",
        answer: "Consider factors like the university's reputation, the program's curriculum, location, tuition fees, scholarships, and career support services. It's also helpful to read reviews from current and former students."
    },
    {
        question: "How important are  test scores like GRE or GMAT?",
        answer: "Standardized test scores are important for many graduate programs as they provide a common measure to compare applicants. However, some programs may offer waivers or place less emphasis on these scores, focusing more on your academic record and work experience."
    },
    {
        question: "What is the application process for studying abroad?",
        answer: "The application process generally involves researching programs, preparing for and taking standardized tests, obtaining letters of recommendation, writing a statement of purpose, and submitting your academic transcripts and resume. Each university may have specific requirements and deadlines."
    },
    {
        question: "How can I improve my chances of getting a scholarship?",
        answer: "To improve your chances, maintain a strong academic record, gain relevant work or research experience, prepare a compelling statement of purpose, and seek strong letters of recommendation. Apply to multiple scholarships and meet all application criteria carefully."
    },
    {
        question: "What are the benefits of studying abroad?",
        answer: "Studying abroad offers numerous benefits, including exposure to new cultures, networking opportunities, access to high-quality education, personal growth, and enhanced career prospects. It can also improve your language skills and adaptability."
    },
    {
        question: "What should I include in my statement of purpose?",
        answer: "Your statement of purpose should highlight your academic background, career goals, reasons for choosing the program and university, and how the program aligns with your aspirations. It should also reflect your passion and commitment to your field of study."
    },
    {
        question: "Are internships or work experience required for admission?",
        answer: "While not always required, internships or work experience can strengthen your application by demonstrating practical skills and dedication to your field. Some programs may prefer or require applicants to have relevant professional experience."
    },
    {
        question: "How do I prepare for a student visa interview?",
        answer: "Prepare by understanding the visa requirements and application process, gathering necessary documents, and practicing common interview questions. Be honest, clear about your study plans, and show evidence of financial support and ties to your home country."
    },
    {
        question: "Can I work while studying abroad?",
        answer: "Many countries allow international students to work part-time during their studies. The number of hours you can work and the types of jobs available may vary. Check the specific regulations of your host country and university."
    },
    {
        question: "What are the living arrangements for international students?",
        answer: "Living arrangements vary by university and location. Options include on-campus housing, off-campus apartments, and homestays. It's important to research and secure accommodation early, considering factors like cost, proximity to campus, and amenities."
    },
    {
        question: "How can I make the most of my time studying abroad?",
        answer: "Engage in academic and extracurricular activities, network with peers and professors, explore the local culture, and seek internships or part-time work opportunities. Stay organized, manage your time effectively, and take advantage of the resources available to you."
    }
];

export default function Accordion() {
    return (
        <div className="accordion mt-3 mx-5" id="accordionExample">
            {data.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h1 className="accordion-header" id={`heading${index}`}>
                        <button
                            className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded={index === 0 ? 'true' : 'false'}
                            aria-controls={`collapse${index}`}
                        >
                            {item.question}
                        </button>
                    </h1>
                    <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


