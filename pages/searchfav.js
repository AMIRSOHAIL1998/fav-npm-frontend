import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  TextInputBase,
  TextAreaBase,
  ButtonBase,
  PickerRadioSimple,
} from "@reusejs/react";
import { npmActions } from "../store/npmSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { getData } from "../store/npmSlice";

const searchfav = () => {
  const [packName, setPackname] = useState("");
  const [comment, setComment] = useState("");
  const [search, setSearch] = useState();
  const [mounted, setMounted] = useState(false);

  const list = useSelector((state) => state.favNPM.npmList);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleComment = (val) => {
    setComment(val);
  };
  const handleName = (val) => {
    const packname = val.label
    setPackname(packname);
  };

  const handleSearch = async (searchItem) => {
    setSearch(searchItem);
    dispatch(getData(searchItem));
    setMounted(!mounted);
  };

  const handleSubmit = () => {
    if (packName && comment) {
      dispatch(npmActions.addFav({ name: packName, comment }));
      router.push("/");
    } else alert("Package name and Comment Required");
  };

  useEffect(() => {
    dispatch(getData(search));
  }, [dispatch, search]);

  useEffect(() => {}, [mounted]);


  return (
    <div className="w-full flex justify-center align-middle">
      <div className="flex flex-col justify-start w-4/5">
        <div className="w-full mt-10 text-2xl text-gray-700 font-medium">
          Search for NPM Packages
        </div>
        <TextInputBase
          onChange={handleSearch}
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
          {/* <div className="mt-10 text-lg">Results</div> */}
          <div className="flex flex-col mt-6 h-72 justify-start align-middle overflow-hidden overflow-y-auto">
            {/* {
            list.map(item => {
                return <div key={item.package.date} className="w-full flex h-fit justify-start items-center align-middle">
                    <input type="radio" name="package" value={item.package.name} className="h-5 w-5 mr-4" onClick={handlePackName}/>
                    <h1 className="text-xl text-green-600">{item.package.name}</h1>
                </div>
            })
          } */}
            <PickerRadioSimple
              refresh={mounted}
              dataSource={() => {
                return list;
              }}
              defaultSelected={[]}
              labelBaseProps={{
                label: "Results",
                labelBaseClasses: {
                  color: "dark:text-black-600",
                  padding: "p-10",
                },
              }}
              scrollableBaseProps={{
                scrollableBaseClasses: {
                  position: "flex justify-start align-middle flex-col",
                },
              }}
              radioBoxStyleClasses={{
                wrapper: "mx-4 py-2",
              }}
              name="price"
              onChange={handleName}
              valueKey="value"
              value={packName}
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
            onChange={handleComment}
            placeholder="Enter here"
            textAreaBaseClasses={{
              border: "border-2 border-gray-400 rounder-md",
              font: "h-40",
            }}
          />
        </div>
        <div className="w-full h-fit">
          <ButtonBase
            onClick={handleSubmit}
            label="Add to Fav"
            buttonBaseClasses={{
              backgroundColor: "bg-blue-500",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default searchfav;
