import { Component, ElementRef, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {
  @Input() isOpen :boolean=false;

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  // @HostListener('click', ['$event.target'])
  // onClick(target:any){
  //   let item = this.el.nativeElement.querySelector('li');

  //   alert(item);
  // }

}
