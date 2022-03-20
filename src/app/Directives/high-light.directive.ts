import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input('appHighLight') Highlight = 'red';
  // @Input('appHighLight') HighlightSecond = 'red';

  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = this.Highlight;
  }

  ngOnInit(): void {
    // console.log(123)
    // console.log(typeof this.Highlight)
    if(this.Highlight === ''){
      this.Highlight = 'red'
    }

    this.el.nativeElement.style.color = this.Highlight;
  }
}
