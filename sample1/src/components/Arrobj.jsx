

const Arrobj = (data) => {
    <>
        <h2>My Arrobj is mine</h2>
        <div className="h-screen w-screen flex justify-center items-center">
            props.map((data){
                console.log(data.name)
            })
        </div>
    </>
}

export default Arrobj;