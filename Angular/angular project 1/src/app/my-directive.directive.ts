import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  constructor(private elementRef: ElementRef) { 
  elementRef.nativeElement.style.backgroundColor = 'green';
  elementRef.nativeElement.style.color = 'cyan';
  elementRef.nativeElement.style.padding='40px';
}
@HostBinding('style.background') background:string;
@HostListener('mouseenter')          
mouseEnter(){
  this.background = 'violet';
  // console.log('mouseenterd');
  // alert('mouseenterd');
  // this.elementRef.nativeElement.style.background = 'blue';
  // this.elementRef.nativeElement.style.color = 'red';
}
@HostListener('mouseleave')
mouseLeave(){
  this.background = 'blue';
  // console.log('mouseenterd');
  // alert('mouseenterd');
  // this.elementRef.nativeElement.style.background = 'green';
  // this.elementRef.nativeElement.style.color = 'red';
}
}
