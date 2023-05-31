function NewsSection(){
    return<>
            <div className="max-w-sm py-2 px-8 bg-gray-900 shadow-lg rounded-lg my-10">
                <div className="flex justify-center md:justify-end -mt-5">
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                </div>
                <div>
                    <h2 className="text-slate-500 text-xl font-semibold">Design Tools</h2>
                    <p className="mt-2 text-slate-300 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic...</p>
                </div>

                <div className="flex justify-end mt-4">
                    <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
                </div>
            </div>
            </>
}

export default NewsSection;