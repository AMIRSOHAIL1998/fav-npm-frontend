import { ButtonBase } from "@reusejs/react"
import { useDispatch , useSelector} from "react-redux"
import { npmActions } from "@/store/npmSlice";
import { useRouter } from "next/router";

const DeleteModel = ({SetDelete}) => {
    const dispatch = useDispatch();
    const router = useRouter()
    const delItem = useSelector(state => state.favNPM.deleteitem)
    console.log(delItem);
    const handleDelete = () => {
        if(delItem){
            dispatch(npmActions.deleteFav(delItem))
            router.push('/')
            SetDelete(false)
        }
    }

  return (
    <div className="w-full h-screen flex justify-center align-middle items-center  bg-transparent">

        <div className="w-2/5 flex flex-col justify-center align-middle items-center border-2 border-gray-500 py-20 rounded-md">
        <h1 className="text-2xl pb-10">Are you sure you want to delete</h1>
        <div className="flex w-2/5 justify-between items-center align-middle">
        <ButtonBase onClick={()=> console.log("hi")}
            label="Cancel"
            buttonBaseClasses={{
              backgroundColor: "bg-green-500",
            }}
          />
            <ButtonBase onClick={handleDelete}
            label="Delete"
            buttonBaseClasses={{
              backgroundColor: "bg-red-500",
            }}
          />
        </div>
        </div>
    </div>
  )
}

export default DeleteModel
