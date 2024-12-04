"use client";

import { useState } from "react";
import { TestimonialForm } from "@/components/TestimonialForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { getTestimonials, addTestimonial } from "@/lib/testimonials";
import { Testimonial } from "@/lib/types";
import { MessageSquare } from "lucide-react";

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(getTestimonials());

  const handleSubmit = (data: Omit<Testimonial, "id" | "createdAt">) => {
    const newTestimonial = addTestimonial(data);
    setTestimonials([newTestimonial, ...testimonials]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-muted-foreground">
            Discover what our clients have to say about their experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Share Your Experience</h2>
            <div className="bg-card rounded-lg shadow-lg p-6">
              <TestimonialForm onSubmit={handleSubmit} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Latest Testimonials</h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}