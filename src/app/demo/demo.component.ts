import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message!: string
  @ViewChild('temp') tempPara!: ElementRef;
  @ContentChild('temp') paraContent!:ElementRef;


  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Change hook called', changes)
  }

  ngOnInit() {
    // console.log('ngOnInit hook called')
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck hook called')
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit hook called', this.paraContent)
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked hook called', this.paraContent)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit hook called')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked hook called')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy hook called')
  }


}
