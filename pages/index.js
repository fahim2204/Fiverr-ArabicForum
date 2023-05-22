import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import BlogList from '../components/blogList'
import { useEffect, useState, useRef } from "react";
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";


export default function Home() {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/post`)
      .then((x) => {
        setIsLoading(false);
        setBlogList(x.data.data);
      })
      .catch(() => {
        setIsLoading(true);
        notify("Can't Fetch Images!!");
      });
  }, []);


  return (
    <>
      <Head>
        <title>OulYas - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className='sm:max-w-6xl mx-auto mt-8 px-6'>
          <div className="grid grid-cols-14 gap-8 mb-5">
            <div className="col-span-10">
              {isLoading ? (
                <div className="w-full flex justify-center mt-10">
                  <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                  />
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-8">
                    {blogList.map((item) => {
                      return <BlogList blog={item} />
                    })}
                  </div>
                </>
              )}
            </div>
            <div className="col-span-4">
              <div className="flex flex-col">
                <div className='text-center mt-3 mb-6'><Link className='px-4 text-sky-400 font-semibold hover:text-lime-50 hover:bg-sky-400 transition duration-500 shadow-md py-2 border rounded-3xl border-sky-400' href={"/blog/create"}>Create a post</Link></div>
                <h3 className='text-xl font-bold mb-3'>Recent Post</h3>
                <div className='mb-3'>
                  <Link href={"/blog"}>
                    <div className="flex space-x-2 hover:bg-slate-100 transition duration-300 rounded">
                      <img className='h-24 aspect-square object-cover object-center rounded' src="https://cdn.sanity.io/images/cijrdavx/production/b7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg?w=1920&q=75&fit=clip&auto=format" alt="item" />
                      <div className="flex flex-col">
                        <h2 className='leading-5 font-medium line-clamp-3'>This Bread Pudding Will Give You All the Fall Feels</h2>
                        <h3 className='text-sm text-slate-600 mt-1'>October 19, 2022</h3>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='mb-3'>
                  <Link href={"/blog"}>
                    <div className="flex space-x-2 hover:bg-slate-100 transition duration-300 rounded">
                      <img className='h-24 aspect-square object-cover object-center rounded' src="https://cdn.sanity.io/images/cijrdavx/production/b7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg?w=1920&q=75&fit=clip&auto=format" alt="item" />
                      <div className="flex flex-col">
                        <h2 className='leading-5 font-medium line-clamp-3'>This Bread Pudding Will Give You All the Fall Feels</h2>
                        <h3 className='text-sm text-slate-600 mt-1'>October 19, 2022</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>
    </>
  )
}
