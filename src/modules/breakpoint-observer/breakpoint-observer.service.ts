import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable()
export class BreakpointObserverService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  get isMobile(): boolean {
    let isMatched: boolean = false
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      isMatched = result.matches
    })
    return isMatched
  }

  get isDesktop(): boolean {
    let isMatched: boolean = false;
    this.breakpointObserver.observe([Breakpoints.Large]).subscribe(result => {
      isMatched = result.matches
    })
    return isMatched
  }
}
