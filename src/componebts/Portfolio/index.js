import React, { useEffect, useState } from 'react'
import './index.css'
import './index.scss'
import Loader from 'react-loaders'
import Profile from "./profile"
import Loading from './loading'




const Portfolio = () => {

    const [items, setItems] = useState([])
    const [users] = useState("Massmanu")

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(`https://api-github.com/users/${users}/repos/page=1&per_page=10&sort=updated`)
            const data = await res.json()
            setItems(data)
        }
        fetchRepos()
    }, [])

    return (
        <>
            <div className="pt-10">
                <h1 className="mb-10 font-bold text-2xl">
                    Viewing {users}'s repositories {items.length}
                </h1>
            </div>

            {!items ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
                    {items.map((item) => (
                        <Profile key={item.id} {...item} />
                    ))}
                </div>
            )}
        </>
    )

}

export default Portfolio;