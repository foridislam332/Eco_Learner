import FeedbackModal from "./Shared/FeedbackModal";

const ManageClassesCard = ({ item, handleStatus }) => {
    const { _id, name, image, price, instructor, email, seats, status } = item;

    return (
        <div className='w-80 md:w-full mx-auto md:flex items-center border border-green rounded-lg hover:shadow-xl hover:shadow-green/40 p-4 transition-all duration-300 ease-in-out'>
            <div className='h-48 lg:w-72'>
                <img className='h-full object-cover' src={image} alt={name} />
            </div>

            <div className='md:flex items-center justify-between md:ps-5 w-full'>
                <div className='w-full'>
                    <h1 className='text-dark text-xl font-medium drop-shadow-md'>{name}</h1>

                    <p className='text-gray-text text-sm mt-2'><span className='font-semibold text-gray'>Instructor name:</span> {instructor}</p>
                    <p className='text-gray-text text-sm mt-2'><span className='font-semibold text-gray'>Instructor email:</span> {email}</p>

                    <p className='text-gray-text text-sm'><span className='font-semibold text-gray'>Available seats:</span> {seats}</p>
                    <p className='text-gray-text text-sm'><span className='font-semibold text-gray'>Price:</span> ${price}</p>

                    <div className="w-52 text-center mt-3">
                        {status ? <p className={`py-2 px-5 text-dark rounded-3xl ${status === 'pending' && 'bg-orange/80' || status === 'approved' && 'bg-lime-100 text-lime-600' || status === 'denied' && 'bg-rose-200 text-red'}`}><span className='font-semibold text-navy'>Status: </span>
                            {status ? status : 'Approved'}
                        </p> : <p className={`py-2 px-5 text-dark rounded-3xl ${!status ? 'bg-lime-100 text-lime-600' : ''}`}><span className='font-semibold text-navy'>Status: </span> Approved</p>}
                    </div>
                </div>

                <div className='flex flex-col gap-2 md:gap-3 w-full md:w-72 mt-8 md:mt-0'>
                    <button onClick={() => handleStatus(_id, 'approved')} disabled={status === 'approved' || status === 'denied' ? true : false} className={`btn_primary overflow-hidden border border-green hover:border-transparent ${status === 'approved' || status === 'denied' ? 'btn_disable' : ''}`}>
                        Approved
                    </button>

                    <button onClick={() => handleStatus(_id, 'denied')} disabled={status === 'approved' || status === 'denied' ? true : false} className={`btn_primary overflow-hidden border border-red ${status === 'approved' || status === 'denied' ? 'btn_disable' : ''}`}>
                        Deny
                    </button>

                    {
                        status !== 'pending' && <FeedbackModal id={_id} />
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageClassesCard;