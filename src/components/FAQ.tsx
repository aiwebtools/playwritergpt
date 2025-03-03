
import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PawPrint } from 'lucide-react';

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
      question: "What kind of pet health questions can VetGPT answer?",
      answer: "VetGPT can address a wide range of pet health concerns including symptoms assessment, dietary advice, behavioral issues, preventative care, and emergency guidance. However, it's important to note that VetGPT should not replace professional veterinary care for serious or emergency situations."
    },
    {
      question: "How does the photo analysis feature work?",
      answer: "You can upload photos of your pet, visible symptoms, or conditions, and VetGPT will analyze the images to help identify potential issues. This visual assessment, combined with the information you provide about your pet's symptoms and behavior, helps VetGPT give more accurate guidance."
    },
    {
      question: "Is VetGPT a replacement for visiting a veterinarian?",
      answer: "No, VetGPT is designed to supplement, not replace, professional veterinary care. While it can provide valuable guidance and information, it should not be used as the sole source of advice for serious health concerns or emergencies. Always consult with a qualified veterinarian for proper diagnosis and treatment."
    },
    {
      question: "What types of animals does VetGPT support?",
      answer: "VetGPT supports a wide range of animals including dogs, cats, birds, small mammals (rabbits, guinea pigs, hamsters), reptiles, and even some livestock and exotic pets. The system has been trained on veterinary information covering numerous species and breeds."
    },
    {
      question: "How does VetGPT protect my privacy?",
      answer: "VetGPT prioritizes your privacy and the security of your data. Information about your pets is kept confidential, and we adhere to strict data protection standards. Photos and consultation data are used only for the purpose of providing you with accurate advice."
    },
    {
      question: "Can VetGPT help in emergency situations?",
      answer: "While VetGPT can provide guidance in urgent situations, it will always advise seeking immediate professional veterinary care for emergencies. It can help you identify signs that require urgent attention and suggest first aid measures while you seek professional help."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-8 bg-vetdark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetmuted text-vetprimary mb-4">
            <PawPrint size={16} className="mr-2" />
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about VetGPT and how it can help your pets.
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
