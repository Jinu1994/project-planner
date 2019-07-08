import { Component, OnInit } from '@angular/core';
import { Storieservice } from './stories.service';
import { Story } from './story.model';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.sass']
})
export class StoriesListComponent implements OnInit {
  stories: Story[];
  columns = ['id', 'summary', 'key', 'status'];
  constructor(private storieservice: Storieservice) { }

  ngOnInit() {
    this.getStories();
  }
  async getStories() {
    return await this.storieservice.getStories().subscribe(stories => this.stories = stories);
  }
}
