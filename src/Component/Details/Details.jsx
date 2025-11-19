import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Loading from '../../Loading/Loading';

const Details = () => {
    // const [findUser, setFindUser] = useState([])

    const {id} = useParams()
    const data = useLoaderData()

    const findHabit = data.find(habit => habit._id == id)
    // console.log(findHabit)
    const{title, name, imageURL, email,description, createdAt, category}=findHabit


    return (
        
            <Suspense fallback={<Loading></Loading>} >
                {/* <Loading></Loading> */}
                <div>
                    <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-col">
                        <img
                        src= {imageURL}
                        className="max-w-3xl rounded-lg shadow-2xl m-10"
                        />
                        <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                            <p className='mt-10'>Category: <span>{category}</span></p>
                            <p>Listed On: <span>{createdAt}</span></p>
                            <p>Creator by: <span>{name}</span></p>
                            <p className='mb-10'>Creator Email: <span>{email}</span></p>
                        <p className="py-6">{description} </p>
                            <h1 className='text-3xl font-bold my-5'>Progress Bar</h1>
                        <progress className="progress progress-error w-8/12" value="70" max="100"></progress>
                        </div>
                    </div>
                    </div>
                </div>
            </Suspense>
    );
};

export default Details;