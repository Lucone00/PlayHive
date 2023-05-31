import profile from '../../../images/peri-stojnic-G9dttphDDE4-unsplash.jpg'
function MayKnow(){
 const people = [
    {
        name: "Andre Kae",
        image: profile,
        job: 'CEO'
    },
    {
        name: "Cicco Pasticcio",
        image: profile,
        job: 'Pasticcere'
    },
    {
        name: "Andre Kae",
        image: profile,
        job: 'CEO'
    }
]
    return <>
            <div className="mx-6 bg-gray-800 my-6 p-3 rounded-[20px]">
                {people.map((item, key) => {
                   return( <div key={key} className="flex items-center justify-between text-white py-3">
                                <div className="flex items-center gap-4">
                                    <img src={item.image} className="rounded-full h-[50px] w-[50px] bg-cover"/>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p className="font-light">{item.job}</p>
                                    </div>
                                </div>
                                <button className="bg-gradient-to-r from-[#F78361] to-[#F54B64] hover:bg-[#F54B64] p-2 rounded-lg">Connect</button>
                            </div>
                   )
                })}
                <hr />
                <p className="text-[#F54B64] text-center py-3 font-bold hover:text-[#F78361] cursor-pointer">See All</p>
            </div>
            </>
}

export default MayKnow