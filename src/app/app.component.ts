import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'angular-lifecycle-hooks';
  inputVal: string = ''
  toDestroy:boolean = false;

  onBtnClick(inputEl:HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  destroyComponent() {
    this.toDestroy = !this.toDestroy
  }

  ngAfterViewInit(): void {///call after all the view of both parent and child has renderd.
    // console.log('ngAfterViewInit hook from app componet is called')
  }
}
