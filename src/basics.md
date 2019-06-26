*ngIf - Renders some HTML is condition is true.
*ngFor - Repeats elements by looping over an array of data.
ngClass - Applies CSS classes conditionally
ngStyle - Applies styles conditionally


constructor() {
  // first thing to happen, class instantiation
}

ngOnInit() {
  // second thing to happen, bindings are available
}

ngAfterViewInit() {
  // child views loaded
}

ngDoCheck() {
  // happens on each change detection check
}

ngOnDestroy() {
  // teardown
}




============ input and output properties ============


two properties that can be passed to the @Component decorator to implement the downward and upward flow of data: “inputs” and “outputs.”