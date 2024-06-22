import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module'

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {
  faqData = {
    title:"FAQs",
    faqList: [
      {
        "question": "What courses does your website offer?",
        "answer": "We offer a wide range of courses spanning subjects such as programming, design, business, and more."
      },
      {
        "question": "How can I enroll in a course?",
        "answer": "You can enroll in a course by visiting the course page and following the enrollment instructions provided."
      },
      {
        "question": "Are there any prerequisites for your courses?",
        "answer": "Prerequisites vary by course. Check the course description for specific requirements."
      },
      {
        "question": "Can I access course materials after I finish the course?",
        "answer": "Yes, you will have access to course materials even after you complete the course."
      },
      {
        "question": "Do you offer certificates upon course completion?",
        "answer": "Yes, we provide certificates of completion for most of our courses."
      },
      {
        "question": "Are your courses self-paced or scheduled?",
        "answer": "Our courses are primarily self-paced, allowing you to study at your own convenience."
      },
      {
        "question": "Can I get a refund if I'm not satisfied with the course?",
        "answer": "We offer a refund within a specified period if you're not satisfied with the course. Check our refund policy for details."
      },
      {
        "question": "Are the instructors qualified?",
        "answer": "Yes, our instructors are highly qualified experts in their respective fields."
      },
      {
        "question": "Is there a community or forum for students to interact?",
        "answer": "Yes, we provide a community or forum where students can interact, ask questions, and discuss course-related topics."
      },
      {
        "question": "Do you offer discounts for group enrollments?",
        "answer": "Yes, we offer discounts for group enrollments. Contact us for more details."
      },
      {
        "question": "Can I switch courses after enrolling?",
        "answer": "In most cases, you can switch courses after enrolling. Contact our support team for assistance."
      },
      {
        "question": "How long do I have access to the course materials?",
        "answer": "You have lifetime access to the course materials once you enroll."
      },
      {
        "question": "Do you offer job placement assistance?",
        "answer": "While we don't guarantee job placement, we provide career resources and guidance to help you in your job search."
      },
      {
        "question": "Are your courses accredited?",
        "answer": "Our courses are designed by experts in the field and are not typically accredited."
      },
      {
        "question": "Can I download course materials for offline access?",
        "answer": "Yes, you can download certain course materials for offline access. Check the course details for availability."
      }
    ]
  }


}
