import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Ionic and Christ Part One",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | Ionic and Christ Part Two",
      url: "/chapter3"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
