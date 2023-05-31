function ProfileCard(){
    return <>
            <div className="flex flex-col items-center rounded-[20px] w-[24rem] p-4 bg-gray-800 bg-clip-border shadow-3xl shadow-shadow-500 mx-6 dark:!bg-navy-800 dark:text-white dark:!shadow-none my-6">
                <div className="w-full rounded-xl bg-cover my-auto" >
                    <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="flex h-32 rounded-xl bg-cover"/>
                    <div className="flex justify-center md:justify-start -mt-14 ml-3">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-bold text-navy-700 dark:text-white">John Doe</h4>
                        <p className="text-base font-normal text-gray-600">Valorant Player</p>
                    </div>
                    <p className="text-base font-normal text-red-400">level:10</p>

                </div>
            </div>
            </>
}
export default ProfileCard