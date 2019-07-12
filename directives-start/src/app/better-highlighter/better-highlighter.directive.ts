import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {



  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() defaultColor : string = 'transparent';
  @Input() hightlightColor : string = 'blue';


  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color' , 'blue' );
  }

  
  @HostListener('mouseenter') mouseover(eventData : Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color' , 'blue');
    this.backgroundColor = this.hightlightColor;
  }

  
  @HostListener('mouseleave') mouseleave(eventData : Event){
   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color' , 'transparent' );
    this.backgroundColor = this.defaultColor;
  }
}
