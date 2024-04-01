
import { Input } from '@/components/ui/input'

import MeetingEventList from './_components/MeetingEventList'
import SideNavBar from '../_components/SideNavBar'


function MeetingType() {

 
  return (
    <div className='p-5'>
      <div className='md:hidden  w-full  '>
      <SideNavBar/>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='font-bold text-3xl'>Meeting Event Type</h2>
        <Input placeholder="Search" className="max-w-xs " />
        <hr></hr>
      </div>
      <MeetingEventList/>

    </div>
  )
}

export default MeetingType