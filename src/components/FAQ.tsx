
import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PenSquare } from 'lucide-react';

const FAQ = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const faqs = [
    {
      question: "What kind of plays can PlayWriter GPT help me create?",
      answer: "PlayWriter GPT can assist with virtually any theatrical genre including drama, comedy, tragedy, farce, musical theater, historical plays, experimental theater, and more. Whether you have a specific vision or need creative inspiration, our AI can help develop professional quality scripts tailored to your preferences."
    },
    {
      question: "How does the collaborative writing process work?",
      answer: "After gathering your initial ideas about genre, premise, characters, and setting, PlayWriter GPT creates a detailed outline with act and scene breakdowns. We then write each scene individually, seeking your feedback and approval before moving to the next. You can modify, extend, or redirect the narrative at any point, ensuring the final play aligns perfectly with your creative vision."
    },
    {
      question: "Is PlayWriter GPT a replacement for human playwrights?",
      answer: "No, PlayWriter GPT is designed to be a creative assistant and collaborator, not a replacement for human creativity. It serves as a powerful tool to help overcome writer's block, explore new narrative directions, and streamline the writing process. The most compelling works often emerge from the synergy between human creative vision and AI assistance."
    },
    {
      question: "What elements are included in the plays created with PlayWriter GPT?",
      answer: "Each play includes professionally formatted title page, character list, setting descriptions, detailed stage directions, dialogue, act and scene divisions, and optional author's notes. The scripts follow industry-standard theatrical formatting and include all the elements needed for potential production."
    },
    {
      question: "Can I use PlayWriter GPT for educational purposes?",
      answer: "Absolutely! PlayWriter GPT is an excellent educational tool for drama teachers, theater students, and educational institutions. It can demonstrate theatrical structure, help students understand different genres and styles, and provide examples of effective dialogue and character development."
    },
    {
      question: "How does PlayWriter GPT handle revisions and feedback?",
      answer: "After each scene is written, you're given the opportunity to request modifications, extensions, or completely new directions. The AI adapts to your feedback, ensuring the narrative evolves according to your creative preferences while maintaining consistency throughout the entire play."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-8 bg-vetdark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetmuted text-vetprimary mb-4">
            <PenSquare size={16} className="mr-2" />
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about PlayWriter GPT and how it can help bring your theatrical visions to life.
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-vetmuted mb-4 rounded-lg overflow-hidden bg-vetcard interactive-card"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg text-white hover:text-vetprimary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
