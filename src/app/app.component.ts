import {Component} from '@angular/core';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavComponent} from './nav/nav.component';
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavComponent, MainComponent, FooterComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quizzesview';

  onCloseToast() {
    console.log('...Toast message closed');
  }
}
