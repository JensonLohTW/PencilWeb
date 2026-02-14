declare module 'threejs-components/build/cursors/tubes1.min.js' {
  interface TubesCursorInstance {
    destroy?: () => void
  }

  interface TubesCursorOptions {
    [key: string]: unknown
  }

  const TubesCursor: (
    element: HTMLElement | null,
    options?: TubesCursorOptions,
  ) => TubesCursorInstance
  export default TubesCursor
}
