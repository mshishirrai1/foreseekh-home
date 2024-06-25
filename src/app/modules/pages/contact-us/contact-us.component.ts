import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  pageData = [
    {
      iconPath: "/foreseekh-home/assets/images/contactus/faq.png",
      title: "Need help?",
      description: "Explore our FAQs",
      url:'faq'
    },
    {
      iconPath: "/foreseekh-home/assets/images/contactus/call.png",
      title: "Call us on :",
      description: "+91 7483045967",
    },
    {
      iconPath: "/foreseekh-home/assets/images/contactus/mail.png",
      title: "Mail us on :",
      description: "support@foreseekh.com",
    }
  ]

  textDescData = {
    title: "Contact Us  ",
    description: `<p class='pt-4'>We'd love your feedback if you're a student, tutor or Parent!. Please feel free to
    contact us.</p>`,
    showButton: false,
    buttonUrl: '',
    buttonName: "",
    addUnderline: true,
    alignHeading: "left",//Center , left
    alignContent: "left",//Center , left
    alignButton: ""//start,end,center
  }

  formData = {
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(){

  }
}
