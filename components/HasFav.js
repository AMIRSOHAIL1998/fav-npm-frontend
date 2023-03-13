import { ButtonBase, ScrollableBase } from "@reusejs/react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { npmActions } from "@/store/npmSlice";

function HasFav({fav,SetDelete}) {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="w-4/5 flex justify-between align-middle items-center mt-24">
        <div className="text-3xl font-medium text-gray-600 mb-10">
          Welcome to Favourite NPM Packages
        </div>
        <Link href="/searchfav"><ButtonBase
          label="Add to fav"
          buttonBaseClasses={{
            backgroundColor: "bg-blue-600",
            padding: "px-6 py-3",
          }}
          
        /></Link>
      </div>
      <div className="w-4/5 h-96 flex flex-col border-2 border-gray-500 mt-10">
        <div className="w-full flex align-middle border-b-2 border-gray-500">
          <div className="w-3/5 py-2 text-gray-600 text-2xl font-medium pl-5 border-r-2 border-gray-500">
            Package Names
          </div>
          <div className="w2/5 flex py-2 text-gray-600 text-2xl font-medium pl-5">
            Actions
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-hidden overflow-y-auto">
          {
            fav?.map((item,index) => {
              return <div className="w-full flex align-middle border-b-2 border-gray-500" key={index}>
              <div className="w-3/5 py-2 text-gray-600 text-3xl font-sm pl-5 border-r-2 border-gray-500">
                {item.name}
              </div>
              <div className="w2/5 flex py-2 text-gray-600 text-xl font-medium pl-5">
                <RemoveRedEyeIcon className="h-8 w-8 mr-10 text-black cursor-pointer"/>
                <EditIcon className="h-8 w-8 mr-10 text-green-500 cursor-pointer"/>
                <DeleteIcon className="h-8 w-8 text-red-500 cursor-pointer" onClick={()=>{
                  SetDelete(true);
                  dispatch(npmActions.itemDelete(item.name))
                }}/>
              </div>
            </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default HasFav;
