import { Component, OnInit } from '@angular/core';
import LinkModel from 'src/app/models/Links';
import { Router, ActivatedRoute } from '@angular/router';
import { ComplainService } from 'src/app/services/crud/complain.service';
import ComplaintModel from 'src/app/models/Complaint';
import UserModel from 'src/app/models/User';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit{

  home: LinkModel = {name: 'Home', url: '/home'};
  movies: LinkModel = {name: 'Movies', url: '/movies'};
  tvshows: LinkModel = {name: 'TV Shows', url: '/tvshows'};
  games: LinkModel = {name: 'Games', url: '/games'};
  links: LinkModel[] = [this.home, this.movies,this.tvshows, this.games];
  shareLinks: string[] = ['Facebook', 'Twitter', 'Instagram', 'Whatsapp'];
  complaints: ComplaintModel[] = [];
  complaintText: string = '';
  currentUser: UserModel | null = null;

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private complainService: ComplainService
    
    ){  }
    ngOnInit(): void {
  
      const currentUserString = localStorage.getItem('currentUser');
      if (currentUserString) {
        this.currentUser = JSON.parse(currentUserString);
      }
    }

  browseClicked(){
    this.router.navigate(['home'], {relativeTo: this.activatedRoute});
  }

  giveComplaint(complaint: string){
    const currentUserString = localStorage.getItem('currentUser');
    if(currentUserString){
        if(complaint){
          this.complainService.postAComplaint(complaint).subscribe(
            () => {
              alert("Your complaint has been sent! Thank You!");
              this.complaintText = "";
            }
          );
        }else{
          alert("Complaint can not be empty!");
        }
    }else{
      alert("You need to login to give a complaint.");
      this.complaintText = '';
    }
  }

  logoutClick(){
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      localStorage.removeItem('currentUser');
      this.currentUser = null;
      window.location.reload();
    }
  }
}
