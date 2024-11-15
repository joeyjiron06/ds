import typography from "./design-system/typography";
import { buttonConfig, buttons } from "./design-system/button";
import { inputConfig, inputs } from "./design-system/input";
import { checkboxConfig, checkboxes } from "./design-system/checkbox";

function App() {
  return (
    <div className="space-y-10 py-12 w-screen overflow-x-hidden">
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
              <div className="text-xs inline-block font-medium">
                {styleName}
              </div>
              <div className="flex gap-4 items-start flex-wrap">
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

      {/* INPUT TEXT */}
      <section className="container space-y-7">
        <h2>
          <b>Input Text</b>
        </h2>

        <div className="space-y-5">
          {Object.keys(inputConfig.variants.style).map((styleName) => (
            <div key={styleName} className="space-y-2">
              <div className="text-xs inline-block font-medium">
                {styleName}
              </div>
              <div className="flex gap-4 items-start flex-wrap">
                {Object.keys(inputConfig.variants.state).map((stateName) => (
                  <input
                    type="text"
                    key={stateName}
                    className={
                      inputs({
                        size: inputConfig.defaultVariants.size,
                        roundness: inputConfig.defaultVariants.roundness,
                        style: styleName,
                        state: stateName,
                      }) + " w-40"
                    }
                    placeholder={stateName}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECT */}

      <section className="container space-y-7">
        <h2>
          <b>Select</b>
        </h2>

        <div className="space-y-5">
          {Object.keys(inputConfig.variants.style).map((styleName) => (
            <div key={styleName} className="space-y-2">
              <div className="text-xs inline-block font-medium">
                {styleName}
              </div>
              <div className="flex gap-4 items-start flex-wrap">
                {Object.keys(inputConfig.variants.state).map((stateName) => (
                  <select
                    key={stateName}
                    className={
                      inputs({
                        size: inputConfig.defaultVariants.size,
                        roundness: inputConfig.defaultVariants.roundness,
                        style: styleName,
                        state: stateName,
                      }) + " w-40"
                    }
                  >
                    <option>{stateName}</option>
                  </select>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* TEXTAREA */}
      <section className="container space-y-7">
        <h2>
          <b>Textarea</b>
        </h2>

        <div className="space-y-5">
          {Object.keys(inputConfig.variants.style).map((styleName) => (
            <div key={styleName} className="space-y-2">
              <div className="text-xs inline-block font-medium">
                {styleName}
              </div>
              <div className="flex gap-4 items-start flex-wrap">
                {Object.keys(inputConfig.variants.state).map((stateName) => (
                  <textarea
                    key={stateName}
                    className={
                      inputs({
                        size: inputConfig.defaultVariants.size,
                        roundness: inputConfig.defaultVariants.roundness,
                        style: styleName,
                        state: stateName,
                      }) + " w-40"
                    }
                    placeholder={stateName}
                  ></textarea>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKBOX */}
      <section className="container space-y-7">
        <h2>
          <b>Checkbox</b>
        </h2>

        <div className="space-y-5">
          {Object.keys(checkboxConfig.variants.style).map((styleName) => (
            <div key={styleName} className="space-y-2">
              <div className="text-xs inline-block font-medium">
                {styleName}
              </div>
              <div className="flex gap-4 items-start flex-wrap">
                {Object.keys(checkboxConfig.variants.state).map((stateName) => (
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      key={stateName}
                      className={checkboxes({
                        size: checkboxConfig.defaultVariants.size,
                        roundness: checkboxConfig.defaultVariants.roundness,
                        style: styleName,
                        state: stateName,
                      })}
                    />
                    {stateName}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
