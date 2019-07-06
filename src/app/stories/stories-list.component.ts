import { Component, OnInit } from '@angular/core';
import { Storieservice } from '../shared/story.service';
import { Issue } from '../shared/story';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.sass']
})
export class StoriesListComponent implements OnInit {
  Stories: Issue[];
  constructor(private Storieservice: Storieservice) { }

  ngOnInit() {
    this.getHeroes();
  }
  async getHeroes() {
    return await this.Storieservice.getStories().subscribe(Stories => this.Stories = Stories);
  }
}
