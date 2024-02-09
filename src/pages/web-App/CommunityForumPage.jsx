import React from 'react'
import SideBar from '../../components/web-App/SideBar'

const CommunityForumPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar />
      <div className=" w-4/5 h-full overflow-auto"></div>
    </div>
  )
}

export default CommunityForumPage