import typography from "./design-system/typography";
import { buttonConfig, buttons } from "./design-system/buttons";

function App() {
  return (
    <div className="space-y-10 py-12">
      <section className="container">
        <hgroup>
          <h1>Tailwind Design System</h1>
          <p>A design system built for tailwind</p>
        </hgroup>
      </section>

      <section className="container space-y-7">
        <h2>
          <b>Typography</b>
        </h2>

        <div>
          <h1 className={typography.h1}>Heading 1</h1>
          <h2 className={typography.h2}>Heading 2</h2>
          <h3 className={typography.h3}>Heading 3</h3>
          <h4 className={typography.h4}>Heading 4</h4>
          <h5 className={typography.h5}>Heading 5</h5>
          <h6 className={typography.h6}>Heading 6</h6>
          <p>paragraph</p>
        </div>
      </section>

      <section className="container space-y-7">
        <h2>
          <b>Buttons</b>
        </h2>

        <div className="space-y-5">
          {Object.keys(buttonConfig.variants.style).map((styleName) => (
            <div key={styleName} className="space-y-2">
              <div className="bg-neutral-200 text-neutral-800 text-xs rounded inline-block px-2 py-1">
                {styleName}
              </div>
              <div className="flex gap-4 items-start">
                {Object.keys(buttonConfig.variants.state).map((stateName) => (
                  <button
                    key={stateName}
                    className={buttons({
                      size: buttonConfig.defaultVariants.size,
                      roundness: buttonConfig.defaultVariants.roundness,
                      style: styleName,
                      state: stateName,
                    })}
                  >
                    {stateName}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-7">
        <h2>
          <b>Input Text</b>
        </h2>
      </section>
    </div>
  );
}

export default App;
