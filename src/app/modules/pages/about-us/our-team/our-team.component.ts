import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {
  teamData=[
    {
      image:'/assets/images/ourTeam/sn.png',
      name:"Srinidhi Bhandary",
      designation:"Co-founder",
      email:"srinidhi.hegde@foreseekh.com",
      linkedInUrl:"",
      instagramUrl:"",
      facebookUrl:"",
    },
    {
      image:'/assets/images/ourTeam/pn.jpg',
      name:"Punith Kumar Shetty",
      designation:"Co-founder and Educator",
      email:"punithkumar.shetty@foreseekh.com",
      linkedInUrl:"",
      instagramUrl:"",
      facebookUrl:"",
    },
    {
      image:'/assets/images/ourTeam/nk.jpg',
      name:"Nikhil Khunder",
      designation:"Professional Advisor",
      email:"",
      linkedInUrl:"",
      instagramUrl:"",
      facebookUrl:"",
    },
    {
      image:'/assets/images/ourTeam/sr.jpg',
      name:"Shishir Rai",
      designation:"Head of Business Development",
      email:"shishir.rai@foreseekh.com",
      linkedInUrl:"",
      instagramUrl:"",
      facebookUrl:"",
    }
  ]
}
