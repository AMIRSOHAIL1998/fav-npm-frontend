import {
  BadgeBase,
  ButtonBase,
  CheckboxBase,
  DividerBase,
  GridBase,
  SimpleSliderBase,
} from "@reusejs/react";

const test = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className="text-3xl bg-green-200 w-full text-center text-white py-4 font-medium">
        Welcom to ReuseJs/React
      </h1>
      <div className="w-4/5  flex flex-col h-80">
        <BadgeBase
          label="Email Address"
          badgeBaseClasses={{
            backgroundColor: "bg-red-500",
            font: "h-fit w-fit rounded-2xl px-2",
          }}
        />
        <ButtonBase
          buttonSuffix={
            <svg
              className="ml-1.5 h-2 w-2 text-white"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
          }
          buttonBaseClasses={{
            font: "h-fit w-fit px-2 flex justify-center items-center align-middle mt-2",
          }}
          label="Email Address"
        />
        <CheckboxBase
          error={"This field is required"}
          labelBaseProps={{
            htmlFor: "price",
            label: "Cricket",
          }}
          checkboxBaseClasses={{
            wrapper: "text-red-600",
          }}
          name="price"
          onChange={function noRefCheck() {}}
          placeholder="0.00"
          textInputBottom={"click"}
          type="text"
        />
        <DividerBase
          labelAlign="left"
          labelBaseProps={{
            label: "Title",
            labelBaseClasses: {
              alignment: "mr-2",
              color: "text-cyan-700",
              font: "font-bold",
            },
          }}
        />
        <GridBase
          content={[
            <ButtonBase
              key="0"
              color="bg-blue-400 py-3 rounded-lg flex justify-center text-white font-semibold"
              label="One"
            />,
            <ButtonBase
              key="1"
              color="bg-blue-400 py-3 rounded-lg flex justify-center text-white font-semibold"
              label="Two"
            />,
            <ButtonBase
              key="2"
              color="bg-blue-400 py-3 rounded-lg flex justify-center text-white font-semibold"
              label="Three"
            />,
            <ButtonBase
              key="3"
              color="bg-blue-400 py-3 rounded-lg flex justify-center text-white font-semibold"
              label="Four"
            />,
            <ButtonBase
              key="4"
              color="bg-blue-400 py-3 rounded-lg flex justify-center text-white font-semibold"
              label="Five"
            />,
            <ButtonBase
              key="5"
              color="bg-blue-400 py-3 rounded-lg flex justify-center text-white font-semibold"
              label="Six"
            />,
            <ButtonBase
              key="6"
              color="bg-blue-400 py-3 rounded-lg flex justify-center text-white font-semibold"
              label="Seven"
            />,
          ]}
          labelBaseProps={{
            label: "This is a grid",
            labelBaseClasses: {
              color: "text-blue-900",
              font: "text-2xl font-bold",
            },
          }}
        />
        <div className="w-4/5 flex">
          <div className="py-36">
            <SimpleSliderBase
              id="Slider"
              scrollWidth={192}
              simpleSliderBaseClasses={{
                sliderClasses: "w-4/5 flex overflow-hidden overflow-x-auto",
              }}
            >
              <div className="w-48 h-48 flex items-center justify-center bg-rose-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-lime-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-purple-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-amber-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-indigo-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-cyan-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-green-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-orange-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-gray-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-yellow-200 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-slate-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-emerald-500 ">
                Hello
              </div>
              <div className="w-48 h-48 flex items-center justify-center bg-teal-500 ">
                Hello
              </div>
            </SimpleSliderBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
