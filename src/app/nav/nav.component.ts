import {Component, OnInit} from '@angular/core';
import {AppMenuItem} from './AppMenuItem';
import {MenuItem} from 'primeng/api';
import {PanelMenuModule} from 'primeng/panelmenu';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    let item1: AppMenuItem = new AppMenuItem('Questions');
    let item1subitem0 = new AppMenuItem('Questions');
    item1subitem0.routerLink = '/questions';
    let item1subitem1 = new AppMenuItem('Add Question');
    item1subitem1.routerLink = '/question';
    item1.items = Array.of(item1subitem0, item1subitem1);

    let item2: AppMenuItem = new AppMenuItem('Quizzes');
    let item2subitem0 = new AppMenuItem('Quizzes');
    item2subitem0.routerLink = '/quizzes';
    let item2subitem1 = new AppMenuItem('Add Quiz');
    item2subitem1.routerLink = '/quiz/add';
    item2.items = Array.of(item2subitem0, item2subitem1);

    let item3: AppMenuItem = new AppMenuItem('Exams');
    let item3subitem0 = new AppMenuItem('Exams');
    item3subitem0.routerLink = '/exams';
    let item3subitem1 = new AppMenuItem('Add exam');
    item3subitem1.routerLink = '/exam/add';
    item3.items = Array.of(item3subitem0, item3subitem1);

    let item4: AppMenuItem = new AppMenuItem('Participants');
    let item4subitem0 = new AppMenuItem('Participants');
    item4subitem0.routerLink = '/participants';
    let item4subitem1 = new AppMenuItem('Add Participant');
    item4subitem1.routerLink = '/participant/add';
    item4.items = Array.of(item4subitem0, item4subitem1);

    let item5: AppMenuItem = new AppMenuItem('Complete');
    let item5subitem0 = new AppMenuItem('ExamsParticipants');
    item5subitem0.routerLink = '/examsParticipants';
    item5.items = Array.of(item5subitem0);

    this.items.push(item1, item2, item4, item3, item5);
  }
}
