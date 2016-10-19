import { Component, OnInit } from '@angular/core';

interface MyWindow extends Window {
    myFunction(): void;
}
declare var window: MyWindow;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Always Be Committing';

  isDarkTheme: boolean = false;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor() {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  ngOnInit() {
  }

  openGithub() {
    const githubPage = 'https://github.com/clamstew/always-be-committing-ng2';
    const newWindowFlag = '_blank';

    window.open(githubPage, newWindowFlag);
  }

}
