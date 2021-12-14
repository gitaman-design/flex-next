import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/router"
import { gql, useQuery } from '@apollo/client';
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useState, useEffect } from "react";
import { Spin, Skeleton, Space } from 'antd';
import { SINGLE_CAT_QUERY } from '../api/query/singleCategory';
import pin from '../assets/pin.png'
import rupee from '../assets/rupee.png'
import chair from '../assets/chair.png'
import wifi from '../assets/wifi.png'
import stopwatch from '../assets/stopwatch.png'
import double from '../assets/double.png'


const ApiUrl = 'https://cms.bigradar.io'

const handleWidget = () => {
  window.BigRadar?.open()
}

export default function Slug() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const city_id = router.query?.id;
  console.log(city_id)
  const cityInfo = useQuery(SINGLE_CAT_QUERY, { variables: { url: city_id }});
  const data = cityInfo?.data

  console.log(data)
  // useEffect(() => {
  //   // const handleStart = (url) => (url !== router.asPath) && setLoading(true);
  //   // const handleComplete = (url) => (url === router.asPath) && setLoading(false);
  //   // router.events.on('routeChangeStart', handleStart)
  //   // router.events.on('routeChangeComplete', handleComplete)
  //   // router.events.on('routeChangeError', handleComplete)
  //   return () => {
  //     router.events.off('routeChangeStart', handleStart)
  //     router.events.off('routeChangeComplete', handleComplete)
  //     router.events.off('routeChangeError', handleComplete)
  //   }
  // }, [])

  if (loading || !data) {
    return <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">
      <Space>
        <Skeleton.Image active size={500} />
        <Skeleton.Image active size={"large"} />
        <Skeleton.Image active size={"large"} />
      </Space>
      <Skeleton active paragraph={{ rows: 8 }} />
    </div>
  }
  return (
    <div className="py-10 px-6 sm:px-12 xl:px-24 2xl:px-60">

      {data?.categories?.map((post) => {
        return (
          <>
            <Head>
                {/* HTML Meta Tags */}
                <title> {post.name} - FlexiSpaces </title>
                <meta name="description" content={`${post.description}`} />

                {/* Google / Search Engine Tags */}
              <meta itemprop="name" content={`${post.name} - FlexiSpaces`}/>
                <meta itemprop="description" content={`${post.description}`} />
                <meta itemprop="image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://coworly.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${post.name} - FlexiSpaces`} />
                <meta property="og:description" content={`${post.description}`} />
                <meta property="og:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${post.name} - FlexiSpaces`} />
                <meta name="twitter:description" content={`${post.description}`} />
                <meta name="twitter:image" content="https://static.coworly.com/media/large/dX5rFcpMWj855Ld-office-space-in-connaught-place-meeting-space-awfis1.jpg" />


                <link rel="icon" href="/favicon.ico" />

            </Head>

            </>
        )
      })}

    
      {data?.categories?.map((city) => {
        return (
          <>
            <div class="">
              <h1 class="text-4xl font-semibold">{city.name}</h1>
              <p class="mt-4 text-lg lg:w-8/12">{city.description}</p>
              <hr class="border-1 border-gray-200 mt-6"></hr>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-20 gap-y-10 hover:text-gray-500">
                        {city.cities.map((c) => {
                            return(
                                <>
                                    <Link key={c.id} as={`/city/${c.slug}`} href={`/city/${c.slug}`}>
                                            <div class=" hover:text-gray-800 transition duration-200 bg-gray-50 rounded"> 
                                                <img class="w-full h-52 shadow-xl transition  duration-200 rounded" src={ApiUrl + c.image.url} alt={c.name}/>
                                                
                                                <h1 class="text-xl font-semibold hover:text-gray-500 p-4 m-0">
                                                        {c.name}
                                                </h1>
                                            </div>
                                        </Link>
                                </>
                            )
                        })}
                    </div>
            
                
                    <hr class="border-1 border-gray-200 my-20"></hr>

                
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div>
                            <Image src={wifi} alt="serviced" />
                            <h1 class="text-xl font-semibold mt-4">Fully Serviced</h1>
                            <p style={{color: '#808080'}} class="mt-2 text-base">Fully serviced Meeting Rooms, Conference Rooms, Training Room and Serviced Office on rent available at efficient prices 
                                with easy access and instant booking system.</p>
                        </div>

                        <div>
                            <Image src={double} alt="serviced" />
                            <h1 class="text-xl font-semibold mt-4">Fully Furnished</h1>
                            <p style={{color: '#808080'}} class="mt-2 text-base">Fully equipped meeting rooms/conference rooms with Inspiring Work Environments. They are available in multiple sizes 
                            and location with ultra-modern equipment.</p>
                        </div>

                        <div>
                            <Image src={stopwatch} alt="serviced" />
                            <h1 class="text-xl font-semibold mt-4">Flexible Terms</h1>
                            <p style={{color: '#808080'}} class="mt-2 text-base">24/7 Access with Flexible Timings and Professional Support. Speedy Internet and Networking Events. Meeting Rooms are 
                            available to rent by the hour, half or full day.</p>
                        </div>
                    </div>

                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 mt-6">
                                            {city.resources.map((c) => {
                                                return(
                                                    <>
                                                    <Link key={c.id} as={`/${c.slug}`} href={`/${c.slug}`}>
                                                                <div class="mt-6 hover:text-gray-500 border border-gray-5 hover:shadow-xl transition  duration-200 rounded">
                                                                <img class="h-64 w-full" src={c.srcImages[0].large} alt={c.name} />
                                                                    
                                                                    <h1 class="text-xl mt-4 pl-4 font-semibold truncate">{c.name}</h1>
                                                                    
                                                                    <div class="flex items-center justify-between pl-4 mt-4">

                                                                        <div class="flex items-center">
                                                                            <Image width={20} height={20} src={pin} alt="location"/>

                                                                            <p class="text-md pl-2 m-0">
                                                                                {c.areas.map((a) => {
                                                                                    return(
                                                                                        <>
                                                                                            {a.area}
                                                                                        </>
                                                                                    )
                                                                                })}
                                                                            </p>
                                                                        </div>
                                                                        
                                                                        <div>

                                                                            <p class="text-md pr-4 m-0">
                                                                                Minimum {c.minBooking}
                                                                            </p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div class="flex items-center justify-between pl-4 mt-4">

                                                                        <div class="flex items-center">
                                                                            <Image class="w-4" src={chair} alt="location"/>

                                                                            <p class="text-md pl-2 m-0">
                                                                                {c.seater} Seats
                                                                            </p>
                                                                        </div>
                                                                        
                                                                        <div class="flex items-center pr-4">
                                                                            <Image width={20} height={20} src={rupee} alt="location"/>

                                                                            <p class="text-lg pl-2 font-bold m-0">
                                                                                {c.hourPricing}/-
                                                                            </p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    

                                                                    
                                                                    <Link href={`/${c.slug}`}>
                                                                        <div style={{backgroundColor: '#788794'}} class="hover:bg-black m-auto  p-4 w-11/12  mt-6 mb-6">
                                                                            <h1 class="text-white text-center m-0">Explore Now</h1>
                                                                        </div>
                                                                    </Link>

                                                                </div>
                                                            </Link>
                                                    </>
                                                )
                                            })}
                                        </div>
            
            
     
      


            </>
      )
    })}

      
    </div>
  )
}
