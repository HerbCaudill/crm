/** Render the starter application. */
export function App(
  /** The app shell accepts no props. */
  _props: Props,
) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello, world</h1>
    </div>
  )
}

type Props = Record<string, never>
