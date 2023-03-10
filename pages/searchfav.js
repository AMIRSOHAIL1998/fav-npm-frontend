import React from "react";
import { TextInputBase, TabsBase , TextAreaBase, ButtonBase} from "@reusejs/react";

const searchfav = () => {
  return (
    <div className="w-full flex justify-center align-middle">
      <div className="flex flex-col justify-start w-4/5">
        <div className="w-full mt-10 text-2xl text-gray-700 font-medium">
          Search for NPM Packages
        </div>
        <TextInputBase
          onChange={function noRefCheck() {}}
          placeholder="Search Favourite NPM Packages"
          type="text"
          textInputBaseClasses={{
            font: "h-11 text-md text-gray-600",
            border: " border-gray-400 border-2 rounded-md",
            borderRadius: " raounded-md",
            padding: "pl-6",
            width: "w-full",
          }}
        />
        <div className="flex flex-col justify-center align-middle w-full">
          <div className="mt-10">Results</div>
          <div className="flex flex-col justify-start align-middle">
            <TabsBase
              elements={[
                {
                  content: (
                    <div
                      key="ONE"
                      className="flex h-80 w-full flex-col pt-6 justify-start overflow-y-scroll border-t-0"
                      onScroll={function noRefCheck() {}}
                    >
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                      <div>Check</div>
                    </div>
                  ),
                },
              ]}
              tabsBaseClasses={{
                activeTabClasses: "",
                backgroundColor: "bg-white",
                inactiveTabClasses: "",
                border: "border-0",
              }}
            />
          </div>
        </div>
        <div className="w-full mt-10">
          <TextAreaBase
            id="description"
            labelBaseProps={{
              htmlFor: "description",
              label: "Why is this your Favourite ?",
            }}
            name="description"
            onChange={function noRefCheck() {}}
            placeholder="Enter here"
            textAreaBaseClasses={{
                border:"border-2 border-gray-400 rounder-md",
                font:"h-40"
                
            }}
          />
        </div>
        <div className="w-full h-fit">
        <ButtonBase label="Add to Fav" buttonBaseClasses={{
            backgroundColor:"bg-blue-500"
        }}/>
        </div>
      </div>
    </div>
  );
};

export default searchfav;
