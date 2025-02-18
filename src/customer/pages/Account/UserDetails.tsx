import { Divider } from "@mui/material"
import ProfileFieldCard from "../../../components/ProfileFieldCard"

function UserDetails() {
    return (
        <div className="flex justify-center py-10">
            <div className="w-full lg:w-[90%]">
                <div className="flex items-center pb-3 justify-between">
                    <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
                </div>
                <div className="">
                    <ProfileFieldCard fieldKey="Name" value={"Zosh"} />
                    <Divider />
                    <ProfileFieldCard fieldKey="Email" value={"zosh8783@gmail.com"} />
                    <Divider />
                    <ProfileFieldCard fieldKey="Mobile" value={"8483473847"} />
                </div>
            </div>
        </div>
    )
}

export default UserDetails
