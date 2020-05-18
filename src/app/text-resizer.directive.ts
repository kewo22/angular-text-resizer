import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appTextResizer]"
})
export class TextResizerDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log(this.checkOverflow(this.el.nativeElement));

    // if (this.el.nativeElement.scrollWidth > $("#div-id").innerWidth()) {
    //   //Text has over-flown
    // }
  }

  checkOverflow(el) {
    var curOverflow = el.style.overflow;

    if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";

    var isOverflowing =
      el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;

    el.style.overflow = curOverflow;

    return isOverflowing;
  }
}
