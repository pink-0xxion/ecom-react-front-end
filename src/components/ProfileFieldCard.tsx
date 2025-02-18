import { Divider } from "@mui/material"

function ProfileFieldCard({fieldKey, value}:{fieldKey:string, value:string}) {
  return (
    <div className="p-5 flex items-center bg-slate-50">
      <p className="w-20 pr-5">{fieldKey}</p>
      <Divider  flexItem orientation="vertical"/>
      <p className="pl-4 lg:pl-20 font-semibold lg:text-lg">{value}</p>
    </div>
  )
}

export default ProfileFieldCard
