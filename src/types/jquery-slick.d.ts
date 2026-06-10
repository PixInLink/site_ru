interface JQuery {
  slick(opts?: object): JQuery;
  slick(method: string, ...args: unknown[]): JQuery;
  on(
    event: string,
    handler: (event: unknown, slick: unknown, currentSlide: number) => void
  ): JQuery;
}
